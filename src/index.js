import example from './images/smoke.png';
import imgSvg from './images/flat.svg';
import { sum } from './helper/help';
import './styles/main.scss';

class Player {
    name = 'Hello Babel';
};

const string = new Player();

const p = document.createElement('p');
p.textContent = string.name;

const div = document.querySelector('#root');
div.append(p);

const img = document.createElement('img');
img.src = example;
img.width = 240;
div.append(img);

const imageSvg = document.createElement('img');
imageSvg.src = imgSvg;
imageSvg.width = 240;
div.append(imageSvg);

console.log(sum(2, 4));