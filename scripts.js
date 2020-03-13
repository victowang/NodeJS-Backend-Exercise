function stabiloter(){
    console.log('stabiloter');
    items = document.getElementsByTagName('li');
    var arr = Array.from(items);
    result = arr.filter(selector); // filtrer les éléments qui contiennent X ou Y
    result.forEach(function(item){
        item.style.backgroundColor = 'yellow'; // surligner en jaune les éléments choisis
      });
        
}

function selector(item){
    text = item.innerHTML.slice(0, 10); // On regarde juste l'identifiant
    return text.includes('X') || text.includes('Y');
}

function envoyer(){
    console.log("envoyer au backend");
    data = ""
    items = document.getElementsByTagName('li');
    var arr = Array.from(items);
    arr = arr.filter(isSelected);
    data = arr.reduce( (data, element) => data + element.textContent.slice(0,10) + "\n" );
    //console.log(data);

    const url = "http://localhost:3000/"
    var xhttp = new XMLHttpRequest(); 
    xhttp.open('POST', url, true);
    xhttp.send(data);


}

function isSelected(item){
    return item.style.backgroundColor === "yellow";
}
