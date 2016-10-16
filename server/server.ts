import { secret } from './secret';
import { Member } from './iBnet';
import { MemberReduced } from './Reducer';

var RateLimiter = require('limiter').RateLimiter;
var limiter = new RateLimiter(100, 'second'); //limiter throttles the requests to 100/sec

var fs = require('fs');
var bnet = require('battlenet-api')(secret());

var newData: Member[] = [];
var requests = 0;

function getGuildMembers(guild: string, realm: string, region: string) {
    bnet.wow.guild.members(
        {
            origin: region,
            realm: realm,
            name: guild
        },
        (error, resp, body) => {
            if (error) console.log(`Error Fetching the guild member list: ${error.message}.`);
            else getMembers(resp.members);
        }
    );

}

function getMembers(members) {
    console.log('Fetching guild member list!')
    members
        .filter((member) => member.character.level === 110) //filter by 110s
        .forEach((member) => {
            limiter.removeTokens(1, () => getMember(member.character.name)); //get each members items
            requests++;
        });
}

function getMember(member: Member) {
    bnet.wow.character.aggregate({
        origin: 'us',
        realm: 'Hyjal',
        name: member,
        fields: ['items', 'progression']
    }, getData);
}

function getData(error, member: Member): void {
    let retry = 3;
    if (error) {
        if (retry--) getData(error, member); //try again, 3 times
        else console.log(`Error retrieving ${member.name}: ${error.message}`);
    }
    else {
        console.log(`Fetching: ${member.name}`);
        if (member.items.averageItemLevel >= 830) newData.push(new MemberReduced(member.name, member.items, member.progression)); //filter 830 ilvl
        requests--;
        if (requests === 0) saveData(JSON.stringify(newData));
    }
}

function saveData(data: string): void {
    fs.writeFile('guilddata.json', data, 'utf8', console.log('Finished! Data located in guilddata.json.'));
}

getGuildMembers('Regulatørs', 'Hyjal', 'us');
