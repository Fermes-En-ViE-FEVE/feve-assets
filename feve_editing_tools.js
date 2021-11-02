// Variable globale stockant le userID de Memberstack, quand Memberstack sera chargé (voir plus bas)
var userID = '';

// Function construisant les paramètres de la request utilisée pour read & update les comments
const request_options = (type) => {

  // Le contenu du comment n'est passé que pour les update (et non pour les read car inutile)
	var params = { "Key": 
  					{
                      "userID":userID,
                      "commentID":'{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}'
                    },
                 "Comment": type == 'update' ? quill.getContents() : ""
	};
	var options = {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(params),
	};                          
	return options;
}

// Fonction qui populate les commentaires sur la page à l'initialisation
const readComment = async() => {
	const data = await fetch(`https://y9wrsq0ysj.execute-api.eu-west-3.amazonaws.com/prod/read`, request_options('read'));
	const json = await data.json();
    if (json.Item && json.Item.commentText) {
        quill.setContents(json.Item.commentText);
    }
   
}

// Fonction qui update en base les commentaires, appelée par le bouton "Enregistrer"
const updateComment = async() => {
      	$('#commentUpdateButton').prop('value', 'Merci de patienter...');
      	const data = await fetch(`https://y9wrsq0ysj.execute-api.eu-west-3.amazonaws.com/prod/update`, request_options('update'));
      	$('#commentUpdateButton').prop('value', 'Enregistré !');
}	   


// On stocke l'ID user dont on a besoin pour read & update, dès que Memberstack est prêt
MemberStack.onReady.then(function(member) {   
	if (member.loggedIn) {
		userID = member["id"];
		readComment();
	}
});
  
// Chargement de l'éditeur de rich text
var fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];
    var Font = Quill.import('formats/font');
    Font.whitelist = fonts;
    Quill.register(Font, true);


var quill = new Quill('#commentTextID', {
      modules: {
        'toolbar': [
          [ 'bold', 'italic', 'underline', 'strike' ],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'header': '2' }, { 'header': '3' }, 'blockquote', 'code-block' ],
          [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'list': 'check'}, { 'indent': '-1' }, { 'indent': '+1' }],
          [ { 'align': [] }],
          [ 'link', 'image', 'video' ],
          [ 'clean' ]
        ],
      },
      theme: 'snow'

});

// Création des sommaires automatiques

(function() {
  // w-richtext is used in your html, feel free to replace to your correct one
  document.querySelectorAll('.w-richtext p').forEach(function(n) {
    // Grab the html content of p tag
    var html = n.innerHTML;
    // Replace the entity number globally
    var decodedHtml = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    // Parse the content back
    n.innerHTML = decodedHtml;
  });
})();

document.getElementById("content").querySelectorAll('{{wf {&quot;path&quot;:&quot;toc-based-on&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}').forEach(function(heading, i) { // runs a function for all headings inside your rich text element
  heading.setAttribute("id", "toc-" + i); // gives each heading a unique id
  heading.classList.add("content-h");
  const item = document.createElement("a"); // creates an anchor element called "item" for each heading
  item.innerHTML = heading.innerHTML; // gives each item the text of the corresponding heading
  ('{{wf {&quot;path&quot;:&quot;toc-based-on&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}').split(",").forEach(function(x) { // runs a function for each item in your headings list
    if (heading.tagName.toLowerCase()==x) {
      item.classList.add("tocitem", "toc-" + x); // gives each item the correct class
    }
  });
  item.setAttribute("href", "#toc-" + i); // gives each item the correct anchor link
  document.querySelector("#toc").appendChild(item); // places each item inside the Table of Contents div
});

