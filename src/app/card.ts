export class Card {
    id: number;

    type: string;
    rarity: string;
    name: string;
    text: string;
    image:{
        mini: string;
        large: string;
        inGame: string;
        illustrator: string;
    };
    color: number;
    ref: CardRef[];


    //if item
    goldCost: number;
    subType: string;

    attack: number;
    hitPoint: number;
    armor: number;

    manaCost: number;

}
/*
export class Item extends Card{
    //if item
    goldCost: number;
    subType: string;

}
export class Hero extends Card{
    attack: number;
    hitPoint: number;
    armor: number;
}
export class Creep extends Card{
    manaCost: number;
    attack: number;
    hitPoint: number;
}
export class Ability extends Card{

}
export class PassiveAbility extends Card{

}
export class Spell extends Card{
    manaCost: number;
}
*/


export class CardRef {
    card: Card;
    refType: string
}