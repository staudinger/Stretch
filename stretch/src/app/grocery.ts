export class Grocery 
{ 
    id: string;
    imageUrl: string;
    publixPrice: number;
    aldiPrice: number;
    traderJoesPrice: number;
    walmartPrice: number;
    constructor(values: Object = {}) 
    {
            Object.assign(this, values);
    }
    

    

}