//Favorites system handmade with memberstack metadata, to be added to page custom code

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("[data-image]").forEach(function(image) {
    image.dataset.imgsrc = image.src
    image.src = ""
  })
  document.querySelectorAll("[data-info]").forEach(function(block) {
  	block = block.style
    block.display = "none"
    
    })
    document.querySelector("#favLoader").style.display="block"
})

MemberStack.onReady.then(async function(member) {
  if (!member.loggedIn) {
    document.querySelectorAll("[data-item]").forEach(function(element) {
      var favButton = element.querySelector("[favButton]")
      favButton.classList.remove("starred")
    })
    return
  }

  //get member metadata
  var metadata = await member.getMetaData()

  var favorites = metadata.favorites

  if (!favorites) favorites = [];

  document.querySelectorAll("[data-item]").forEach(function(element) {
    var link = element.querySelector("[data-link]")
    var url = (new URL(link.href)).pathname
    var favButton = element.querySelector("[favButton]")
    if (!favorites.includes(url)) {
      element.remove()
      document.querySelector("#favLoader").style.display = "none" 
      return
    } else {
      var image = element.querySelector("[data-image]")
      image.src = image.dataset.imgsrc
      var block = element.querySelector("[data-info]")
      block.style.display = "block"
    }

    favButton.addEventListener("click", function(event){
      event.preventDefault()
      if (!favorites.includes(url)) {
        favorites.push(url)
        favButton.classList.add("starred")
      } else {
        var index = favorites.indexOf(url);
        if (index > -1) {
          favorites.splice(index, 1);
        }
        favButton.classList.remove("starred")
      }
      member.updateMetaData({favorites: favorites})
    })
    document.querySelector("#favLoader").style.display = "none"
  })

 })
