import { IValidationRule } from './interface-validator'
import { octRegex } from './regex/common'

export class OctValidationRule implements IValidationRule {
  evaluate(target: any, value: any, key: string): string | null {
    if (octRegex.test(value)) {
      return null
    }

    return `${value} is not a oct`
  }
}
