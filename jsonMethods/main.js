const obj1 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e",
	},
	editA () {
		this.a = "AAAA"
	}
}

/* pasando de un objeto a un string */
const stringifiedComplexObj = JSON.stringify(obj1)

/* pasando de un string a un objeto */
const obj2 = JSON.parse(stringifiedComplexObj)