"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var defaultPersonProps = {
    firstName: '',
    lastName: '',
};
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(values) {
        var _this = this;
        values ? _this = _super.call(this, values) || this : _this = _super.call(this, defaultPersonProps) || this;
        return _this;
    }
    Person.prototype.setFirstName = function (value) {
        return this.set('firstName', value);
    };
    Person.prototype.setLastName = function (value) {
        return this.set('lastName', value);
    };
    return Person;
}(immutable_1.Record(defaultPersonProps)));
exports.Person = Person;
//# sourceMappingURL=Person.js.map