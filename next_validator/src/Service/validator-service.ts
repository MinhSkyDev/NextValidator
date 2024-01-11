import { IValidationRule } from "../Validator/interface-validator";
import { IValidationIterator } from "./Iterator/interface-validator-iterator";
import { PropertyValidationList } from "./Iterator/property-validator-list";

export class ValidatorService{
    private static instance: ValidatorService;
    
    private constructor(){
        
    }

    public static getInstance(): ValidatorService {
        if (!ValidatorService.instance) {
            ValidatorService.instance = new ValidatorService();
        }

        return ValidatorService.instance;
    }

    addValidationRule(target: any, propertyKey: string, rule: IValidationRule) {
        let rules: PropertyValidationList = Reflect.getMetadata("validation", target, propertyKey) || new PropertyValidationList();
        rules.addRule(rule);
      
        let properties: string[] = Reflect.getMetadata("validation", target) || [];
        if (properties.indexOf(propertyKey) < 0) {
            properties.push(propertyKey);
        }
      
        Reflect.defineMetadata("validation", properties, target);
        Reflect.defineMetadata("validation", rules, target, propertyKey);

      }

      validate(target : any){
        // Get the list of properties to validate
        const keys = Reflect.getMetadata("validation", target) as string[];
        let errorMessages: string[] = [];
        if (Array.isArray(keys)) {
            for (const key of keys) {
                const propertyValidationList = Reflect.getMetadata("validation", target, key) as PropertyValidationList;
                if (!propertyValidationList) {
                    continue;
                }

                let iterator : IValidationIterator = propertyValidationList.iterator();
                while(iterator.hasNext()){
                    let currentRule = iterator.next();
                    let errCode = currentRule.evaluate(target, target[key], key);
                    if(errCode != null){
                        errorMessages.push(errCode);
                    }
                }
            }
        }

        return errorMessages;
      }

}