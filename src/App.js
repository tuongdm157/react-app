import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Products from "./components/pages/Products";

import { CartProvide } from "./components/context/Cart";


const Home = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvide>
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/products/" component={Products} />
          <Route path="/" component={Home} />
        </div>
      </Router>
    </CartProvide>
  );
}

// import List from "./components/List";
// import Counter from "./components/Counter";


// const data = ['A', 'B', 'C'];

// export default function App(){
//   return <div className='App'>
//     <List data = {data} 
//       render={(item)=><div>{item}</div>}/>
//     <Counter render={value=><div>{value}</div>}/>
//   </div>
// }