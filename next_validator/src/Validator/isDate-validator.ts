import { IValidationRule } from './interface-validator'

export class DateValidationRule implements IValidationRule {
  evaluate(target: any, value: any, key: string): string | null {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/

    if (dateRegex.test(value)) {
      return null
    }
    return `${value} is not a date`
  }
}
