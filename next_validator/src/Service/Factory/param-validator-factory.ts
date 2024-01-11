import { CustomValidationRule } from "../../Validator/custom-validator";
import { DumbValidationRule } from "../../Validator/dumb-validator";
import { IValidationRule } from "../../Validator/interface-validator";
import { MaxStringValidationRule } from "../../Validator/maxString-validator";
import { MinStringValidationRule } from "../../Validator/minString-validator";
import { IValidatorAbstractFactory, ValidatorRule } from "./interface-validator-factory";

export class ParamValidatorFactory implements IValidatorAbstractFactory{
    
    private param: any;

    public setParam(param : any){
        this.param = param;
    }

    public getParam() : any{
        return this.param;
    }

    createValidation(ruleName : ValidatorRule) : IValidationRule{
        let validation : IValidationRule = new DumbValidationRule();
        switch(ruleName){
            case ValidatorRule.MININT:
                break;
            case ValidatorRule.MAXINT:
                break;
            case ValidatorRule.MAXSTRING:
                validation = new MaxStringValidationRule(this.param as number);
                break;
            case ValidatorRule.MINSTRING:
                validation = new MinStringValidationRule(this.param as number);
                break;
            case ValidatorRule.CUSTOM:
                validation = this.param as CustomValidationRule;
                break;
            default:
                validation = new DumbValidationRule();
        }

        return validation;
    }

}