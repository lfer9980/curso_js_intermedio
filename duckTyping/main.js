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



//funcion aux para arrojar error cuando no se envian parametros
function requiredParam(param) {
	throw new Error(`${param} es obligatorio`);
}


function createLearningPath({
	name = requiredParam("name"),
	courses = [],
}) {
	const private = {
		"_name": name,
		"_courses": courses,
	}

	const public = {
		get name() {
			return private["_name"]
		},
		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName
			} else {
				console.warn("tu nombre debe tener al menos 1 caracter")
			}
		},

		get courses() {
			return private["_courses"]
		},
	}

	return public
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
		"_learningPaths": learningPaths,
	}
	const public = {
		age,
		email,
		approvedCourses,
		socialMedia: {
			twitter,
			instagram,
			facebook,
		},
		get name() {
			return private["_name"]
		},
		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName
			} else {
				console.warn("tu nombre debe tener al menos 1 caracter")
			}
		},

		get learningPaths() {
			return private["_learningPaths"]
		},
		set learningPaths(newLearningPath) {

			if (!newLearningPath.name) {
				console.warn("tu learning Path no tiene nombre")
				return;
			}

			if (!newLearningPath.courses) {
				console.warn("tu learning Path no tiene cursos")
				return;
			}

			if (!isArray(newLearningPath.courses)) {
				console.warn("tu learning Path no es un array de cursos")
				return;
			}

			private["_learningPaths"].push(newLearningPath)

		},
	}

	return public
}

const juan = createStudent({
	name: "juanito",
	age: 19,
	email: "juanito@frijolito.com",
	twitter: "fjuandc",
})


juan.learningPaths = "Nueva ruta de aprendizaje"