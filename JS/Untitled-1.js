

const delbtn = document.querySelector('');
/*function # 2"""" create a del button """"*/
function deltext() {
    /* clears all text from textarea*/
}
delbtn.onclick = deltext;


const savebtn = document.querySelector('');
/*function # 3"""" create a save button """"*/
function savetext() {
    /*saves textarea as note + #(incremented by 1 each new file saved)*/ 
    /*stored in sidebar list*/
}
savebtn.onclick = savetext;


const openfilesbtn = document.querySelector('');
/*function # 4"""" create an open files button """"*/
function openfile() {
/*opens sidebar 
/*dispalys list of saved files*/
}
openfilesbtn.onclick = openfile;


const closefilesbtn = document.querySelector('');
/*function # 5"""" create a close files button """"*/
function closefile(onclick) {
    /*close sidebar containing list of files*/ 
}
closefilesbtn.onclick = closefile


const noteopenbtn = document.querySelector('');
/*function # 6"""" create an open saved note button """"*/
function opennote(onclick) {
    /*selected note is opened in text area*/
    /*a close note button becomes visible*/ 
}
noteopenbtn.onclick = opennote;


const noteclosebtn = document.querySelector('');
/*function # 7"""" create a close note button """"*/
function closenote(onclick) {
     /*note is closed from textarea */
     /*close note button disappears*/
}
noteclosebtn.onclick = closenote;
