import { ValidatorRule } from "../Service/Factory/interface-validator-factory";
import { NonParamValidatorFactory } from "../Service/Factory/nonparam-validator-factory";
import { ParamValidatorFactory } from "../Service/Factory/param-validator-factory";
import { ValidatorAbstractFactory } from "../Service/Factory/super-validator-factory";
import { ValidatorService } from "../Service/validator-service";
import { IValidationRule } from "../Validator/interface-validator";
import { MinStringValidationRule } from "../Validator/minString-validator";



export function required(target: any, propertyKey: string) {
    let factory : NonParamValidatorFactory  = ValidatorAbstractFactory.getInstance().getValidtorFactory(
        ValidatorRule.REQUIRED, null );
    let rule : IValidationRule = factory.createValidation(ValidatorRule.REQUIRED);
    ValidatorService.getInstance().addValidationRule(target,propertyKey, rule);
}

export function minSize(minSize: number){
    function minSizeDecorator(target: any, propertyKey: string): void {
        let factory : ParamValidatorFactory  = ValidatorAbstractFactory.getInstance().getValidtorFactory(
            ValidatorRule.MINSTRING, minSize) as ParamValidatorFactory;

        let rule : IValidationRule = factory.createValidation(ValidatorRule.MINSTRING);

        ValidatorService.getInstance().addValidationRule(target, propertyKey, new MinStringValidationRule(minSize));
    }

    return minSizeDecorator;
}