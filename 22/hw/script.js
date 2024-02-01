window.onload = function(){
    document.querySelector('#saveButton').addEventListener('click', function(){
        let textValue = document.querySelector('#textInput').value;
        window.sessionStorage.setItem('myText', textValue);
    });
    document.querySelector('#showButton').addEventListener('click', function(){
        let savedText = window.sessionStorage.getItem('myText');
        document.querySelector('#output').textContent  = savedText;
    });
}