contenedor = document.getElementById('contenedor');
key = document.getElementById('key');
addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
    key.style.backgroundColor = 'pink';
    } else if (event.key === 's' || event.key === 'S') {
    key.style.backgroundColor = 'orange';
    } else if (event.key === 'd' || event.key === 'D') {
        key.style.backgroundColor = 'cyan';
    } else if (event.key === 'q' || event.key === 'Q') {
        nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = '1px solid';
        nuevoDiv.style.backgroundColor = 'purple';
        contenedor.appendChild(nuevoDiv);
    } else if (event.key === 'w' || event.key === 'w') {
        nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = '1px solid';
        nuevoDiv.style.backgroundColor = 'grey';
        contenedor.appendChild(nuevoDiv);
    } else if (event.key === 'e' || event.key === 'E') {
        nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = '1px solid';
        nuevoDiv.style.backgroundColor = 'brown';
        contenedor.appendChild(nuevoDiv);
    }
    }
)
