let opentextareabtn = document.getElementById("opentextareabtn").addEventListener("click", opentextarea);
let delbtnelem = document.getElementById("delbtn").addEventListener("click", closetextarea);
let savebtnelem = document.getElementById("savebtn").addEventListener("click", savetextarea);
const holdertext1 = '<div id="holdertext"><p>Jot a Note..</p><p>..Tell a Story...</p><p>...Type a Letter..</p><p>...Scribble an Idea..</p><p>..Clear your Mind...</p><p>..Click to Create!!!</p></div>';
let textarea = '<textarea class="t" id="textbox" name="textarea" placeholder="Write a new note."></textarea>'
let notes = []

function opentextarea() {
    let holdertext = document.getElementById("holdertext");
    holdertext.remove();
    document.getElementById("maincolumn").insertAdjacentHTML('afterbegin', textarea);
    document.getElementById("opentextareabtn").style.visibility = "hidden";
    document.getElementById("opentextareabtn").style.fontSize = "0px";
    document.getElementById("delbtn").style.visibility = "visible";
    document.getElementById("savebtn").style.visibility = "visible";
}

function closetextarea() {
    document.getElementById("textbox").remove();
    document.getElementById("maincolumn").insertAdjacentHTML('afterbegin', holdertext1);
    document.getElementById("opentextareabtn").style.visibility = "visible";
    document.getElementById("opentextareabtn").style.fontSize = "";
    document.getElementById("delbtn").style.visibility = "hidden";
    document.getElementById("savebtn").style.visibility = "hidden";
}

function savetextarea() {
    let text = document.getElementById("textbox");             
    let lines = text.value.replace(/\r\n/g,"\n").split("\n");
    notes.push(lines);
    console.log(notes);
    document.getElementById("textbox").remove();
    document.getElementById("maincolumn").insertAdjacentHTML('afterbegin', holdertext1);
    document.getElementById("opentextareabtn").style.visibility = "visible";
    document.getElementById("opentextareabtn").style.fontSize = "";
    document.getElementById("delbtn").style.visibility = "hidden";
    document.getElementById("savebtn").style.visibility = "hidden";
}