import { Record } from 'immutable';
interface IPersonProps {
    firstName: string;
    lastName: string;
}
declare const Person_base: Record.Factory<IPersonProps>;
export declare class Person extends Person_base implements IPersonProps {
    readonly firstName: string;
    readonly lastName: string;
    constructor(values?: Partial<IPersonProps>);
    setFirstName(value: string): this;
    setLastName(value: string): this;
}
export {};
