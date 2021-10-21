import Navigation from './components/navigation/Navigation';
import './App.css';
import Сarousel from './components/carusel/Сarousel';
import Title from './components/title/Title';
import Infovar1 from './components/infovar1/Infovar1';
import Infovar2 from './components/infovar2/Infovar2';
import Infovar3 from './components/infovar3/Infovar3';
import Infovar4 from './components/infovar4/Infovar4';
import Infovar5 from './components/infovar5/Infovar5';
import Infovar6 from './components/infovar6/Infovar6';
import Review from './components/Review/Review';
import CTA from './components/CTA/CTA';
import Card from './components/card/Card';
import Slider from './components/slider/Slider';

import Nature from './components/images/nature.png';
import Nature2 from './components/images/nature2.png';
import Boy1 from './components/images/boy1.png';
import Boy2 from './components/images/boy2.png';
import Boy3 from './components/images/boy3.png';
import Girl1 from './components/images/girl1.png';
import Girl2 from './components/images/girl2.png';
import Girl3 from './components/images/girl3.png';
import Girl4 from './components/images/girl4.png';
import Girl5 from './components/images/girl5.png';
import Different from './components/images/different.png';
import Different2 from './components/images/different2.png';
import Clock from './components/images/smart_clock.png';
import Clock2 from './components/images/smart_clock2.png';
import Water from './components/images/water.png';
import Friends from './components/images/friends.png';
import Avatar from './components/images/avatar1.png';
import Team from './components/team/Team';
import Hero from './components/hero/Hero';
import MyFooter from './components/MyFooter/MyFooter';
import { MyStyledContainer } from './components/myStyledComponents';

function App() {
  const images = [Boy2,Boy3,Girl4,Girl5];
  return (
    <>
      <header>
        <Navigation />
        <MyStyledContainer>
          <Title />
        </MyStyledContainer>
      </header>
      <main>
        <MyStyledContainer>
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
          <Review avatar={Avatar} />  
        </MyStyledContainer>
        <Slider image={Clock2} />
        <MyStyledContainer>
          <Team images={images} />
        </MyStyledContainer>
        <Hero image={Different2} />
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </>
  );
}

export default App;
