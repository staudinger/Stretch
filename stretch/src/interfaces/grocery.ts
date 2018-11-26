export interface IGrocery
{
    groceryName: string;
    imageUrl: string;
}

export class Grocery implements IGrocery
{
    constructor
    (
        public groceryName: string,
        public imageUrl: string
    )
    {

    }
}