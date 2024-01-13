import { ValidatorRule } from '../Service/Factory/interface-validator-factory'
import { NonParamValidatorFactory } from '../Service/Factory/nonparam-validator-factory'
import { ParamValidatorFactory } from '../Service/Factory/param-validator-factory'
import { ValidatorAbstractFactory } from '../Service/Factory/super-validator-factory'
import { ValidatorService } from '../Service/validator-service'
import { CustomValidationRule } from '../Validator/custom-validator'
import { IValidationRule } from '../Validator/interface-validator'

export function required(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.REQUIRED,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.REQUIRED)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function minSize(minSize: number) {
  function minSizeDecorator(target: any, propertyKey: string): void {
    let factory: ParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
      ValidatorRule.MINSTRING,
      minSize
    ) as ParamValidatorFactory

    let rule: IValidationRule = factory.createValidation(ValidatorRule.MINSTRING)

    ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
  }

  return minSizeDecorator
}

export function maxSize(maxSize: number) {
  function minSizeDecorator(target: any, propertyKey: string): void {
    let factory: ParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
      ValidatorRule.MAXSTRING,
      maxSize
    ) as ParamValidatorFactory

    let rule: IValidationRule = factory.createValidation(ValidatorRule.MAXSTRING)

    ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
  }

  return minSizeDecorator
}

export function custom(customRule: CustomValidationRule) {
  function customDecorator(target: any, propertyKey: string): void {
    let factory: ParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
      ValidatorRule.CUSTOM,
      customRule
    ) as ParamValidatorFactory

    let rule: IValidationRule = factory.createValidation(ValidatorRule.CUSTOM)

    ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
  }

  return customDecorator
}

export function isIdentifyCard(country: string) {
  function isIdentifyCardDecorator(target: any, propertyKey: string): void {
    let factory: ParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
      ValidatorRule.IS_IDENTITY_CARD,
      country
    ) as ParamValidatorFactory
    let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_IDENTITY_CARD)

    ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
  }

  return isIdentifyCardDecorator
}

export function isEmail(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_EMAIL,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_EMAIL)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isHexa(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_HEXA,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_HEXA)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isOct(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_OCT,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_OCT)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isBit(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_BIT,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_BIT)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isBlank(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.BLANK,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.BLANK)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isDate(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_DATE,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_DATE)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isAlpha(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_ALPHA,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_ALPHA)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}

export function isAlphaNumeric(target: any, propertyKey: string) {
  let factory: NonParamValidatorFactory = ValidatorAbstractFactory.getInstance().getValidtorFactory(
    ValidatorRule.IS_APLHA_NUMERIC,
    null
  )
  let rule: IValidationRule = factory.createValidation(ValidatorRule.IS_APLHA_NUMERIC)
  ValidatorService.getInstance().addValidationRule(target, propertyKey, rule)
}
