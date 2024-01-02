import { NextValidator, minSize, required } from 'next-validator';

class Customer {
    @minSize(9)
    public firstName: string;
    @required
    public lastName: string;
}

var customer = new Customer();
customer.firstName = 'Gérald';
let validator : NextValidator = new NextValidator();
console.log(validator.validate(customer)); // 'lastName' is required