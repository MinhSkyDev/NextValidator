import { IValidatorAbstractFactory, ValidatorRule } from "./interface-validator-factory";
import { NonParamValidatorFactory } from "./nonparam-validator-factory";
import { ParamValidatorFactory } from "./param-validator-factory";

export class ValidatorAbstractFactory{

    private static instance: ValidatorAbstractFactory;

    public static getInstance(): ValidatorAbstractFactory {
        if (!ValidatorAbstractFactory.instance) {
            ValidatorAbstractFactory.instance = new ValidatorAbstractFactory();
        }

        return ValidatorAbstractFactory.instance;
    }

    constructor(){

    }

    public getValidtorFactory(ruleName : ValidatorRule, param : any) : IValidatorAbstractFactory{
        if( ValidatorRule.START_NON_PARAM < ruleName && ruleName < ValidatorRule.END_NON_PARAM){
            return new NonParamValidatorFactory();
        }
        else if(ValidatorRule.START_PARAM < ruleName && ruleName < ValidatorRule.END_PARAM){
            let factory : ParamValidatorFactory = new ParamValidatorFactory();
            factory.setParam(param);
            return factory;
        }
        else{
            return new NonParamValidatorFactory();
        }
    }
}