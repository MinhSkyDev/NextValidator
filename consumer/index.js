"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_validator_1 = require("next-validator");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    __decorate([
        (0, next_validator_1.minSize)(9)
    ], Customer.prototype, "firstName", void 0);
    __decorate([
        next_validator_1.required
    ], Customer.prototype, "lastName", void 0);
    __decorate([
        (0, next_validator_1.isIdentifyCard)("VietNam")
    ], Customer.prototype, "idCard", void 0);
    __decorate([
        next_validator_1.isHexa
    ], Customer.prototype, "hex", void 0);
    __decorate([
        next_validator_1.isHexa
    ], Customer.prototype, "notHex", void 0);
    __decorate([
        next_validator_1.isOct
    ], Customer.prototype, "oct", void 0);
    __decorate([
        next_validator_1.isOct
    ], Customer.prototype, "notOct", void 0);
    __decorate([
        next_validator_1.isBit
    ], Customer.prototype, "bit", void 0);
    __decorate([
        next_validator_1.isBit
    ], Customer.prototype, "notBit", void 0);
    __decorate([
        next_validator_1.isEmail
    ], Customer.prototype, "email", void 0);
    __decorate([
        next_validator_1.isEmail
    ], Customer.prototype, "notEmail", void 0);
    return Customer;
}());
var customer = new Customer();
customer.firstName = 'Gérald';
customer.idCard = "168";
customer.hex = "1ab29";
customer.notHex = "1rts";
customer.oct = "123523";
customer.notOct = "89";
customer.bit = "01010110101";
customer.notBit = "21512";
customer.email = "dang_252@yahoo.com.vn";
customer.notEmail = "esdsa@dsada@  sda.com.sa";
var validator = next_validator_1.NextValidator.getInstance();
console.log(validator.validate(customer)); // 'lastName' is required 

const testRegex = /^[0-7]+/
console.log(testRegex.test("1010010901"))