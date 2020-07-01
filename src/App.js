import React from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './components/RegisterForm';
import Dashboard from './components/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Route path="/register" component={Register} />
      <Route path="/" exact component={LoginForm} />
      <Route path="/dashboard" exact component={Dashboard} />

    </BrowserRouter>
  );
}

export default App;
