import "reflect-metadata";
import { IValidationRule } from "./Validator/interface-validator";
export * from './Decorator/decorator';


export class NextValidator{

    private static instance: NextValidator;

    constructor(){

    }

    public static getInstance(): NextValidator {
        if (!NextValidator.instance) {
            NextValidator.instance = new NextValidator();
        }

        return NextValidator.instance;
    }

    public validate(target: any){
        // Get the list of properties to validate
        const keys = Reflect.getMetadata("validation", target) as string[];
        let errorMessages: string[] = [];
        if (Array.isArray(keys)) {
            for (const key of keys) {
                const rules = Reflect.getMetadata("validation", target, key) as IValidationRule[];
                if (!Array.isArray(rules)) {
                    continue;
                }

                for (const rule of rules) {
                    const error = rule.evaluate(target, target[key], key);
                    if (error) {
                        errorMessages.push(error);
                    }
                }
            }
        }

        return errorMessages;
    }
}

