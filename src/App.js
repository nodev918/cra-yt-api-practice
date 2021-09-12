import './App.css';
import PrimarySearchAppBar from './components/Navbar'
import Home from './components/home/Home'
import YT from './components/yt/YT'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {



  return (
    <>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Route exact path="/">
          <YT />
        </Route>
      </BrowserRouter>
    </>

  );
}

export default App;
