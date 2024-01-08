import { DumbValidationRule } from "../../Validator/dumb-validator";
import { IValidationRule } from "../../Validator/interface-validator";
import { RequiredValidationRule } from "../../Validator/require-validator";
import { IValidatorAbstractFactory, ValidatorRule } from "./interface-validator-factory";

export class NonParamValidatorFactory implements IValidatorAbstractFactory{
    createValidation(ruleName : ValidatorRule) : IValidationRule{
        let validation : IValidationRule = new DumbValidationRule();

        switch(ruleName){
            case ValidatorRule.REQUIRED:
                validation = new RequiredValidationRule();
            case ValidatorRule.NEGATIVE:
                break;
            case ValidatorRule.POSITIVE:
                break;
            case ValidatorRule.BLANK:
                break;
            case ValidatorRule.IS_DATE:
                break;
            case ValidatorRule.IS_ALPHA:
                break;
            case ValidatorRule.IS_APLHA_NUMERIC:
                break;
            case ValidatorRule.IS_BIT:
                break;
            case ValidatorRule.IS_DATA_URI:
                break;
            case ValidatorRule.IS_EMAIL:
                break;
            case ValidatorRule.IS_IDENTITY_CARD:
                break;
            default:
                validation = new DumbValidationRule();
                break;
        }

        return validation;
    }
}