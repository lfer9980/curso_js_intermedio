function isObject(subject) {
	return typeof subject == "object"
}

function isArray(subject) {
	return Array.isArray(subject)
}

//funcion recursiva para copiar objetos
function deepCopy(subject) {
	let copySubject;

	const subjectIsArray = isArray(subject)
	const subjectIsObject = isObject(subject)

	/* validación del tipo de dato */
	if (subjectIsArray) {
		copySubject = []
	} else if (subjectIsObject) {
		copySubject = {}
	} else {
		return subject
	}


	/* iteracion para hacer la copia */
	for (key in subject) {
		const keyIsObject = isObject(subject[key])

		if (keyIsObject) { 
			copySubject[key] = deepCopy(subject[key])
		} else {
			if (subjectIsArray) {
				copySubject.push(subject[key])
			}
			else {
				copySubject[key] = subject[key]
			}
		}
	}

	return copySubject
}


/* //objeto estudio!
const studentBase = {
	name: undefined,
	email: undefined,
	age: undefined,
	approvedCourses: undefined,
	learningPaths: undefined,
	socialMedia: {
		twitter: undefined,
		instagram: undefined,
		facebook: undefined,
	},
}
 */


//funcion aux para arrojar error cuando no se envian parametros
function requiredParam(param) {
	throw new Error(`${param} es obligatorio`);
}

//a los parametros requeridos, los igualamos a la funcion requiredParam
function createStudent({
	name = requiredParam("name"),
	email = requiredParam("email"),
	age,
	twitter,
	instagram,
	facebook,
	approvedCourses = [],
	learningPaths = [],
} = {}) {
	const private = {
		"_name": name,
	}
	const public = {
		age,
		email,
		approvedCourses,
		learningPaths,
		socialMedia: {
			twitter,
			instagram,
			facebook,
		},
		readName() {
			return private["_name"]
		},
		changeName(newName) {
			private._name = newName
		},
	}

	Object.defineProperty(public, "readName", {
		configurable: false,
		writable: false,
	})

	Object.defineProperty(public, "changeName", {
		configurable: false,
		writable: false,
	})

	return public
}

const juan = createStudent({
	name: "juanito",
	age: 19,
	email: "juanito@frijolito.com",
	twitter: "fjuandc",
})
