import "reflect-metadata";
import { ValidatorService } from "./Service/validator-service";
export * from './Decorator/decorator';
export { CustomValidationBuilder } from './Service/Builder/custom-validator-builder';


export class NextValidator{

    private static instance: NextValidator;

    private constructor(){

    }

    public static getInstance(): NextValidator {
        if (!NextValidator.instance) {
            NextValidator.instance = new NextValidator();
        }

        return NextValidator.instance;
    }

    public validate(target: any){
        return ValidatorService.getInstance().validate(target);
    }
}

