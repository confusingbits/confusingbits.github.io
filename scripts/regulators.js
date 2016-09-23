window.onload = function () {
    //FINALLY DO THE THING
    getData();
}

function getData() {

    var url = '/server/guilddata.json';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            useData(this.responseText);
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function useData(response) {
    var members = JSON.parse(response);

    //sorting by desending average ilvl for now
    members.sort(function (a, b) {
        return b.items.averageItemLevel - a.items.averageItemLevel;
    });

    //make table rows
    members.forEach(function (member) {

        var row = document.getElementById('roster').tBodies[0].insertRow(-1);

        row.insertCell(-1).innerHTML = member.name;
        row.insertCell(-1).innerHTML = member.items.averageItemLevel.toString();

        var gearslots = ["mainHand", "head", "neck", "shoulder", "back", "chest", "wrist", "hands", "waist", "legs", "feet", "finger1", "finger2", "trinket1", "trinket2"];
        gearslots.forEach(function (slotname) {

            var a = document.createElement('a');

            a.rel = getItemIdString(member.items[slotname]) + getItemBonusIdString(member.items[slotname]);
            a.innerHTML = member.items[slotname].itemLevel.toString();

            row.insertCell(-1).appendChild(a);
        })

    });
}

//get item id string for wowhead
function getItemIdString(item) {
    return 'item=' + item.id.toString() + ';';
}

//append bonus ids for wowheadlinks
function getItemBonusIdString(item) {

    var bonuslist = item.bonusLists;
    var bonusstring = 'bonus=';

    if (bonuslist.length > 0) {

        for (var bid in bonuslist) {

            if (bid == 0) bonusstring += bonuslist[bid].toString();
            else bonusstring += ':' + bonuslist[bid].toString();
        }
        return bonusstring + ";";
    }
    else return '';
}