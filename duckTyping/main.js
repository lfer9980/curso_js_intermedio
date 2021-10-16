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


function LearningPath({
	name = requiredParam("name"),
	courses = [],
}) {
	this.name = name
	this.courses = courses
	
	const private = {
		"_name": name,
		"_courses": courses,
	}
}


//a los parametros requeridos, los igualamos a la funcion requiredParam
function Student({
	name = requiredParam("name"),
	email = requiredParam("email"),
	age,
	twitter,
	instagram,
	facebook,
	approvedCourses = [],
	learningPaths = [],
} = {}) {

	this.name = name
	this.email = email
	this.age = age
	this.approvedCourses = approvedCourses
	this.socialMedia = {
		twitter,
		instagram,
		facebook,
	}

	const private = {
		"_learningPaths": []
	}

	//encapsulando nuestros learning Paths y definiendo getters y setter
	Object.defineProperty(this, "learningPaths", {
		get() {
			return private["_learningPaths"]
		},
		set(newLp) {
			if (newLp instanceof LearningPath) {
				private["_learningPaths"].push(newLp)
			} else {
				console.warn("Alguno de los learningPaths no es una instancia de LearningPath")
			}
		},
		configurable: false,
	})

	//este for agrega los learningPaths iniciales solamente
	for (lpIndex in learningPaths) {
		this.learningPaths = learningPaths[lpIndex]
	}
}


const escuelaWeb = new LearningPath({name: "Escuela de desarrollo web", courses: []})

const juan = new Student({
	name: "juanito",
	age: 19,
	email: "juanito@frijolito.com",
	twitter: "fjuandc",
	learningPaths: [
		escuelaWeb,
		{name: "Escuela del impostor", courses: []}
	]
})

