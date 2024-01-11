import { ValidatorRule } from "../Service/Factory/interface-validator-factory";
import { NonParamValidatorFactory } from "../Service/Factory/nonparam-validator-factory";
import { ParamValidatorFactory } from "../Service/Factory/param-validator-factory";
import { ValidatorAbstractFactory } from "../Service/Factory/super-validator-factory";
import { ValidatorService } from "../Service/validator-service";
import { CustomValidationRule } from "../Validator/custom-validator";
import { IValidationRule } from "../Validator/interface-validator";



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

        ValidatorService.getInstance().addValidationRule(target, propertyKey, rule);
    }

    return minSizeDecorator;
}

export function maxSize(maxSize: number){
    function minSizeDecorator(target: any, propertyKey: string): void {
        let factory : ParamValidatorFactory  = ValidatorAbstractFactory.getInstance().getValidtorFactory(
            ValidatorRule.MAXSTRING, maxSize) as ParamValidatorFactory;

        let rule : IValidationRule = factory.createValidation(ValidatorRule.MAXSTRING);

        ValidatorService.getInstance().addValidationRule(target, propertyKey, rule);
    }

    return minSizeDecorator;
}

export function custom(customRule: CustomValidationRule){
    function customDecorator(target: any, propertyKey: string): void {
        let factory : ParamValidatorFactory  = ValidatorAbstractFactory.getInstance().getValidtorFactory(
            ValidatorRule.CUSTOM, customRule) as ParamValidatorFactory;

        let rule : IValidationRule = factory.createValidation(ValidatorRule.CUSTOM);

        ValidatorService.getInstance().addValidationRule(target, propertyKey, rule);
    }

    return customDecorator;
}