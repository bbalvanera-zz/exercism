"use strict";
class PhoneNumber {
    constructor(phone = '') {
        phone = phone.replace(/\D/g, '');
        this.num = '0000000000';
        if (phone.length === 11 && phone.charAt(0) === '1') {
            this.num = phone.substr(1);
        }
        else if (phone.length === 10) {
            this.num = phone;
        }
        this.area = this.num.substr(0, 3);
        this.formatted = this.num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    number() {
        return this.num;
    }
    areaCode() {
        return this.area;
    }
    toString() {
        return this.formatted;
    }
}
module.exports = PhoneNumber;
