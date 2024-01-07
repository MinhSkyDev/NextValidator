import { IValidationRule } from "../../Validator/interface-validator";

export interface IValidationIterator{
    hasNext() : boolean;
    next() : IValidationRule
    current() : IValidationRule
    key() : number
}