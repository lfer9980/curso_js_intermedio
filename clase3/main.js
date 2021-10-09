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


//definir propiedades a objetos, con el super prototipo object
Object.defineProperty(juan, "pruebaNASA", {
	value: "Extraterrestres",
	writable: false,
	enumerable: false,
	configurable: false,
})

Object.defineProperty(juan, "navigator", {
	value: "Chrome",
	enumerable: false,
	writable: true,
	configurable: true,
})

Object.defineProperty(juan, "editor", {
	value: "VSCode",
	enumerable: true,
	writable: false,
	configurable: true,
})

Object.defineProperty(juan, "terminal", {
	value: "WSL",
	enumerable: true,
	writable: true,
	configurable: false,
})

//OTROS METODOS DE OBJECT
Object.seal(juan)
/* con seal, protegemos que se borren las propiedades, cambiando configurable a false */

Object.freeze(juan)
/* con freeze, protegemos que alguien modifique nuestro atributo, ademas de editarlas */


console.log(Object.getOwnPropertyDescriptors(juan))
