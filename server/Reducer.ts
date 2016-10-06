import * as iBnet from './iBnet';

export class MemberReduced implements iBnet.Member {
    lastModified: number;
    name: string;
    realm: string;
    battlegroup: string;
    class: number;
    race: number;
    gender: number;
    level: number;
    achievementPoints: number;
    thumbnail: string;
    calcClass: string;
    faction: number;
    items: ItemsReduced;
    progression: iBnet.Progression;
    totalHonorableKills: number;

    constructor(name: string, items: iBnet.Items, progression: iBnet.Progression) {
        this.name = name;
        this.items = new ItemsReduced(items);
        //this.progression = progression;
    }
}

export class ItemsReduced implements iBnet.Items {
    averageItemLevel: number;
    averageItemLevelEquipped: number;
    head: ItemReduced;
    neck: ItemReduced;
    shoulder: ItemReduced;
    back: ItemReduced;
    chest: ItemReduced;
    shirt: ItemReduced;
    tabard: ItemReduced;
    wrist: ItemReduced;
    hands: ItemReduced;
    waist: ItemReduced;
    legs: ItemReduced;
    feet: ItemReduced;
    finger1: ItemReduced;
    finger2: ItemReduced;
    trinket1: ItemReduced;
    trinket2: ItemReduced;
    mainHand: ItemReduced;
    offHand: ItemReduced;

    constructor(items: iBnet.Items) {
        this.averageItemLevel = items.averageItemLevel;
        this.head = new ItemReduced(items.head);
        this.neck = new ItemReduced(items.neck);
        this.shoulder = new ItemReduced(items.shoulder);
        this.back = new ItemReduced(items.back);
        this.chest = new ItemReduced(items.chest);
        this.wrist = new ItemReduced(items.wrist);
        this.hands = new ItemReduced(items.hands);
        this.waist = new ItemReduced(items.waist);
        this.legs = new ItemReduced(items.legs);
        this.feet = new ItemReduced(items.feet);
        this.finger1 = new ItemReduced(items.finger1);
        this.finger2 = new ItemReduced(items.finger2);
        this.trinket1 = new ItemReduced(items.trinket1);
        this.trinket2 = new ItemReduced(items.trinket2);
        this.mainHand = new ItemReduced(items.mainHand);
        //!= for null | undefined
        if (items.offHand != undefined) this.offHand = new ItemReduced(items.offHand);

    }
}

export class ItemReduced implements iBnet.Item {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: TooltipParamsReduced;
    stats: iBnet.Stat[];
    armor: number;
    weaponInfo: iBnet.WeaponInfo;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance;

    constructor(item: iBnet.Item) {
        this.id = item.id
        this.itemLevel = item.itemLevel;
        this.bonusLists = item.bonusLists;
        this.tooltipParams = new TooltipParamsReduced(item.tooltipParams);
    }
}

export class TooltipParamsReduced implements iBnet.TooltipParams{
    set: number[];
    enchant: number;
    tinker: number;
    transmogItem: number;
    timewalkerLevel: number;
    gem0: number;
    gem1: number;
    gem2: number;

    constructor(tooltipparams: iBnet.TooltipParams){
        this.set = tooltipparams.set;
        this.enchant = tooltipparams.enchant;
        this.gem0 = tooltipparams.gem0;
        this.gem1 = tooltipparams.gem1;
        this.gem2 = tooltipparams.gem2;
        this.tinker = tooltipparams.tinker;
    }
}