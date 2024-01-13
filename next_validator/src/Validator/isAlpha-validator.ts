import { IValidationRule } from './interface-validator'

export class AlphaValidationRule implements IValidationRule {
  // Checks if the string contains only letters (a-zA-Z)
  evaluate(target: any, value: any, key: string): string | null {
    const alphaRegex = /^[a-zA-Z]+$/

    if (alphaRegex.test(value)) {
      return null
    }
    return `${value} does not contains only letters (a-zA-Z)`
  }
}
