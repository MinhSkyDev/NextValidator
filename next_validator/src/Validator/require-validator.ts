import { IValidationRule } from "./interface-validator";


export class RequiredValidationRule implements IValidationRule {
  
    evaluate(target: any, value: any, key: string): string | null {
        if (value) {
            return null;
        }
  
        return `${key} is required`;
    }
  }