import { Person } from './Person';

// Tests
describe('Record access method test', () => {
	const jane = new Person({ firstName: 'Jane', lastName: 'Doe'});
	it('Access without Immutable GET', () => {
		expect(jane.firstName).toBe('Jane');
	});
	it('Access With Immutable GET', () => {
		expect(jane.get('firstName')).toBe('Jane');
	});
	it('Access method of the record', () => {
		expect(jane.fullName).toBe('Jane Doe');
	});
	it('Access method of the record', () => {
		const newI = jane.setFirstName('kim');
		expect(newI.firstName).toBe('kim');
	});
});
