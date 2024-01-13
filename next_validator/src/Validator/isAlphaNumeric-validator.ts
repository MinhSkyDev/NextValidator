import { IValidationRule } from './interface-validator'

export class AlphaNumericValidationRule implements IValidationRule {
  // Checks if the string contains only letters and numbers
  evaluate(target: any, value: any, key: string): string | null {
    const alphaNumericRegex = /^[a-zA-Z0-9]+$/

    if (alphaNumericRegex.test(value)) {
      return null
    }
    return `${value} does not contains only letters and numbers`
  }
}
