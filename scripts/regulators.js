"use strict";
window.onload = function () {
    //DO THE THING
    getData();
};
function getData() {
    var url = 'guilddata.json';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.getElementById('last-modified').innerText = new Date(this.getResponseHeader('Last-Modified')).toLocaleString();
            useData(this.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
function useData(response) {
    var members = JSON.parse(response);
    //sort by desending average ilvl
    members.sort(function (a, b) { return b.items.averageItemLevel - a.items.averageItemLevel; });
    //descriptive names are great, right?
    insertTable(members);
}
//build and insert the table data
function insertTable(members) {
    members.forEach(function (member) {
        //this was cast to let typescript know it is selecting a table element
        var row = document.getElementById('roster').tBodies[0].insertRow(-1);
        //fyi the -1 inserts at the end because an append method would make too much sense
        row.insertCell(-1).innerHTML = member.name;
        row.insertCell(-1).innerHTML = member.items.averageItemLevel.toString();
        //list of gear slot names to iterate over.
        var gearslots = ["mainHand", "offHand", "head", "neck", "shoulder", "back", "chest", "wrist",
            "hands", "waist", "legs", "feet", "finger1", "finger2", "trinket1", "trinket2"];
        //can probably change this is iterate directly over member.items at some point
        gearslots.forEach(function (slotname) { return insertCell(slotname, member.items[slotname], row); });
    });
}
function insertCell(slotname, item, row) {
    var cell = row.insertCell(-1); //insert a cell into the row
    //build an a element for wowhead
    var a = document.createElement('a');
    if (item) {
        //build the rel attribute string that wowhead uses
        a.rel = getRelString(item);
        //flag the a text for issues
        if (checkEnchant(item, slotname))
            a.className = 'text-danger'; // color missing enchant
        if (checkGems(item))
            cell.className = 'danger'; // color missing gem
        a.innerHTML = item.itemLevel.toString(); // put some text into the a
    }
    //add the a element to the cell
    cell.appendChild(a);
}
function getRelString(item) {
    return "" + getItemIdString(item) + getItemBonusIdString(item) + getEnchantString(item) + getGemsString(item) + getSetBonusString(item);
}
//build item id string for wowhead
function getItemIdString(item) {
    return 'item=' + item.id.toString();
}
//build bonus ids for wowhead
function getItemBonusIdString(item) {
    if (item.bonusLists) {
        var bonusstring = ';bonus=';
        item.bonusLists.forEach(function (bonus) { bonusstring += bonus + ':'; });
        return bonusstring.slice(0, -1); //trim trailing ':'
    }
    else
        return '';
}
//build the enchant string for wowhead
function getEnchantString(item) {
    if (item.tooltipParams.enchant || item.tooltipParams.tinker) {
        var enchantstring = ';ench=';
        if (item.tooltipParams.enchant)
            enchantstring += item.tooltipParams.enchant.toString();
        //if (item.tooltipParams.tinker) enchantstring += item.tooltipParams.tinker; //doesn't work, no tinker documentation
        return enchantstring;
    }
    else
        return "";
}
//build gem string for wowhead
function getGemsString(item) {
    //gems are properties, so we can't just iterate over them
    if (item.tooltipParams.gem0 || item.tooltipParams.gem1 || item.tooltipParams.gem2) {
        var gemstring = ';gems=';
        if (item.tooltipParams.gem0)
            gemstring += item.tooltipParams.gem0.toString() + ':';
        if (item.tooltipParams.gem1)
            gemstring += item.tooltipParams.gem1.toString() + ':';
        if (item.tooltipParams.gem2)
            gemstring += item.tooltipParams.gem2.toString();
        return gemstring;
    }
    else
        return '';
}
//build set bonus string for wowhead
function getSetBonusString(item) {
    if (item.tooltipParams.set) {
        var setstring = ';pcs=';
        item.tooltipParams.set.forEach(function (bonus) { setstring += bonus.toString() + ':'; });
        return setstring.slice(0, -1); //trim the last ':'
    }
    else
        return '';
}
//business logic for flagging missing enchants
function checkEnchant(item, slotname) {
    return !item.tooltipParams.enchant
        && (slotname === 'neck'
            || slotname === 'back'
            || slotname === 'finger1'
            || slotname === 'finger2');
}
//business logic for flagging missing bonus gems sockets (does not handle sockets on base item)
function checkGems(item) {
    return item.bonusLists.indexOf(1808) > -1 //have bonus socket?
        && !item.tooltipParams.gem0; // and no gem?
}
