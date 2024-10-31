if (TocField !== '') {
document.getElementById("content").querySelectorAll(TocField).forEach(function(heading, i) { // runs a function for all headings inside your rich text element
  heading.setAttribute("id", "toc-" + i); // gives each heading a unique id
  heading.classList.add("content-h");
  const item = document.createElement("a"); // creates an anchor element called "item" for each heading
  item.innerText = heading.innerText; // gives each item the text of the corresponding heading
  (TocField).replace(/\s/g, '').split(",").forEach(function(x) { // runs a function for each item in your headings list
    if (heading.tagName.toLowerCase()==x) {
      item.classList.add("tocitem", "toc-" + x); // gives each item the correct class
    }
  });
  
 item.setAttribute("onclick", "scrollTarget(\'" + heading.id + "\')");
  document.querySelector("#toc").appendChild(item); // places each item inside the Table of Contents div
  document.querySelectorAll('.toc-multiple').forEach(tocMultiple => {
    if (item.classList.contains('toc-h2')) {
      tocMultiple.appendChild(item.cloneNode(true))
    }
  });
});
}

function scrollTarget(tgt) {
  let target = document.getElementById(tgt);
  let negoffset = 200;
  let targetPosition = target.getBoundingClientRect().top + window.scrollY - negoffset;
  window.scrollTo({top: targetPosition, behavior: "smooth"});
}
