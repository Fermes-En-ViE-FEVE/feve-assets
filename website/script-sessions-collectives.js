
/** INFO

	* Ce script gère l'affichage des prochaines dates de sessions d'information disponibles
	* dans Google Calendar, qui ont été automatiquement ajoutées à Airtable.
	* 
	* La fonction getEventsInTable() permet d'aller chercher dans Airtable la date des évenements.
	* Elle utilise un argument "audience" ce qui permet d'utiliser le même code pour la page "Porteur de Projet" et "Investisseur".
	
	@param : entrer "Investisseur" ou "Porteur de Projet" comme paramètre de la fonction getEventsInTable()
	
*/	

	//fonction pour envoyer la valeur de date choisie vers le formulaire
	function updateDate(div_content){
    //on remplit le field "inscription session collective" avec le texte de la date choisie
		document.getElementsByName('inscription_session_collective')[0].value = div_content.innerHTML;
		
    //on extrait les infos de date du texte précédent pour créer un format de date valide cleanDate et remplir le field "date de la session collective" du formulaire
    var targetDate = div_content.innerHTML;
		var dDate = targetDate.substr(0,2);
		var mDate = targetDate.substr(3,2);
		var yDate = targetDate.substr(6,4);
		var dateRegex = /^\d{2}/;
    
		if (dateRegex.test(targetDate)) {
			var cleanDate = yDate + "-" + mDate + "-" + dDate;
		} else {
			cleanDate = "";
		};
		document.getElementsByName('date_de_la_session_collective')[0].value = cleanDate;
		chgColor(div_content.id);
		}
	
	//fonction pour afficher en couleur la date selectionnée
	var lastDiv = null;
	function chgColor(currentDiv){
		document.getElementById(currentDiv).style.backgroundColor='#ffeb83';
		if (lastDiv!=null){
		document.getElementById(lastDiv).style.backgroundColor='transparent';
		}
		lastDiv = currentDiv;
		}
	
	//fonction pour récupérer les dates de sessions de Airtable et créer les options en html
	const base_airtable = 'appuuEE6Jc2DV0GO5'; //id de la base Airtable à utiliser
	const api_token = 'key8YSvDWQq4oU4jO'; //clef api avec lecture seule sur la base (compte de Sonic)
	var list_events = [];
	function getEventsInTable(audience){
		return axios.get(
        "https://api.airtable.com/v0/"+ base_airtable +"/events?sort%5B0%5D%5Bfield%5D=Date2&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view",
        { headers: { Authorization: "Bearer " + api_token }}
        )
		.then(response => {
			var dataArray = response.data.records;
			
			for (record in dataArray) {
				if (dataArray[record].fields.formu === audience & dataArray[record].fields.Calculation === "OK"){
				//si le record Airtable correspond au bon public cible et la date n'est pas dépassée : ajouter à list_events
				
				eventDate = dataArray[record].fields.textDateWebsite;
				list_events.push(eventDate);
				} else { //ignore
				}
			}
						
			
			var div_sessions = document.getElementById('date_sessions');
			var html = '';
			var i=0;
			for (event in list_events) {
				
				html = html + ("<div class='date_session' id='session_"+i+"' onclick='updateDate(this)'>"+list_events[event]+"</div>");
				i+=1;
			}
			//ajouter une option "aucune date de ne convient" après les dates disponibles
			html = html + ("<div class'text-center' id='aucune_date' onclick='updateDate(this)'><div class='no_date_suits'>Aucune date ne me convient</div> <div class='notif_next_sessions'>tenez-moi au courant des prochaines sessions.</div></div>");	
			div_sessions.innerHTML = html;

			
		})
		.catch(error => console.error(error));
	}
	

	
