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

        var gearslots = ["mainHand", "offHand", "head", "neck", "shoulder", "back", "chest", "wrist", "hands", "waist", "legs", "feet", "finger1", "finger2", "trinket1", "trinket2"];
        gearslots.forEach(function (slotname) {
            var a = document.createElement('a');

            if (member.items[slotname]) {

                a.rel = getItemIdString(member.items[slotname])
                    + getItemBonusIdString(member.items[slotname])
                    + getEnchantString(member.items[slotname])
                    + getGemsString(member.items[slotname])
                    + getSetBonusString(member.items[slotname]);

                a.innerHTML = member.items[slotname].itemLevel.toString();

            }
            row.insertCell(-1).appendChild(a);
        })

    });
}

//get item id string for wowhead
function getItemIdString(item) {
    return 'item=' + item.id.toString();
}

//append bonus ids for wowheadlinks
function getItemBonusIdString(item) {
    if (item.bonusLists) {
        var bonusstring = ';bonus=';
        item.bonusLists.forEach(function (bonus) { bonusstring += bonus + ':'; });
        return bonusstring.slice(0, -1); //trim trailing ':'....
    }
    else return '';
}

function getEnchantString(item) {
    if (item.tooltipParams.enchant || item.tooltipParams.tinker) {
        var enchantstring = ';ench='
        if (item.tooltipParams.enchant) enchantstring += item.tooltipParams.enchant.toString();
        //if (item.tooltipParams.tinker) enchantstring += item.tooltipParams.tinker; //doesn't work no documentation
        return enchantstring;
    }
    else return "";
}

function getGemsString(item) {
    if (item.tooltipParams.gem0 || item.tooltipParams.gem1 || item.tooltipParams.gem2) {
        var gemstring = ';gems=';
        if (item.tooltipParams.gem0) gemstring += item.tooltipParams.gem0.toString() + ':';
        if (item.tooltipParams.gem1) gemstring += item.tooltipParams.gem1.toString() + ':';
        if (item.tooltipParams.gem2) gemstring += item.tooltipParams.gem2.toString();
        return gemstring;
    }
    else return '';
}

function getSetBonusString(item) {
    if (item.tooltipParams.set) {
        var setstring = ';pcs=';
        item.tooltipParams.set.forEach(function (bonus) { setstring += bonus.toString() + ':'; });
        return setstring.slice(0, -1); //trim the last ':'
    }
    else return '';
}