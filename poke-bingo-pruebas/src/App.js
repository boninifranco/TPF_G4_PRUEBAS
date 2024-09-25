import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HomePage } from './pages/homePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { RoutesList } from './routes/RoutesList';
import { Headerbs } from './components/header/Headerbs';
import { Footer } from './shared/footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Headerbs />
        <RoutesList>
          <HomePage/>
        </RoutesList>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
