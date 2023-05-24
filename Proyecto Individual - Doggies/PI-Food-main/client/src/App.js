import './App.css';
import Home from './Views/Home Page/Home';
import Landing from './Views/Landing Page/Landing';
import Form from './Views/Form Page/Form';
import Detail from './Views/Detail Page/Detail';
import Notfound from './Views/Home Page/Notfound';
import About from './Views/AboutUs/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path = "/home" component={Home} />
      <Route exact path = "/" component={Landing} />
      <Route path = "/create" component={Form} />
      <Route path = "/detail/:detailId" component={Detail} />
      <Route path = "/about" component={About} />
      <Route path = "/*" component={Notfound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
