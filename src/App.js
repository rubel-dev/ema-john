import React from 'react'; 
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import ProductDetail from './Component/ProductDetail/ProductDetail';


function App() {
  return (
     <Router> 
       <Header></Header>
       <Switch> 
         <Route path ='/shop'>
              <Shop></Shop>
         </Route>
         <Route path='/review'>
            <Review></Review>
         </Route>
         <Route path ='/inventory'>
             <Inventory></Inventory>
         </Route>
         <Route path ='/product/:productKey'>
            <ProductDetail></ProductDetail>
         </Route>
         <Route path ='/'>
             <Shop></Shop>
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
