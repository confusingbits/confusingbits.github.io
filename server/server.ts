import {secret} from './secret';
var fs = require('fs');

var bnet = require('battlenet-api')(secret());

// var key = 'zgtxjs8eh7jfb9j6x7zvgfz6hu2fsr5y';
// var char = 'https://us.api.battle.net/wow/character/Hyjal/Aeriwen?fields=items&locale=en_US&apikey=zgtxjs8eh7jfb9j6x7zvgfz6hu2fsr5y';
// var gurl = 'https://us.api.battle.net/wow/guild/Hyjal/Regulatørs?fields=members&locale=en_US&apikey=' + key;


// var data = fs.readFileSync('../data/guilddata.json', "utf8")
// var json = JSON.parse(data);

var newData = [];
var requests = 0;

function getGuildMembers(guild, realm, region) {

    bnet.wow.guild.members(
        {
            origin: region,
            realm: realm,
            name: guild
        },
        (error, resp, body) => {
            getMembers(resp.members);
        }
    );

}

function getMembers(members) {
    members
        .filter((members) => members.character.level >= 110) //filter by 110s
        .forEach((members) => {
            getItems(members.character.name) //get each members items
            requests++;
        });
}

function getItems(member) {

    bnet.wow.character.items({
        origin: 'us',
        realm: 'Hyjal',
        name: member
    }, function (error, resp, body) {
        var memberData = {};
        if (error) console.log(error.message);
        else {
            memberData['name'] = resp.name;
            memberData['items'] = resp.items
            newData.push(memberData);
            requests--;
            if (requests === 0) saveData(JSON.stringify(newData));
        }
    });
}

function saveData(data){
    fs.writeFile('guilddata.json', data, 'utf8', console.log('done'));
}

getGuildMembers('Regulatørs', 'Hyjal', 'us');