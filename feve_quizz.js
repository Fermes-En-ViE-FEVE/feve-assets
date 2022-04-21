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
		"value": 0
	},
	{
		"label": ovinViande,
		"value": 0
	},
	{
		"label": bovinViande,
		"value": 0
	},
	{
		"label": bovinLait,
		"value": 0
	},
	{
		"label": bovinLaitAvecTransfo,
		"value": 0
	},
	{
		"label": poulesPondeuses,
		"value": 0
	},
	{
		"label": maraichages,
		"value": 0
	},
	{
		"label": paysanBoulanger,
		"value": 0
	},
	{
		"label": grandesCultures,
		"value": 0
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

console.log(variables)
