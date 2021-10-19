import Navigation from './components/navigation/Navigation';
import './App.css';
import Сarousel from './components/carusel/Сarousel';
import Title from './components/title/Title';
import Infovar1 from './components/infovar1/Infovar1';
import Nature from './components/images/nature.png';
import Boy1 from './components/images/boy1.png';
import MyContainer from './components/MyContainer';
import Infovar2 from './components/infovar2/Infovar2';
import CTA from './components/CTA/CTA';
import Card from './components/card/Card';
import Infovar3 from './components/infovar3/Infovar3';
import Girl1 from './components/images/girl1.png';
import Infovar4 from './components/infovar4/Infovar4';
import Girl2 from './components/images/girl2.png';
import Friends from './components/images/friends.png';
import Different from './components/images/different.png';
import Clock from './components/images/smart_clock.png';
import Water from './components/images/water.png';
import Infovar5 from './components/infovar5/Infovar5';
import Girl3 from './components/images/girl3.png';
import Nature2 from './components/images/nature2.png';
import Infovar6 from './components/infovar6/Infovar6';
import Review from './components/Review/Review';
import Avatar from './components/images/avatar1.png';

function App() {
  return (
    <>
      <header>
        <Navigation />
        <MyContainer>
          <Title />
        </MyContainer>
      </header>
      <main>
        <MyContainer>
          <Сarousel />
          <Infovar1 image={Nature} revers={'revers'} />
          <Infovar1 image={Boy1} />
          <Infovar2 />
          <CTA />
          <Card />
          <Infovar3 image={Girl1} />
          <Infovar4 image1={Friends} image2={Different} image3={Girl2} />
          <Infovar5 image1={Water} image2={Clock} />
          <Infovar6 image1={Nature2} image2={Girl3} />
          <Review avatar={Avatar}/>
        </MyContainer>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
