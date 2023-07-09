// import logo from './logo.svg';
import './App.css';
// import routes from './routes';
import Add from './component/Add';
import React from 'react';
import ShowProduct from './component/ShowProduct';
import ProductList from './component/ProductList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShowSp from './component/ShowSp';
// import Wrapper from './layout_admin/wrapper.js';
// import Banner from './layout_admin/banner.js';
// import { BrowserRouter as Router,Link,Route, Routes } from 'react-router-dom';
// import Home from './component/ViduRoute/Home';
// import About from './component/ViduRoute/About';
// import Topics from './component/ViduRoute/Topics';
// import Trangchu from './component/ViduRoute/Trangchu';

function App() {
  // const renderPages = () => {
  //   return RoutesAdmin.map((page) => (
  //     <Route
  //       key={page.path}
  //       path={page.path}
  //       element={page.element}
  //       index={page.index}
  //     />
  //   ))
  // }
  return (
    // <Router>
    //   <div>
    //     <h2>Wellcome to React Router Tutorial</h2>
    //     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    //       <ul className='navbar-nav mr-auto'>
    //         <li><Link to={'/Trangchu'} className='nav-link'>Trangchu</Link></li>
    //         <li><Link to={'/Home'} className='nav-link'>Home</Link></li>
    //         <li><Link to={'/About'} className='nav-link'>About</Link></li>
    //         <li><Link to={'/Topics'} className='nav-link'>Topics</Link></li>
    //       </ul>
    //     </nav>
    //     <hr />
    //     <Routes>
    //       <Route exact path='/Trangchu' Component={Trangchu} />
    //       <Route exact path='/Home' Component={Home} />
    //       <Route exact path='/About' Component={About} />
    //       <Route exact path='/Topics' Component={Topics} />
    //     </Routes>
    //   </div>
    // </Router>
    // <Add></Add>
    // <ProductList></ProductList>
    <Router>
      <Routes>
        <React.Fragment>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/add-product" element={< Add />} /> 
        </React.Fragment>
      </Routes>
    </Router>
    
 
    
    // <ShowProduct></ShowProduct>
        // <ShowSp></ShowSp>
  );
}

export default App;
// import React, { Component } from 'react';
// import routes from './routes';
// import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';
// class App extends Component {
//   render() {
//     return (
//       <Router>
//           <div>
//             <div>
//               {this.showContentMenus(routes)}
//             </div>
//           </div>
//       </Router>
//     );
//   }
//   showContentMenus = (routes) => {
//     var result = null;
//     if (routes.length > 0) {
//       result = routes.map((route, index) => {
//         return (<Route
//           key={index}
//           path={route.path}
//           exact={route.exact}
//           component={route.main}
//         />
//         )
//       });
//     }
//     return <Routes>{result}</Routes>;
//   }

// }

// export default App;
// import React, { Component } from 'react';
// import routes from './routes';
// import { BrowserRouter as Router, Routes} from 'react-router-dom';
// class App extends Component {
//   render() {
//     return (
//       <Router>
//           <div>
//             <div>
//               {this.showContentMenus(routes)}
//             </div>
//           </div>
//       </Router>
//     );
//   }
//   showContentMenus = (routes) => {
//     var result = null;
//     if (routes.length > 0) {
//       result = routes.map((route, index) => {
//         return (<Routes
//           key={index}
//           path={route.path}
//           exact={route.exact}
//           component={route.main}
//         />
//         )
//       });
//     }
//     return <Routes>{result}</Routes>;
//   }

// }

// export default App;
// import React, { Component } from 'react';
// import routes from './routes';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <div>
//             {this.showContentMenus(routes)}
//           </div>
//         </div>
//       </Router>
//     );
//   }

//   showContentMenus = (myRoutes) => {
//     var result = null;
//     if (myRoutes.length > 0) {
//       result = myRoutes.map((route, index) => {
//         return (
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             element={route.main}
//           />
//         )
//       });
//     }
//     return result;
//   }
// }

// export default App;
