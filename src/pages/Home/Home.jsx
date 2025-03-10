import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate();

  const handlePlayClick = () => {
    const movieId = 15; // The ID for "The Protector"
    navigate(`/player/${movieId}`);
  };
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
          <div className="hero-caption">
            <img src={ hero_title} alt=""  className='caption-img'/>
            <p>Discovering his ties to a secret ancient order,a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy.</p>
              <div className="hero-btns">
                <button className='btn' onClick={handlePlayClick}><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn' ><img src={info_icon} alt="" />More Info</button>
              </div>
              <TitleCards/>
          </div>
          <div className="more-cards">
          <TitleCards title={"Blockbuster Movie"}/>
          <TitleCards title={"Only on Netflix"}/>
          <TitleCards title={"Upcoming"}/>
          <TitleCards title={"Top pics for you"}/>

          </div>


          
      
      
      </div>
      <Footer/>
      </div>
  )
}

export default Home