import { IParamValidationRule } from "./interface-validator";


//The builder for this class is in ../Builder/custom-validator-builder.ts

export class CustomValidationObject{
    maxSize : number; //Default -1
    minSize : number; //Default -1
    regex: string; //Regex hashString
    callBackFunction : Function;

    constructor(){
        this.maxSize = -1;
        this.minSize = -1;
        this.regex = "";
        this.callBackFunction = () => {};
    }

}

export class CustomValidationRule implements IParamValidationRule {


    private input: CustomValidationObject;

    public constructor(input: CustomValidationObject){
        this.input = input;
    }
    

    setParam(param: any): void {
        this.input = param;
    }
    getParam() {
        return this.input;
    }


    evaluate(target: any, value: any, key: string): string | null {
        let message : string = "";

        let currentString = value as string;
        let currentStringLength = currentString.length;

        if (this.input.minSize >= currentStringLength || this.input.maxSize <= currentStringLength){
            message += "String Length is not valid \n";
        }
        
        let regexp = new RegExp(this.input.regex);

        if (!regexp.test(currentString)){
            message += "String is not match with current \n";
        }

        if(this.input.callBackFunction(currentString) == false){
            message += "String is not match with custom function \n";
        }

        return message;
    }
  }