import { IParamValidationRule } from "./interface-validator";


export class MinStringValidationRule implements IParamValidationRule {

    private minSize: number;

    public constructor(param : number){
        this.minSize = param;
    }

    setParam(param: any): void {
        this.minSize = param;
    }
    getParam() {
        return this.minSize;
    }

    evaluate(target: any, value: any, key: string): string | null {
        let currentString: string = value;
        
        if(currentString){
            if(currentString.length < this.minSize){
                return `Current must not lower than ${this.minSize}`;
            }
        }
        else{
            return '${key} is required';
        }
        return null;
    }
  }