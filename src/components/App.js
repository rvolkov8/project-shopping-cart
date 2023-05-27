import Header from './header/Header';
import Menu from './menu/Menu';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useEffect, useMemo, useState } from 'react';

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
  const [posters] = useState([
    {
      id: 'avengers-1',
      name: `Avengers: Endgame - Journey's End`,
      description: `Celebrate the epic culmination of the Marvel Cinematic Universe with our Avengers End Game poster. Capturing the iconic battle scenes and emotional moments from this blockbuster film, our poster allows you to relive the thrilling conclusion to a decade-long saga. Bring the power of Earth's mightiest heroes into your space and showcase your unwavering loyalty to the Avengers with this stunning piece of art.`,
      file: avengers1File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: 'spider-man-1',
      name: `Spider-Man - Web Sling`,
      description: `Unleash the web-slinging action and timeless charm of everyone's favorite friendly neighborhood hero with our Spider-Man poster collection. From classic comic book covers to stunning movie artwork, our posters showcase the spectacular adventures of Peter Parker, capturing his acrobatic agility and unwavering sense of responsibility. Swing into action and bring the wall-crawling excitement of Spider-Man into your home today.`,
      file: spiderMan2File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'green-bruce-1',
      name: `Green Bruce`,
      description: `Unleash the raw power and unstoppable strength of the incredible Hulk with our captivating Hulk poster. Featuring the iconic green giant in all his glory, our poster showcases the intensity and ferocity that make Hulk one of Marvel's most iconic characters. Bring the incredible energy of Hulk into your home and let his indomitable spirit inspire you to embrace your inner strength.`,
      file: hulk3File,
      oldPrice: 12.49,
      newPrice: 7.49,
      size: '60 x 90',
    },
    {
      id: 'deadpool-1',
      name: `Join us - Deadpool`,
      description: `
      Embrace the irreverent humor and unapologetic attitude of the Merc with a Mouth with our Deadpool poster. Capturing the essence of this unconventional anti-hero, our poster showcases Deadpool's unique blend of wit, action, and unpredictability. Display this poster proudly and add a touch of unconventional charm and unfiltered charisma to your space.`,
      file: deadpool4File,
      oldPrice: 11.99,
      newPrice: null,
      size: '26.7 x 40',
    },
    {
      id: 'captain-america-1',
      name: `Captain America Civil War - Cap VS Iron Man`,
      description: `Witness the clash of two iconic superheroes with our Captain America Civil War - Cap VS Iron Man poster. Capturing the intense confrontation between Captain America and Iron Man, this poster encapsulates the emotional and ideological battle that divided the Avengers. Display this dynamic artwork and relive the epic showdown that forever changed the Marvel Universe.`,
      file: captainAmerica5File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'guardian-of-the-galaxy-1',
      name: `Guardians Of The Galaxy`,
      description: `Embark on an intergalactic adventure with our Guardians of the Galaxy poster. Featuring the beloved team of misfits including Star-Lord, Gamora, Drax, Rocket, and Groot, our poster captures the spirit of humor, action, and camaraderie that made this cosmic superhero ensemble a fan favorite. Bring the cosmic energy and infectious charm of the Guardians into your space and let their out-of-this-world adventures inspire your own sense of adventure.`,
      file: guardiansOfTheGalaxy6File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: 'thor-1',
      name: `Thor Ragnarok`,
      description: `Experience the thunderous might and cosmic spectacle of Thor Ragnarok with our captivating poster. Featuring Thor, the God of Thunder, along with Hulk, this poster encapsulates the vibrant energy and epic battles of this fan-favorite Marvel film. Display this artwork proudly and immerse yourself in the thrilling world of Asgard and beyond.`,
      file: thor7File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: 'wanda-vision-1',
      name: `Wandavision - Reality Rift`,
      description: `Celebrate the enigmatic love story and extraordinary powers of Wanda Maximoff and Vision with our captivating Wanda and Vision poster. Capturing the essence of their complex relationship, this poster showcases their dynamic connection amidst a backdrop of mystery and supernatural abilities. Display this enchanting artwork and delve into the fascinating world of these beloved characters from the Marvel Cinematic Universe.`,
      file: wandavision8File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'venom-1',
      name: `Venom - LIMITED EDITION`,
      description: `
      Indulge in the dark allure and thrilling anti-heroic charm of Venom with our exclusive LIMITED EDITION poster. This meticulously designed artwork captures the symbiotic fusion of Eddie Brock and the alien entity, showcasing the iconic black suit and menacing grin of Venom. With only a limited number available, this poster is a must-have for collectors and fans looking to bring the captivating essence of Venom into their collection. Don't miss your chance to own this rare piece of Venom artistry.`,
      file: venom9File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'loki-1',
      name: `Loki`,
      file: loki10File,
      description: `Dive into the realm of mischief and intrigue with our captivating Loki poster. Featuring the charismatic and enigmatic God of Mischief, this artwork captures Loki's magnetic presence and unpredictable nature. Showcase this poster proudly and embrace the allure of Loki as you venture into a world where mischief reigns supreme.`,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'black-panther-1',
      name: `Black Panther - Glow`,
      description: `Immerse yourself in the majestic world of Wakanda with our stunning Black Panther - Glow poster. This unique limited edition poster features a mesmerizing glow-in-the-dark effect that brings the heroic Black Panther to life in the night. Illuminate your space with the power and regal elegance of T'Challa, the Black Panther, and let this extraordinary artwork captivate your imagination.`,
      file: blackPanther11File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: 'moon-knight-1',
      name: `Moon Knight`,
      description: `Step into the enigmatic world of Moon Knight with our captivating Moon Knight poster. Featuring the iconic vigilante in his striking all-white attire, this artwork captures the essence of Moon Knight's complex and mysterious nature. Display this poster proudly and delve into the thrilling realm of the Moon Knight as you embrace the darkness and intrigue that surrounds this unique Marvel character.`,
      file: moonKnight12File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'avengers-2',
      name: `Avengers: Infinity War`,
      description: `Witness the epic showdown of the Marvel Cinematic Universe with our Avengers: Infinity War poster. This captivating artwork brings together Earth's mightiest heroes as they face the ultimate threat, Thanos. From the iconic heroes to the breathtaking cosmic battles, this poster captures the intensity and magnitude of the battle for the fate of the universe. Display this poster proudly and relive the thrilling moments of this monumental cinematic event.`,
      file: avengers13File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'doctor-strange-1',
      name: `Doctor Strange - In the Universe of Madness`,
      description: `
      Embark on a mind-bending journey into the mystical realm with our Doctor Strange - In the Universe of Madness poster. This captivating artwork captures the surreal and visually stunning world of Doctor Strange as he faces unimaginable threats. Display this poster proudly and immerse yourself in the extraordinary magic and mind-bending adventures that await in the universe of madness.`,
      file: doctorStrange14File,
      oldPrice: 6.99,
      newPrice: 5.59,
      size: '61 x 91.5',
    },
    {
      id: 'groot-1',
      name: `I am Groot`,
      description: `
      Celebrate the lovable and iconic Groot with our enchanting "I am Groot" poster. Featuring the beloved character in all his adorable glory, this artwork captures Groot's charm, innocence, and unwavering loyalty. Display this poster proudly and let the heartfelt message of "I am Groot" bring a smile to your face and remind you of the power of friendship and selflessness.`,
      file: groot15File,
      oldPrice: 6.99,
      newPrice: null,
      size: '61 x 91.5',
    },
    {
      id: 'iron-man-1',
      name: `Tony Stark`,
      description: `
      Pay homage to the genius, billionaire, playboy, philanthropist with our captivating Tony Stark poster. Featuring the charismatic and iconic Iron Man, this artwork captures Tony Stark's larger-than-life personality and his evolution from self-centered genius to selfless hero. Display this poster proudly and embrace the spirit of innovation, heroism, and unwavering determination embodied by Tony Stark.`,
      file: ironMan16File,
      oldPrice: 11.99,
      newPrice: null,
      size: '26.7 x 40',
    },
  ]);
  const [selectedPosterId, setSelectedPosterId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useMemo(() => {
    const storedSelectedPosterId =
      window.localStorage.getItem('selectedPosterId');
    if (storedSelectedPosterId) {
      setSelectedPosterId(JSON.parse(storedSelectedPosterId));
    }
  }, []);

  useEffect(() => {
    const storedCartItems = window.localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'selectedPosterId',
      JSON.stringify(selectedPosterId)
    );
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [selectedPosterId, cartItems]);

  const handlePosterSelection = (id) => {
    setSelectedPosterId(id);
  };

  const handleAddToCart = () => {
    const selectedPoster = posters.find(
      (poster) => poster.id === selectedPosterId
    );

    setCartItems((prevState) => {
      const updatedState = [...prevState];
      const existingCartItemIndex = updatedState.findIndex(
        (item) => item.id === selectedPoster.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItem = {
          ...updatedState[existingCartItemIndex],
          quantity: updatedState[existingCartItemIndex].quantity + 1,
        };
        updatedState[existingCartItemIndex] = updatedCartItem;
      } else {
        updatedState.push({
          id: selectedPoster.id,
          name: selectedPoster.name,
          file: selectedPoster.file,
          quantity: 1,
          oldPrice: selectedPoster.oldPrice,
          newPrice: selectedPoster.newPrice,
        });
      }
      return updatedState;
    });
  };

  const handleQuantityChange = (e, id) => {
    setCartItems((prevState) => {
      const updatedState = [...prevState];
      updatedState.map((item) => {
        if (item.id === id) {
          item.quantity = e.target.value;
        }
      });
      return updatedState;
    });
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevState) => {
      const updatedState = [...prevState];
      updatedState.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
      return updatedState;
    });
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevState) => {
      const updatedState = [...prevState];
      updatedState.map((item) => {
        if (item.id === id) {
          item.quantity--;
        }
      });
      return updatedState;
    });
  };

  const handleDeleteItem = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    setCartItems((prevState) => {
      const updatedState = [...prevState];
      updatedState.splice(index, 1);
      return updatedState;
    });
  };

  return (
    <>
      <Header />
      <Menu />
      <Main
        posters={posters}
        selectedPosterId={selectedPosterId}
        handlePosterSelection={handlePosterSelection}
        handleAddToCart={handleAddToCart}
        cartItems={cartItems}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleQuantityChange={handleQuantityChange}
        handleDeleteItem={handleDeleteItem}
      />
      <Footer />
    </>
  );
}

export default App;
