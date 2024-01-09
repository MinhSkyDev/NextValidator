import { IParamValidationRule } from "./interface-validator";


export class MaxStringValidationRule implements IParamValidationRule {

    private maxSize: number;

    public constructor(param : number){
        this.maxSize = param;
    }

    setParam(param: any): void {
        this.maxSize = param;
    }
    getParam() {
        return this.maxSize;
    }

    evaluate(target: any, value: any, key: string): string | null {
        let currentString: string = value;
        
        if(currentString){
            if(currentString.length > this.maxSize){
                return `Current must not higher than ${this.maxSize}`;
            }
        }
        else{
            return '${key} is required';
        }
        return null;
    }
  }