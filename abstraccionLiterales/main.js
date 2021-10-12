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


//objeto estudio!
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

const juan = deepCopy(studentBase)

/* Object.defineProperty(juan, "name", {
	value: "JuanDC",
	configurable: false,
}) */

//con seal, evitamos que se borren propiedades del objeto
Object.seal(juan)
Object.isSealed(juan)
juan.name = "Juanito"



