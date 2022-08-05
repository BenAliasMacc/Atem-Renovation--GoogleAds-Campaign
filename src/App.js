import './App.scss';
import { Header} from './Components/Header';
import { MaPrimeRenov } from './Components/MaPrimeRenov';
import { PompeAChaleur } from './Components/PompeAChaleur';

function App() {
  return (
    <div className="App">
      <Header />
      <PompeAChaleur />
      <MaPrimeRenov />
    </div>
  );
}

export default App; 
