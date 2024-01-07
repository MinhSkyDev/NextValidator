import { ValidatorService } from "../Service/validator-service";
import { MinStringValidationRule } from "../Validator/minString-validator";
import { RequiredValidationRule } from "../Validator/require-validator";



export function required(target: any, propertyKey: string) {
    ValidatorService.getInstance().addValidationRule(target,propertyKey,RequiredValidationRule.instance);
}

export function minSize(minSize: number){
    function minSizeDecorator(target: any, propertyKey: string): void {
        ValidatorService.getInstance().addValidationRule(target, propertyKey, new MinStringValidationRule(minSize));
    }

    return minSizeDecorator;
}