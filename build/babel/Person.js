"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

var _immutable = require("immutable");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultPersonProps = {
  firstName: '',
  lastName: ''
};

class Person extends (0, _immutable.Record)(defaultPersonProps) {
  constructor(values) {
    var _temp, _temp2;

    values ? (_temp = super(values), _defineProperty(this, "firstName", void 0), _defineProperty(this, "lastName", void 0), _temp) : (_temp2 = super(defaultPersonProps), _temp = super(values), _defineProperty(this, "firstName", void 0), _defineProperty(this, "lastName", void 0), _temp, _temp2);
  }

  setFirstName(value) {
    return this.set('firstName', value);
  }

  setLastName(value) {
    return this.set('lastName', value);
  } // get fullName() {
  // 	return `${this.firstName} ${this.lastName}`.trim();
  // }


}

exports.Person = Person;