/** INFO
	* Ce script gère l'affichage des prochaines dates de sessions d'information disponibles
	* dans Google Calendar, qui ont été automatiquement ajoutées à Airtable.
	* 
	* La fonction getEventsInTable() permet d'aller chercher dans Airtable la date des évenements.
	* Elle utilise un argument "audience" ce qui permet d'utiliser le même code pour la page "Porteur de Projet" et "Investisseur".
	
	@param : entrer "Investisseur" ou "Porteur de Projet" comme paramètre de la fonction getEventsInTable()
	
*/	
var lastSessionNodeId = null;


function updateChosenDateInForm(dateNode) {
	document.getElementsByName('inscription_session_collective')[0].value = dateNode.innerHTML;
    const dateToParse = dateNode.innerHTML;
	const dateRegex = /^\d{2}/;
	let formattedDate = ""
	if (dateRegex.test(dateToParse)) {
		formattedDate = targetDate.substr(6,4) + "-" + targetDate.substr(3,2) + "-" + targetDate.substr(0,2);
	}
	document.getElementsByName('date_de_la_session_collective')[0].value = formattedDate;
	updateSessionNodeColor(dateNode.id);
}

function updateSessionNodeColor(currentSessionNodeId) {
	if (currentDiv === "aucune_date") return
	document.getElementById(currentSessionNodeId).style.backgroundColor='#ffeb83';
	if (lastDiv !== null) {
		document.getElementById(lastSessionNodeId).style.backgroundColor='#edebe7';
	}
	lastSessionNodeId = currentSessionNodeId;
}


//fonction pour récupérer les dates de sessions de Airtable et créer les options en html
const base_airtable = 'appuuEE6Jc2DV0GO5'; //id de la base Airtable à utiliser
const api_token = 'key8YSvDWQq4oU4jO'; //clef api avec lecture seule sur la base (compte de Sonic)
let listEvents = [];
function getEventsInTable(audience){
	return axios.get(
"https://api.airtable.com/v0/"+ base_airtable +"/events?sort%5B0%5D%5Bfield%5D=Date2&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view",
{ headers: { Authorization: "Bearer " + api_token }}
)
	.then(response => {
		const records = response.data.records;
		for (record in records) {
			if (records[record].fields.formu === audience & records[record].fields.Calculation === "OK") {
				//si le record Airtable correspond au bon public cible et la date n'est pas dépassée : ajouter à listEvents
				eventDate = records[record].fields.textDateWebsite;
				listEvents.push(eventDate);
			}
		}

		const div_sessions = document.getElementById('date_sessions');
		console.log(div_sessions)
		let html = '';
		let i=0;
		for (event in listEvents) {
			html = html + ("<div class='date_session' id='session_"+i+"' onclick='updateChosenDateInForm(this)'>"+listEvents[event]+"</div>");
			i+=1;
		}
		//ajouter une option "aucune date de ne convient" après les dates disponibles
		html += ("<div class'text-center' id='aucune_date' onclick='updateChosenDateInForm(this)'><div class='no_date_suits'>Aucune date ne me convient</div> <div class='notif_next_sessions'>Tenez-moi au courant des prochaines sessions</div></div>");	
		div_sessions.innerHTML = html;
	})
	.catch(error => console.error(error));
}
