/* QUIZZ QUEL ATELIER AGRICOLE EST FAIT POUR VOUS */
const absoluteUrl = window.location.href;
const url = new URL(absoluteUrl);
const params = new URLSearchParams(url.search);
const paramsObj = Array.from(params.keys()).reduce(
  (acc, val) => ({ ...acc, [val]: params.get(val) }),
  {}
);

let caprinOvinLaitAvecTransfo = 'caprinOvinLaitAvecTransfo';
let ovinViande = 'ovinViande'
let bovinViande = 'bovinViande'
let bovinLait = 'bovinLait'
let bovinLaitAvecTransfo = 'bovinLaitAvecTransfo'
let poulesPondeuses = 'poulesPondeuses'
let maraichages = 'maraichages'
let paysanBoulanger = 'paysanBoulanger'
let grandesCultures = 'grandesCultures'

let variables = [
	{
		"label": caprinOvinLaitAvecTransfo,
		"value": 0,
		"title": "Caprin ou ovin lait avec transformation fromagère",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/6262c98186ef283fea8f4290_caprin.png",
		"max": 0,
		"descNodeId": "caprin",
		"withAnimals": true
	},
	{
		"label": ovinViande,
		"value": 0,
		"title": "Ovin viande",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/6262c99387c1ba5ee27ca227_ovin1.png",
		"max": 0,
		"descNodeId": "ovin",
		"withAnimals": true
	},
	{
		"label": bovinViande,
		"value": 0,
		"title": "Bovin viande",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/626ffd618e248833308c1942_bovin-viande.png",
		"max": 0,
		"descNodeId": "bovinV",
		"withAnimals": true
	},
	{
		"label": bovinLait,
		"value": 0,
		"title": "Bovin lait",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/626ffcef521e0004ee2b4c32_bovin-lait.png",
		"max": 0,
		"descNodeId": "bovinL",
		"withAnimals": true
	},
	{
		"label": bovinLaitAvecTransfo,
		"value": 0,
		"title": "Bovin lait avec transformation fromagère",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/626fff2c4908f448380bbde8_bovin-fromage.png",
		"max": 0,
		"descNodeId": "bovinLT",
		"withAnimals": true
	},
	{
		"label": poulesPondeuses,
		"value": 0,
		"title": "Poules pondeuses",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/6262c9938e34c3767a021b27_poules.png",
		"max": 0,
		"descNodeId": "poules",
		"withAnimals": true
	},
	{
		"label": maraichages,
		"value": 0,
		"title": "Maraîchage",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/6262c99306893703edebe70a_maraichage.png",
		"max": 0,
		"descNodeId": "maraichage",
		"withAnimals": false
	},
	{
		"label": paysanBoulanger,
		"value": 0,
		"title": "Paysan-boulanger",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/6262c9939ba76f02ddcf12be_paysan-boulanger.png",
		"max": 0,
		"descNodeId": "paysanBoulanger",
		"withAnimals": false
	},
	{
		"label": grandesCultures,
		"value": 0,
		"title": "Grandes cultures",
		"score": 0,
		"image": "https://uploads-ssl.webflow.com/6165418020920d00613318c8/6262c99347309d1f695e60c1_grandes-cultures.png",
		"max": 0,
		"descNodeId": "grandesCultures",
		"withAnimals": false
	},
];

let questions = [
	{
		"label": '1',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 100,
					ovinViande: 75,
					bovinLait: 100,
					bovinViande: 75,
					bovinLaitAvecTransfo: 100,
					poulesPondeuses: 100,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 0,
					ovinViande: 25,
					bovinLait: 0,
					bovinViande: 25,
					bovinLaitAvecTransfo: 0,
					poulesPondeuses: 0,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '2',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 25,
					ovinViande: 50,
					bovinLait: 100,
					bovinViande: 75,
					bovinLaitAvecTransfo: 100,
					poulesPondeuses: 100,
					maraichages: 0,
					paysanBoulanger: 50,
					grandesCultures: 0
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 75,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 50,
					poulesPondeuses: 50,
					maraichages: 100,
					paysanBoulanger: 50,
					grandesCultures: 100
				}
			},
		]
	},
	{
		"label": '3',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 50,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 50,
					poulesPondeuses: 50,
					maraichages: 100,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 50,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 50,
					poulesPondeuses: 50,
					maraichages: 0,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '4',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 100,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 100,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 100,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 0,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 0,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 0,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '5',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 50,
					bovinLait: 75,
					bovinViande: 50,
					bovinLaitAvecTransfo: 75,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 75,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 0,
					ovinViande: 50,
					bovinLait: 25,
					bovinViande: 50,
					bovinLaitAvecTransfo: 0,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 25,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '6',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 75,
					poulesPondeuses: 75,
					maraichages: 75,
					paysanBoulanger: 75,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 25,
					ovinViande: 100,
					bovinLait: 100,
					bovinViande: 100,
					bovinLaitAvecTransfo: 25,
					poulesPondeuses: 50,
					maraichages: 25,
					paysanBoulanger: 25,
					grandesCultures: 2
				}
			},
		]
	},
	{
		"label": '7',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 75,
					bovinLait: 75,
					bovinViande: 75,
					bovinLaitAvecTransfo: 75,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 100,
					grandesCultures: 100
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 25,
					ovinViande: 25,
					bovinLait: 25,
					bovinViande: 25,
					bovinLaitAvecTransfo: 25,
					poulesPondeuses: 50,
					maraichages: 100,
					paysanBoulanger: 0,
					grandesCultures: 0
				}
			},
		]
	},
	{
		"label": '8',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 25,
					ovinViande: 25,
					bovinLait: 25,
					bovinViande: 25,
					bovinLaitAvecTransfo: 25,
					poulesPondeuses: 50,
					maraichages: 100,
					paysanBoulanger: 0,
					grandesCultures: 0
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 50,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 50,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '9',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 100,
					ovinViande: 100,
					bovinLait: 100,
					bovinViande: 100,
					bovinLaitAvecTransfo: 100,
					poulesPondeuses: 75,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 0,
					ovinViande: 0,
					bovinLait: 0,
					bovinViande: 0,
					bovinLaitAvecTransfo: 0,
					poulesPondeuses: 25,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '10',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 100,
					ovinViande: 100,
					bovinLait: 100,
					bovinViande: 100,
					bovinLaitAvecTransfo: 100,
					poulesPondeuses: 100,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 0,
					ovinViande: 0,
					bovinLait: 0,
					bovinViande: 0,
					bovinLaitAvecTransfo: 0,
					poulesPondeuses: 0,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '11',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 75,
					bovinLait: 75,
					bovinViande: 75,
					bovinLaitAvecTransfo: 75,
					poulesPondeuses: 75,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 0,
					ovinViande: 0,
					bovinLait: 0,
					bovinViande: 0,
					bovinLaitAvecTransfo: 0,
					poulesPondeuses: 0,
					maraichages: 50,
					paysanBoulanger: 50,
					grandesCultures: 50
				}
			},
		]
	},
	{
		"label": '12',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 50,
					ovinViande: 50,
					bovinLait: 75,
					bovinViande: 50,
					bovinLaitAvecTransfo: 75,
					poulesPondeuses: 50,
					maraichages: 50,
					paysanBoulanger: 100,
					grandesCultures: 100
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 75,
					bovinLait: 25,
					bovinViande: 75,
					bovinLaitAvecTransfo: 25,
					poulesPondeuses: 75,
					maraichages: 100,
					paysanBoulanger: 0,
					grandesCultures: 0
				}
			},
		]
	},
	{
		"label": '13',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 50,
					ovinViande: 50,
					bovinLait: 100,
					bovinViande: 1,
					bovinLaitAvecTransfo: 100,
					poulesPondeuses: 2,
					maraichages: 50,
					paysanBoulanger: 100,
					grandesCultures: 0
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 75,
					bovinLait: 50,
					bovinViande: 75,
					bovinLaitAvecTransfo: 50,
					poulesPondeuses: 50,
					maraichages: 100,
					paysanBoulanger: 50,
					grandesCultures: 100
				}
			}
		]
	},
	{
		"label": '14',
		"answers": [
			{
				"answer": 'Oui',
				"values": {
					caprinOvinLaitAvecTransfo: 75,
					ovinViande: 75,
					bovinLait: 75,
					bovinViande: 75,
					bovinLaitAvecTransfo: 75,
					poulesPondeuses: 50,
					maraichages: 0,
					paysanBoulanger: 0,
					grandesCultures: 0
				}
			},
			{
				"answer": 'Non',
				"values": {
					caprinOvinLaitAvecTransfo: 50,
					ovinViande: 50,
					bovinLait: 50,
					bovinViande: 50,
					bovinLaitAvecTransfo: 50,
					poulesPondeuses: 50,
					maraichages: 100,
					paysanBoulanger: 100,
					grandesCultures: 100
				}
			}
		]
	}
]

if (paramsObj['1c'] === 'Non') {
	variables = variables.filter(variable => !variable.withAnimals)
}
questions.forEach(question => {
	if (paramsObj[question.label]) {
		question.answers.forEach(answer => {
			if (answer.answer === paramsObj[question.label]) {
				Object.keys(answer.values).forEach(key => {
					variables.filter(variable => variable.label === key)[0].value += answer.values[key]
				})
			}
		})
	}
})
variables.forEach(variable => {
	questions.forEach(question => {
	let maxAnswer = 0;
	question.answers.forEach(answer => {
		Object.keys(answer.values).forEach(key => {
			if (variable.label === key && maxAnswer <= answer.values[key]) {
				maxAnswer = answer.values[key]
			}
		})
	})
	variable.max += maxAnswer
	})
})
variables.forEach(variable => {
	variable.score = Math.ceil(((variable.value / variable.max) * 100))
})
variables = variables.sort((a, b) => {
  if (parseFloat(b.score) < parseFloat(a.score)) {
    return -1;
  }
  if (parseFloat(b.score) > parseFloat(a.score)) {
    return 1;
  }
  return 0;
});


document.getElementById('firstResultTitle').textContent = variables[0].title
document.getElementById('firstResultScore').textContent = variables[0].score
document.getElementById('firstResultImg').src = variables[0].image
document.getElementById('secondResultTitle').textContent = variables[1].title
document.getElementById('secondResultScore').textContent = variables[1].score
document.getElementById('secondResultImg').src = variables[1].image


document.getElementById('firstResultDesc').innerHTML = document.getElementById(variables[0].descNodeId).innerHTML
document.getElementById('secondResultDesc').innerHTML = document.getElementById(variables[1].descNodeId).innerHTML

sessionStorage.setItem("result1", variables[0].label)
sessionStorage.setItem("result2", variables[1].label) 

console.log(variables)
