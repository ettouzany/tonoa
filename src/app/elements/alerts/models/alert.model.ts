export class Alert{
    title:string;
    message:string;
    params?: alertParams = null;
}
export class alertParams{
    btnColor?:string[]=[];
    btntext?:string[]=[];
    btnValues?:number[]=[];
    status?:string;
    posX?:string;
    posY?:string;
    frazer?:boolean;
    close?:boolean;
    action?(){}
}