let opentextareabtn = document.getElementById("opentextareabtn").addEventListener("click", opentextarea);
let delbtnelem = document.getElementById("delbtn").addEventListener("click", closetextarea);
let savebtnelem = document.getElementById("savebtn").addEventListener("click", savetextarea);
let openclosebtnelem = document.getElementById("openclosebtn").addEventListener("click", opennoteslist);
let themebtn = document.getElementById("themebtn").addEventListener("click", darktheme);
const holdertext1 = '<div id="holdertext"><p>Jot a Note..</p><p>..Tell a Story...</p><p>...Type a Letter..</p><p>...Scribble an Idea..</p><p>..Clear your Mind...</p><p>..Click to Create!!!</p></div>';
let textarea1 = '<textarea class="textarea1" id="textarea1" name="textarea" placeholder="Write a new note."></textarea>'
let notes = []

function darktheme() {
    document.getElementById("rightcolumn").style.backgroundColor = "black";
    document.getElementById("maincolumn").style.backgroundColor = "black";
    document.getElementById("leftcolumn").style.backgroundColor = "black";
    document.getElementById("sidebarcolumn").style.backgroundColor = "black";
    document.getElementById("mainrow").style.backgroundColor = "black";
    document.body.style.backgroundColor = "black";
    document.getElementById("maincolumn").style.color = "#c4a7e7";
    document.getElementById("delbtn").style.backgroundColor = "white";
    // document.getElementById("textarea1").style.backgroundColor = "black";
    // document.getElementById("textarea1").style.color = "white";
    document.getElementById("themebtn").removeEventListener("click", darktheme);
    document.getElementById("themebtn").addEventListener("click", lighttheme);
}

function lighttheme() {
    document.getElementById("rightcolumn").style.backgroundColor = "";
    document.getElementById("maincolumn").style.backgroundColor = "";
    document.getElementById("leftcolumn").style.backgroundColor = "";
    document.getElementById("sidebarcolumn").style.backgroundColor = "";
    document.getElementById("mainrow").style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    document.getElementById("maincolumn").style.color = "";
    document.getElementById("delbtn").style.backgroundColor = "";
    // document.getElementById("textarea1").style.backgroundColor = "";
    // document.getElementById("textarea1").style.color = "";
    document.getElementById("themebtn").removeEventListener("click", lighttheme);
    document.getElementById("themebtn").addEventListener("click", darktheme);
}

function opennoteslist() {
    let noteslist = '<ul id="noteslist"><li><a alt="link to open saved note 1." href="#">Note 1</a></li><li><a alt="link to open saved note 2." href="#">Note 2</a></li><li><a alt="link to open saved note 3." href="#">Note 3</a></li><li><a alt="link to open saved note 4." href="#">Note 4</a></li></ul>';
    document.getElementById("sidebarcolumn").insertAdjacentHTML('beforeend', noteslist);
    document.getElementById("openclosebtn").removeEventListener("click", opennoteslist);
    document.getElementById("openclosebtn").addEventListener("click", closenoteslist);
}

function closenoteslist() {
    document.getElementById("noteslist").remove();
    document.getElementById("openclosebtn").removeEventListener("click", closenoteslist);
    document.getElementById("openclosebtn").addEventListener("click", opennoteslist);
}

function opentextarea() {
    let holdertext = document.getElementById("holdertext");
    holdertext.remove();
    document.getElementById("maincolumn").insertAdjacentHTML('afterbegin', textarea1);
    document.getElementById("opentextareabtn").style.visibility = "hidden";
    document.getElementById("opentextareabtn").style.fontSize = "0px";
    document.getElementById("delbtn").style.visibility = "visible";
    document.getElementById("savebtn").style.visibility = "visible";
}

function closetextarea() {
    document.getElementById("textarea1").remove();
    document.getElementById("maincolumn").insertAdjacentHTML('afterbegin', holdertext1);
    document.getElementById("opentextareabtn").style.visibility = "visible";
    document.getElementById("opentextareabtn").style.fontSize = "";
    document.getElementById("delbtn").style.visibility = "hidden";
    document.getElementById("savebtn").style.visibility = "hidden";
}

function savetextarea() {
    let text = document.getElementById("textarea1");             
    let lines = text.value.replace(/\r\n/g,"\n").split("\n");
    notes.push(lines);
    console.log(notes);
    document.getElementById("textarea1").remove();
    document.getElementById("maincolumn").insertAdjacentHTML('afterbegin', holdertext1);
    document.getElementById("opentextareabtn").style.visibility = "visible";
    document.getElementById("opentextareabtn").style.fontSize = "";
    document.getElementById("delbtn").style.visibility = "hidden";
    document.getElementById("savebtn").style.visibility = "hidden";
}