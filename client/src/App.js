import React from 'react';
import './App.css';
import Navbar from "./components/navbar/index"
import Books from "./pages/books"
import NotFoundPage from './components/NotFoundPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/404" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;