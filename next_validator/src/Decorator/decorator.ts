import { IValidationRule } from "../Validator/interface-validator";
import { MinStringValidationRule } from "../Validator/minString-validator";
import { RequiredValidationRule } from "../Validator/require-validator";

function addValidationRule(target: any, propertyKey: string, rule: IValidationRule) {
    let rules: IValidationRule[] = Reflect.getMetadata("validation", target, propertyKey) || [];
    rules.push(rule);
  
    let properties: string[] = Reflect.getMetadata("validation", target) || [];
    if (properties.indexOf(propertyKey) < 0) {
        properties.push(propertyKey);
    }
  
    Reflect.defineMetadata("validation", properties, target);
    Reflect.defineMetadata("validation", rules, target, propertyKey);
  }

export function required(target: any, propertyKey: string) {
    addValidationRule(target, propertyKey, RequiredValidationRule.instance);
}

export function minSize(minSize: number){
    function minSizeDecorator(target: any, propertyKey: string): void {
        addValidationRule(target, propertyKey, new MinStringValidationRule(minSize));
    }

    return minSizeDecorator;
}