import { DumbValidationRule } from '../../Validator/dumb-validator'
import { IValidationRule } from '../../Validator/interface-validator'
import { BitValidationRule } from '../../Validator/isBit-validator'
import { EmailValidationRule } from '../../Validator/isEmail-validator'
import { HexaValidationRule } from '../../Validator/isHexa-validator'
import { IdentifyCardValidationRule } from '../../Validator/isIdentifyCard-validator'
import { OctValidationRule } from '../../Validator/isOct-validator'
import { RequiredValidationRule } from '../../Validator/require-validator'
import { IValidatorAbstractFactory, ValidatorRule } from './interface-validator-factory'

export class NonParamValidatorFactory implements IValidatorAbstractFactory {
  createValidation(ruleName: ValidatorRule): IValidationRule {
    let validation: IValidationRule = new DumbValidationRule()

    switch (ruleName) {
      case ValidatorRule.REQUIRED:
        validation = new RequiredValidationRule()
      case ValidatorRule.NEGATIVE:
        break
      case ValidatorRule.POSITIVE:
        break
      case ValidatorRule.BLANK:
        break
      case ValidatorRule.IS_DATE:
        break
      case ValidatorRule.IS_ALPHA:
        break
      case ValidatorRule.IS_APLHA_NUMERIC:
        break
      case ValidatorRule.IS_BIT:
        validation = new BitValidationRule()
        break
      case ValidatorRule.IS_HEXA:
        validation = new HexaValidationRule()
        break
      case ValidatorRule.IS_OCT:
        validation = new OctValidationRule()
        break
      case ValidatorRule.IS_DATA_URI:
        break
      case ValidatorRule.IS_EMAIL:
        validation = new EmailValidationRule()
        break
      default:
        validation = new DumbValidationRule()
        break
    }

    return validation
  }
}
