import { IValidationRule } from "../../Validator/interface-validator";
import { IValidationIterator } from "./interface-validator-iterator";


class PropertyListIterator implements IValidationIterator{

    private position : number = 0;
    private propertyList : PropertyValidationList;

    constructor(propertyList : PropertyValidationList){
        this.propertyList = propertyList;
    }


    hasNext() : boolean{
        return this.position < this.propertyList.PropertyValidation.length;
    }

    next() : IValidationRule{
        let currentRule : IValidationRule = this.propertyList.PropertyValidation[this.position];
        this.position += 1;
        return currentRule;
    }

    current() : IValidationRule{
        let currentRule : IValidationRule = this.propertyList.PropertyValidation[this.position];
        return currentRule;
    }

    key() : number {
        return this.position;
    }
}


export class PropertyValidationList{

    public  PropertyValidation : IValidationRule[];

    constructor(){
        this.PropertyValidation = [];
    }

    public addRule(rule : IValidationRule){
        this.PropertyValidation.push(rule);
    }

    public iterator() : IValidationIterator{
        return new PropertyListIterator(this);
    }


}