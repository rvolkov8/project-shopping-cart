import Header from './header/Header';
import Menu from './menu/Menu';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import avengers1File from '../assets/posters/1-avengers.png';
import spiderMan2File from '../assets/posters/2-spider-man.png';
import hulk3File from '../assets/posters/3-hulk.png';
import deadpool4File from '../assets/posters/4-deadpool.png';
import captainAmerica5File from '../assets/posters/5-captain-america.png';
import guardiansOfTheGalaxy6File from '../assets/posters/6-guardians-of-the-galaxy.png';
import thor7File from '../assets/posters/7-thor.png';
import wandavision8File from '../assets/posters/8-wandavision.png';
import venom9File from '../assets/posters/9-venom.png';
import loki10File from '../assets/posters/10-loki.png';
import blackPanther11File from '../assets/posters/11-black-panther.png';
import moonKnight12File from '../assets/posters/12-moon-knight.png';
import avengers13File from '../assets/posters/13-avengers.png';
import doctorStrange14File from '../assets/posters/14-doctor-strange.png';
import groot15File from '../assets/posters/15-groot.png';
import ironMan16File from '../assets/posters/16-iron-man.png';

function App() {
  const [posters, setPosters] = useState([
    {
      id: uuidv4(),
      name: `Avengers: Endgame - Journey's End`,
      file: avengers1File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Spider-Man - Web Sling`,
      file: spiderMan2File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Green Bruce`,
      file: hulk3File,
      oldPrice: 12.49,
      newPrice: 7.49,
      size: '60 x 90',
    },
    {
      id: uuidv4(),
      name: `Join us - Deadpool`,
      file: deadpool4File,
      oldPrice: 11.99,
      newPrice: null,
      size: '26.7 x 40',
    },
    {
      id: uuidv4(),
      name: `Captain America Civil War - Cap VS Iron Man`,
      file: captainAmerica5File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Guardians Of The Galaxy`,
      file: guardiansOfTheGalaxy6File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Thor Ragnarok`,
      file: thor7File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Wandavision - Reality Rift`,
      file: wandavision8File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Venom - LIMITED EDITION`,
      file: venom9File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Loki`,
      file: loki10File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Black Panther - Glow`,
      file: blackPanther11File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Moon Knight`,
      file: moonKnight12File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Avengers: Infinity War`,
      file: avengers13File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Doctor Strange - In the Universe of Madness`,
      file: doctorStrange14File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `I am Groot`,
      file: groot15File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: uuidv4(),
      name: `Tony Stark`,
      file: ironMan16File,
      oldPrice: 11.99,
      newPrice: null,
      size: '26.7 x 40',
    },
  ]);

  return (
    <>
      <Header />
      <Menu />
      <Main posters={posters} />
      <Footer />
    </>
  );
}

export default App;
