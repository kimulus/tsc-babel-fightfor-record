import { Record } from 'immutable';

interface IPersonProps {
	firstName: string;
	lastName: string;
}

const defaultPersonProps: IPersonProps = {
	firstName: '',
	lastName: '',
};

export class Person extends Record(defaultPersonProps) implements IPersonProps {
	public readonly firstName!: string;
	public readonly lastName!: string;

	public constructor(values?: Partial<IPersonProps>) {
		values ? super(values) : super(defaultPersonProps);
	}

	setFirstName(value: string) {
		return this.set('firstName', value);
	}

	setLastName(value: string) {
		return this.set('lastName', value);
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`.trim();
	}
}
