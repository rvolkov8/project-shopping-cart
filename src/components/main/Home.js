import { Link } from 'react-router-dom';
import bgVideo from '../../assets/bg-video-1.mp4';

const Home = () => {
  return (
    <div className="home">
      <video src={bgVideo} autoPlay muted loop></video>
      <div className="bg-gradient"></div>
      <Link to="/products">
        <button className="shop-now button">Shop Now</button>
      </Link>
      <div className="opening">
        Welcome to Marvel Poster Universe, your ultimate destination for all
        things Marvel posters! Discover a vast collection of iconic heroes and
        thrilling moments beautifully captured on high-quality prints. Whether
        you're a die-hard fan or simply looking to adorn your walls with the
        power of Marvel, it's time to shop now and bring the Marvel Universe to
        life in your own space.
      </div>
    </div>
  );
};

export default Home;
