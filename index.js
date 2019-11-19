// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    insertText();
});

function insertText() {

    let text = document.getElementById('text')
    return text.innerHTML = "This is really cool!"
}
