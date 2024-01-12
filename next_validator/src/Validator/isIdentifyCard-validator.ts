import { IParamValidationRule } from './interface-validator'
import {
  AmericaIdentifyCardRegexExp,
  BritishIdentifyCardRegexExp,
  VietNamIdentifyCardRegexExp
} from './regex/identifyCardRegex'

interface identifyValidateStategy {
  validate(identifyCard: string): boolean | null
}

class DefaultIdentifyCardValidateStrategy implements identifyValidateStategy {
  validate(identifyCard: string): boolean {
    return false
  }
}

class VietNamIdentifyCardValidateStategy implements identifyValidateStategy {
  validate(identifyCard: string): boolean {
    return VietNamIdentifyCardRegexExp.test(identifyCard)
  }
}

class AmericaIdentifyCardValidateStategy implements identifyValidateStategy {
  validate(identifyCard: string): boolean {
    return AmericaIdentifyCardRegexExp.test(identifyCard)
  }
}

class BritishIdentifyCardValidateStategy implements identifyValidateStategy {
  validate(identifyCard: string): boolean {
    return BritishIdentifyCardRegexExp.test(identifyCard)
  }
}

const mapCountry2ValidateStrategy: { [key: string]: identifyValidateStategy } = {
  VietNam: new VietNamIdentifyCardValidateStategy(),
  America: new AmericaIdentifyCardValidateStategy(),
  British: new BritishIdentifyCardValidateStategy()
}

export class IdentifyCardValidationRule implements IParamValidationRule {
  private validateStrategy: identifyValidateStategy

  constructor(param: string) {
    this.validateStrategy = mapCountry2ValidateStrategy[param]
  }

  setParam(param: any): void {
    this.validateStrategy = mapCountry2ValidateStrategy[param]
  }
  getParam() {
    return this.validateStrategy
  }
  evaluate(target: any, value: any, key: string): string {
    if (!this.validateStrategy.validate(value)) {
      return `${value} is not a valid indentify card number`
    }
  }
}
