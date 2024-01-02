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
    return Customer;
}());
var customer = new Customer();
customer.firstName = 'Gérald';
console.log((0, next_validator_1.validate)(customer)); // 'lastName' is required
