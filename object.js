const person = {
	name: 'Febi Aris',
	age: 24,
	greet() {
		console.log('Hi, I am '+this.name+' my age is '+this.age);
	}
};

person.greet();