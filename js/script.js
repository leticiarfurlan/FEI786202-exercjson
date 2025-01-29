var books;
var selectedId;

window.onload = function () {
    loadPageData();
}

function loadPageData() {
    let request = new XMLHttpRequest();

    request.open("GET", "/data/pageData.json", true);

    //quando o estado de mudança mudar. ex: receber resposta
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var jsonData = JSON.parse(request.responseText);

            document.title = jsonData.title;
            document.getElementById("mainTitle").textContent = jsonData.title;
            document.getElementById("author").textContent = "by " + jsonData.author;  

        }
    } 

    request.send(); 

}

function loadBooks () {
    let request = new XMLHttpRequest();
    request.open("GET", "/data/books/json", true);

    request.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            books = JSON.parse(request.responseText);
            //carrega dados json
            document.getElementById("fileShow").textContent = JSON.stringify(books, null, '\t');
            selectedId = 0;
            loadBooks(selectedId);
        }
    }
}