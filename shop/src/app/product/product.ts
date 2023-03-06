export class Product{
    id:number | undefined;
    name:string;
    price:number;
    categoryId:number;
    description:string;
    imageUrl:string;
}
// type error was encountered 
// to solve the problem tsconfig.json>strict>false