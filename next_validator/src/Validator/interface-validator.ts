export interface IValidationRule {
    evaluate(target: any, value: any, key: string): string | null;
}

export interface IParamValidationRule extends IValidationRule {
    setParam(param:any): void;
    getParam(): any;
    evaluate(target: any, value: any, key: string): string | null;
}