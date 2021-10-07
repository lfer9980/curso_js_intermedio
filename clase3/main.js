const juan = {
	name: "juanito",
	age: 18,
	approvedCourses: ["Curso 1"],
	addCourse(newCourse) {
		this.approvedCourses.push(newCourse)
	}
}

//usando propiedades estaticas de Object
/* console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan)) */

//nota al pie: tener cuidado con el ambito lexico de .entries
/* console.log(Object.entries(juan)[3][0]) */

console.log(Object.getOwnPropertyDescriptors(juan))


//definir propiedades a objetos, con el super prototipo object
Object.defineProperty(juan, "pruebaNASA", {
	value: "Extraterrrestres",
	writable: true,
	enumerable: true,
	configurable: true,
})