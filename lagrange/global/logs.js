MemberStack.onReady.then(function(member) {  
  if (member.loggedIn) {
    fetch('https://app.feve.co/webhooks/member/logged-in', {
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
	        "token": MemberStack.getToken(),
		"url": window.location.href
	    })
  	})
  }
})
