import { NextValidator, isAlpha, isAlphaNumeric, isBit, isBlank, isDate, isEmail, isHexa, isIdentifyCard, isOct, minSize, required } from "next-validator"

class Customer {
    @minSize(9)
    public firstName: string;
    @required
    public lastName: string;
    @isIdentifyCard("VietNam")
    public idCard: string;
    @isHexa
    public hex: string;
    @isHexa
    public notHex: string;
    @isOct
    public oct: string;
    @isOct
    public notOct: string;
    @isBit
    public bit: string;
    @isBit
    public notBit: string;
    @isEmail
    public email: string;
    @isEmail
    public notEmail: string;

    @isBlank
    public blank: string;
    @isDate
    public date: string;
    @isAlpha
    public alpha: string;
    @isAlphaNumeric
    public alphaNumeric: string;
}

var customer = new Customer();
customer.firstName = 'Gérald';
customer.idCard = "168"
customer.hex = "1ab29"
customer.notHex = "1rts"
customer.oct = "123523"
customer.notOct = "89"
customer.bit = "01010110101"
customer.notBit = "21512"
customer.email = "dang_252@yahoo.com.vn"
customer.notEmail = "esdsa@dsada@  sda.com.sa"

customer.blank = "a"
customer.date = "2019-10-10" 
customer.alpha = "dsad"
customer.alphaNumeric = "dsad1212"

let validator: NextValidator = NextValidator.getInstance();
console.log(validator.validate(customer)); // 'lastName' is required 