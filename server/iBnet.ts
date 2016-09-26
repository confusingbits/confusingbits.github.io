export interface Member {
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
    items: Items;
    progression: Progression;
    totalHonorableKills: number;
}

export interface Items {
    averageItemLevel: number;
    averageItemLevelEquipped: number;
    head: Item;
    neck: Item;
    shoulder: Item;
    back: Item;
    chest: Item;
    shirt: Item;
    tabard: Item;
    wrist: Item;
    hands: Item;
    waist: Item;
    legs: Item;
    feet: Item;
    finger1: Item;
    finger2: Item;
    trinket1: Item;
    trinket2: Item;
    mainHand: Item;
    offHand: Item;
}

export interface Item {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: TooltipParams;
    stats: Stat[];
    armor: number;
    weaponInfo: WeaponInfo;
    context: string;
    bonusLists: any[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: any[];
    relics: any[];
    appearance: Appearance;
}

export interface TooltipParams {
    set: number[];
    enchant: number;
    tinker: number;
    transmogItem: number;
    timewalkerLevel: number;
    gem0: number;
    gem1: number;
    gem2: number;
}

export interface Stat {
    stat: number;
    amount: number;
}

export interface WeaponInfo {
    damage: Damage;
    weaponSpeed: number;
    dps: number;
}

export interface Damage {
    min: number;
    max: number;
    exactMin: number;
    exactMax: number;
}

export interface Appearance {
    itemId: number;
    itemAppearanceModId: number;
    enchantDisplayInfoId: number;
}

export interface Progression {
    raids: Raid[];
}

export interface Raid {
    name: string;
    lfr: number;
    normal: number;
    heroic: number;
    mythic: number;
    id: number;
    bosses: Boss[];
}

export interface Boss {
    id: number;
    name: string;
    normalKills: number;
    normalTimestamp: any;
    heroicKills?: number;
    heroicTimestamp?: number;
    lfrKills?: number;
    lfrTimestamp?: number;
    mythicKills?: number;
    mythicTimestamp?: number;
}