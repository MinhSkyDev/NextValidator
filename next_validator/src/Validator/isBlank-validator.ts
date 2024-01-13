import { IValidationRule } from './interface-validator'

export class BlankValidationRule implements IValidationRule {
  evaluate(target: any, value: any, key: string): string | null {
    const blankRegex = /^\s*$/

    if (blankRegex.test(value)) {
      return null
    }
    return `${value} is not blank`
  }
}
