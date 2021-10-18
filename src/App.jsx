import Navigation from './components/menu/menu';
import { Container } from '@mui/material';
import './App.css';
import Сarousel from './components/carusel/Сarousel';
import Title from './components/title/Title';
import Info_var1 from './components/info_var1/Info_var1';
import Nature from './components/images/nature.png';
import Boy1 from './components/images/boy1.png';
import MyContainer from './components/MyContainer';

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
          <Info_var1 image={Nature} revers={'revers'}/>
          <Info_var1 image={Boy1} />
        </MyContainer>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
