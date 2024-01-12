import { IValidationRule } from './interface-validator'
import { binRegex } from './regex/common'

export class BitValidationRule implements IValidationRule {
  evaluate(target: any, value: any, key: string): string | null {
    if (binRegex.test(value)) {
      return null
    }

    return `${value} is not a binary`
  }
}
