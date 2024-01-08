import { IValidationRule } from "./interface-validator";


export class DumbValidationRule implements IValidationRule {


    constructor(){

    }


    evaluate(target: any, value: any, key: string): string | null {
        return "Dumb Validator";
    }
  }