const noteTitle = document.getElementById("title");
const btn = document.getElementById("save");
const saveNote = document.getElementById("saveNotes");
const addNote = document.getElementById("addNotes");
const headings = document.getElementById("heading");
const paragraph = document.getElementById("para")


btn.addEventListener("click", function(){
    headings.innerHTML = noteTitle.value
    paragraph.innerHTML = addNote.value

})


// function saveTitle() {
//   const div = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");

//   div.setAttribute("class", "border-black");
//   h1.setAttribute("class", "red");
//   p.setAttribute("class", "notes");
//   h1.innerHTML = noteTitle.value;
//   p.innerHTML = addNote.value;
//   div.appendChild(h1);
//   div.appendChild(p);
//   saveNote.appendChild(div);
//   addNote.appendChild(div);
// }

// btn.addEventListener("click", saveTitle);

// btn.addEventListener("click", function () {
//   noteTitle.value = "";
//   addNote.value = "";
// });

