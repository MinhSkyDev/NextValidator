import { IValidationRule } from "../../Validator/interface-validator";

export enum ValidatorRule{

    //----------------NONPARAM----------------
    START_NON_PARAM,
    //OBJECT
    REQUIRED,

    //NUMBER
    POSITIVE,
    NEGATIVE,

    //STRING
    BLANK,
    IS_DATE,
    IS_ALPHA, // Checks if the string contains only letters (a-zA-Z)
    IS_APLHA_NUMERIC, // Checks if the string contains only letters and numbers
    IS_BIT, // check if the string is BIT
    IS_HEXA,
    IS_OTC,
    IS_DATA_URI,
    IS_EMAIL,
    END_NON_PARAM,

    //----------------PARAM----------------
    START_PARAM,

    //NUMBER
    MININT,
    MAXINT,
    IS_DIVISIBLE_BY,

    //STRING
    MINSTRING,
    MAXSTRING,
    IS_IDENTITY_CARD, // Check if the string is in identity card format of a country (country code) 
    //MQL : Strategy Design Pattern
    END_PARAM,
    

    //Dumb validator
    NONE,
}


export enum ValidatorParamRule{}


export interface IValidatorAbstractFactory{
    createValidation(ruleName: ValidatorRule) : IValidationRule;
}