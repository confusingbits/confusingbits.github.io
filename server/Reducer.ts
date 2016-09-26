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
    items: iBnet.Items;
    progression: iBnet.Progression;
    totalHonorableKills: number;

    constructor(name: string, items: iBnet.Items, progression: iBnet.Progression) {
        this.name = name;
        this.items = new ItemsReduced(items);
        this.progression = progression;
    }
}

export class ItemsReduced implements iBnet.Items {
    averageItemLevel: number;
    averageItemLevelEquipped: number;
    head: iBnet.Head;
    neck: iBnet.Neck;
    shoulder: iBnet.Shoulder;
    back: iBnet.Back;
    chest: iBnet.Chest;
    shirt: iBnet.Shirt;
    tabard: iBnet.Tabard;
    wrist: iBnet.Wrist;
    hands: iBnet.Hands;
    waist: iBnet.Waist;
    legs: iBnet.Legs;
    feet: iBnet.Feet;
    finger1: iBnet.Finger1;
    finger2: iBnet.Finger2;
    trinket1: iBnet.Trinket1;
    trinket2: iBnet.Trinket2;
    mainHand: iBnet.MainHand;
    offHand: iBnet.OffHand;

    constructor(items: iBnet.Items) {
        this.averageItemLevel = items.averageItemLevel;
        this.head = new HeadReduced(items.head);
        this.neck = new NeckReduced(items.neck);
        this.shoulder = new ShoulderReduced(items.shoulder);
        this.back = new BackReduced(items.back);
        this.chest = new ChestReduced(items.chest);
        this.wrist = new WristReduced(items.wrist);
        this.hands = new HandsReduced(items.hands);
        this.waist = new WaistReduced(items.waist);
        this.legs = new LegsReduced(items.legs);
        this.feet = new FeetReduced(items.feet);
        this.finger1 = new Finger1Reduced(items.finger1);
        this.finger2 = new Finger2Reduced(items.finger2);
        this.trinket1 = new Trinket1Reduced(items.trinket1);
        this.trinket2 = new Trinket2Reduced(items.trinket2);
        this.mainHand = new MainHandReduced(items.mainHand);
        if (items.offHand !== undefined) this.offHand = new OffHandReduced(items.offHand);

    }
}

export class ItemReduced implements iBnet.Item {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams;
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

    constructor(head: iBnet.Head) {
        this.id = head.id
        this.itemLevel = head.itemLevel;
        this.bonusLists = head.bonusLists;
    }
}

export class HeadReduced implements iBnet.Head {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams;
    stats: iBnet.Stat[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance;

    constructor(head: iBnet.Head) {
        this.id = head.id
        this.itemLevel = head.itemLevel;
        this.bonusLists = head.bonusLists;
    }
}

export class NeckReduced implements iBnet.Neck {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams2;
    stats: iBnet.Stat2[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance2;

    constructor(neck: iBnet.Neck) {
        this.id = neck.id;
        this.itemLevel = neck.itemLevel;
        this.bonusLists = neck.bonusLists;
    }
}

export class ShoulderReduced implements iBnet.Shoulder {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams3;
    stats: iBnet.Stat3[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance3;

    constructor(shoulder: iBnet.Shoulder) {
        this.id = shoulder.id;
        this.itemLevel = shoulder.itemLevel;
        this.bonusLists = shoulder.bonusLists;
    }
}

export class BackReduced implements iBnet.Back {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams4;
    stats: iBnet.Stat4[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance4;

    constructor(back: iBnet.Back) {
        this.id = back.id;
        this.itemLevel = back.itemLevel;
        this.bonusLists = back.bonusLists;
    }
}

export class ChestReduced implements iBnet.Chest {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams5;
    stats: iBnet.Stat5[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance5;

    constructor(chest: iBnet.Chest) {
        this.id = chest.id;
        this.itemLevel = chest.itemLevel;
        this.bonusLists = chest.bonusLists;
    }
}

export class WristReduced implements iBnet.Wrist {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams8;
    stats: iBnet.Stat6[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance8;

    constructor(wrist: iBnet.Wrist){
        this.id = wrist.id;
        this.itemLevel = wrist.itemLevel;
        this.bonusLists = wrist.bonusLists;
    }
}

export class HandsReduced implements iBnet.Hands {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams9;
    stats: iBnet.Stat7[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance9;

    constructor(hands: iBnet.Hands){
        this.id = hands.id;
        this.itemLevel = hands.itemLevel;
        this.bonusLists = hands.bonusLists;
    }
}

export class WaistReduced implements iBnet.Waist {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams10;
    stats: iBnet.Stat8[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance10;

    constructor(waist: iBnet.Waist){
        this.id = waist.id;
        this.itemLevel = waist.itemLevel;
        this.bonusLists = waist.bonusLists;
    }
}

export class LegsReduced implements iBnet.Legs {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams11;
    stats: iBnet.Stat9[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance11;

    constructor(legs: iBnet.Legs){
        this.id = legs.id;
        this.itemLevel = legs.itemLevel;
        this.bonusLists = legs.bonusLists;
    }
}

export class FeetReduced implements iBnet.Feet {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams12;
    stats: iBnet.Stat10[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance12;

    constructor(feet: iBnet.Feet){
        this.id = feet.id;
        this.itemLevel = feet.itemLevel;
        this.bonusLists = feet.bonusLists;
    }
}

export class Finger1Reduced implements iBnet.Finger1 {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams13;
    stats: iBnet.Stat11[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance13;

    constructor(finger1: iBnet.Finger1){
        this.id = finger1.id;
        this.itemLevel = finger1.itemLevel;
        this.bonusLists = finger1.bonusLists;
    }
}

export class Finger2Reduced implements iBnet.Finger2 {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams14;
    stats: iBnet.Stat12[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance14;

    constructor(finger2: iBnet.Finger2){
        this.id = finger2.id;
        this.itemLevel = finger2.itemLevel;
        this.bonusLists = finger2.bonusLists;
    }
}

export class Trinket1Reduced implements iBnet.Trinket1 {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams15;
    stats: iBnet.Stat13[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance15;

    constructor(trinket1: iBnet.Trinket1){
        this.id = trinket1.id;
        this.itemLevel = trinket1.itemLevel;
        this.bonusLists = trinket1.bonusLists;
    }
}

export class Trinket2Reduced implements iBnet.Trinket2 {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams16;
    stats: iBnet.Stat14[];
    armor: number;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance16;

    constructor(trinket2: iBnet.Trinket2){
        this.id = trinket2.id;
        this.itemLevel = trinket2.itemLevel;
        this.bonusLists = trinket2.bonusLists;
    }
}

export class MainHandReduced implements iBnet.MainHand {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams17;
    stats: iBnet.Stat15[];
    armor: number;
    weaponInfo: iBnet.WeaponInfo;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: iBnet.ArtifactTrait[];
    relics: iBnet.Relic[];
    appearance: iBnet.Appearance17;

    constructor(mainhand: iBnet.MainHand){
        this.id = mainhand.id;
        this.itemLevel = mainhand.itemLevel;
        this.bonusLists = mainhand.bonusLists;
    }
}

export class OffHandReduced implements iBnet.OffHand {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: iBnet.TooltipParams18;
    stats: iBnet.Stat16[];
    armor: number;
    weaponInfo: iBnet.WeaponInfo2;
    context: string;
    bonusLists: any[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: iBnet.Appearance18;

    constructor(offhand: iBnet.OffHand){
        this.id = offhand.id;
        this.itemLevel = offhand.itemLevel;
        this.bonusLists = offhand.bonusLists;
    }
}