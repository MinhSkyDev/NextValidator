import { IValidationRule } from './interface-validator'
import { hexRegex } from './regex/common'

export class HexaValidationRule implements IValidationRule {
  evaluate(target: any, value: any, key: string): string | null {
    if (hexRegex.test(value)) {
      return null
    }

    return `${value} is not a hexa`
  }
}
