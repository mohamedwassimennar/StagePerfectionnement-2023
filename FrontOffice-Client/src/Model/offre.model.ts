export class Offre{
    constructor(
        public id?:number,
        public nom?:string,
        public image?:string,
        public prix?:Number,
        public datededebut?:Date,
        public datedefin?:Date
    ){}
}