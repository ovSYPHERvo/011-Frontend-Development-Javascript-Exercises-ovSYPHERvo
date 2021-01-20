//Hello world
console.log("Hello, world!")

var hello = document.getElementById("hello")
console.log(hello)
// below is a property
function change() {
  hello.innerHTML = "Hello, earth!"
}
// change()

// DOM Exercise #1

const paragraph = document.querySelector("p")
console.log(paragraph)

// how to change the paragraph's content

//paragraph.innerHTML = paragraph.innerText
// ^ made the paragraph's text into an equal
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map(word => word.length > 8 ? `<span style="background: #ff0;">${word}</span>` : word)
  .join(" ")
// replaces words with certain legnth to different word (or highlights)
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map(word => word == "of" ? "hi" : word)
  .join(" ")
// takes word equal to "of"; ? means if true; "hi" makes them into 'hi' ; :word ends it