//function recursiva() {
//	if (/* validacion */) {
//		//llamados recursivos
//	} else {
//		//llamados normales, sin recursividad
//	}
//}

//metodo tradicional
const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerito = 0;
/* 
for (let index = 0; index < numeritos.length; index++) {
	numerito = numeritos[index]
	console.log({index, numerito})
} */

//metodo recursivo
function recursiva(numbersList) {
	if (numbersList.length) {
		const firstNum = numbersList[0]
		numbersList.shift()
		console.log(firstNum)

		return recursiva(numbersList)
	}
}

recursiva(numeritos)

