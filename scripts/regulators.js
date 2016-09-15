(function () {
    // imports are loaded and elements have been registered
    window.addEventListener('WebComponentsReady', function (e) {

        function getData() {

            var url = '/data/guilddata.json';
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
            for (var m in members) {
                $('#roster').append('<tr>' + makeGearTableTD(members[m]) + '</tr>');
            }
        }

        //make row data
        function makeGearTableTD(member) {

            var gearslots = ["mainHand", "head", "neck", "shoulder", "back", "chest", "wrist", "hands", "waist", "legs", "feet", "finger1", "finger2", "trinket1", "trinket2"];
            var gearstring = "";

            gearstring += '<td>' + member.name + '</td>'
            gearstring += '<td>' + member.items.averageItemLevel.toString() + '</td>'

            gearslots.forEach(function (slotname) {
                var item = member.items[slotname];
                gearstring += '<td><a ' + 'rel=\"' + getItemId(item) + getItemBonusIds(item) + '\">' + item.itemLevel.toString() + '</a></td>';
            })

            return gearstring;
        }

        //get item id string for wowhead
        function getItemId(item) {
            return 'item=' + item.id.toString() + ';';
        }

        //append bonus ids for wowheadlinks
        function getItemBonusIds(item) {

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
        
        //FINALLY DO THE THING
        getData();
    });
})();