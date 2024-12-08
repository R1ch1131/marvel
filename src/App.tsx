import './App.css'
import Navigation from './components/Navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer />
      <Navigation />
    </div>
  )
}

export default App