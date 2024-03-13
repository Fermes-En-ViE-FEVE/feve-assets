/** INFO
	* Ce script gère l'affichage des prochaines dates de sessions d'information disponibles
	* dans Google Calendar, qui ont été automatiquement ajoutées à Airtable.
	* 
	* La fonction getEventsInTable() permet d'aller chercher dans Airtable la date des évenements.
	* Elle utilise un argument "audience" ce qui permet d'utiliser le même code pour la page "Porteur de Projet" et "Investisseur".
	
	@param : entrer "Investisseur" ou "Porteur de Projet" comme paramètre de la fonction getEventsInTable()
	
*/	
let lastSessionNodeId = null;


function updateChosenDateInForm(dateNode) {
	document.getElementsByName('inscription_session_collective')[0].value = dateNode.innerHTML;
    	
	const dateWithoutDayName = dateNode.innerHTML.split(" ");
	const dateToParse = dateWithoutDayName[1];
	const dateRegex = /^\d{2}/;
	let formattedDate = ""
	if (dateRegex.test(dateToParse)) {
		formattedDate = dateToParse.substr(6,4) + "-" + dateToParse.substr(3,2) + "-" + dateToParse.substr(0,2);
	}
	document.getElementsByName('date_de_la_session_collective')[0].value = formattedDate;
	updateSessionNodeColor(dateNode.id);
	if (document.querySelector('.is-open .modal__container')) {
		setTimeout(() => {
			let formPosition = document.querySelector('.is-open #floating-form').offsetTop
			document.querySelector('.is-open .modal__container').style.scrollBehavior = 'smooth'
			document.querySelector('.is-open .modal__container').scrollTop = formPosition - 50
		}, 100)
	} else {
		setTimeout(() => {
			window.scrollTo({
				top: document.querySelector('.hbspt-form').offsetTop - 100,
				behavior: "smooth",
			});
		}, 100)
	}
}

function updateSessionNodeColor(currentSessionNodeId) {
	document.getElementById(currentSessionNodeId).style.backgroundColor='#ffeb83';
	if (lastSessionNodeId !== null) {
		document.getElementById(lastSessionNodeId).style.backgroundColor='#edebe7';
	}
	lastSessionNodeId = currentSessionNodeId;
}


//fonction pour récupérer les dates de sessions de Airtable et créer les options en html
const base_airtable = 'appuuEE6Jc2DV0GO5'; //id de la base Airtable à utiliser
const api_token = 'patlLWaHY81AlDMU3.ad2a92da8275c5a0070d546e9b43b30ec33dc2ce8e88cb974783cca333a846f3'; //clef api avec lecture seule sur la base (compte de Sonic)
let listEvents = [];
function getEventsInTable(audience) {
	return fetch("https://api.airtable.com/v0/"+ base_airtable +"/events?sort%5B0%5D%5Bfield%5D=Date2&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view", {
		headers: {
			Authorization: "Bearer " + api_token
		}
	})
	.then(data => data.json()).then( data => {
		const records = data.records;
		console.log(data)
		console.log(records)
		for (record in records) {
			if (records[record].fields.formu === audience & records[record].fields.Calculation === "OK") {
				//si le record Airtable correspond au bon public cible et la date n'est pas dépassée : ajouter à listEvents
				eventDate = records[record].fields.textDateWebsite;
				listEvents.push(eventDate);
			}
		}

		const sessionsNode = document.getElementById('date_sessions');
		let html = '';
		let i=0;
		for (event in listEvents) {
			html = html + ("<div class='date_session' id='session_"+i+"' onclick='updateChosenDateInForm(this)'>"+listEvents[event]+"</div>");
			i+=1;
		}
		//ajouter une option "aucune date de ne convient" après les dates disponibles
		html += ("<div class'text-center'><div class='no_date_suits'>Aucune date ne vous convient ?</div> <div class='date_session' onclick='updateChosenDateInForm(this)' id='aucune_date'>Tenez-moi au courant des prochaines sessions</div></div>");	
		sessionsNode.innerHTML = html;
	})
	.catch(error => console.error(error));
}

window.addEventListener('message', function(event) {
	if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
	document.getElementById('date_sessions').style.display = "none"
	}
});
