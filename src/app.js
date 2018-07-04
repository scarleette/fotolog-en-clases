function saveComment() {
// en esta linea validaremos que no este vacio el input name y el input comment
// || significa ó && significca y.
if ((document.getElementById('name').value === '') ||
    (document.getElementById('comment').value === '')) {
    alert('no pueden haber espacios vacios')
} else {
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    localStorage.setItem(name, comment);
    }
};

function printComment() {
    document.getElementById('datos').innerHTML = '';
    // con for recorremos nuestro localStorage
    for(let i = 0; i < localStorage.length; i++) {
    // en esta linea se guarda la llave de cada objeto       
        let commentName = localStorage.key(i);
    // en esta variable guardaremos los comentarios correspondiente a cada llave obtenida en comnetariosName
        let comentarioTexto = localStorage.getItem(commentName);


        let singleComment = document.createElement('div');
        singleComment.className = 'singleComment';

        let titleCommnent = document.createElement('h5');
        let nodeTitleComent = document.createTextNode(commentName);
        titleCommnent.appendChild(nodeTitleComent);

        let pComment = document.createElement('p');
        let nodeP = document.createTextNode(comentarioTexto)
        pComment.appendChild(nodeP);

        singleComment.appendChild(titleCommnent);
        singleComment.appendChild(pComment);
        document.getElementById('datos').appendChild(singleComment);
    }
};

function deleteComment() {
    window.localStorage.clear();
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('datos').innerHTML = '';

};

function makeComment() {
if (typeof(Storage) !== undefined) {
    saveComment();
    printComment();
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}else {
    alert('Lo sentimos, el Web Storage no tiene soporte : ')
    }
};

