import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Analytics from './pages/anlytics/Analytics';
import Sales from './pages/sales/Sales';
import Transactions from './pages/transactions/Transactions';
import Email from './pages/email/Email';
import Feedback from './pages/feedback/Feedback';
import Message from './pages/message/Message';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path="/users">
              <UserList/>
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser/>
            </Route>
            <Route path="/products">
              <ProductList/>
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
            <Route path='/analytics'>
              <Analytics/>
            </Route>
            <Route path='/sales'>
              <Sales/>
            </Route>
            <Route path='/transactions'>
              <Transactions/>
            </Route>
            <Route path='/email'>
              <Email/>
            </Route>
            <Route path='/feedback'>
              <Feedback/>
            </Route>
            <Route path='/message'>
              <Message/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
