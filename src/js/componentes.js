import '../css/componentes.css';
import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.appendChild(h1);

    // const img = document.createElement('IMG');
    // img.src = webpackLogo;
    // document.body.appendChild(img);
}

