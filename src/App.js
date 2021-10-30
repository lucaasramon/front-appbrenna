import './App.css';
import M from 'materialize-css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './mdi/materialdesignicons.min.css';
import 'react-fancybox/lib/fancybox.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App; 
