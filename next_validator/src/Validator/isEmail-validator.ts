import { IValidationRule } from './interface-validator'
import { emailRegex } from './regex/common'

export class EmailValidationRule implements IValidationRule {
  evaluate(target: any, value: any, key: string): string | null {
    if (emailRegex.test(value)) {
      return null
    }

    return `${key} is not an email address`
  }
}
