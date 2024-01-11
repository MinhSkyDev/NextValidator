import { CustomValidationObject, CustomValidationRule } from "../../Validator/custom-validator";

export class CustomValidationBuilder{

    private currentCustomValidationObject = new CustomValidationObject();

    build() : CustomValidationRule {
        return new CustomValidationRule(this.currentCustomValidationObject);
    }

    setMinSize(minSize : number) : CustomValidationBuilder{
        this.currentCustomValidationObject.minSize = minSize;
        return this;
    }

    setMaxSize(maxSize : number): CustomValidationBuilder{
        this.currentCustomValidationObject.maxSize = maxSize;
        return this;

    }

    setRegex(regex : String): CustomValidationBuilder{
        this.currentCustomValidationObject.regex = regex as string;
        return this;

    }

    setCallback(callBackFunction : Function): CustomValidationBuilder{
        this.currentCustomValidationObject.callBackFunction = callBackFunction;
        return this;

    }
}