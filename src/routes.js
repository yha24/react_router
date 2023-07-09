// import React from "react";
// import Trangchu from "./component/ViduRoute/Trangchu";
// import Home from "./component/ViduRoute/Home";
// import About from "./component/ViduRoute/About";
// import Topics from "./component/ViduRoute/Topics";

// const routes =[
//     {
//         path : '/Trangchu',
//         exact : true,
//         main : ()=> <Trangchu />
//     },
//     {
//         path : '/Home',
//         exact : true,
//         main : ()=> <Home />
//     },
//     {
//         path : '/About',
//         exact : true,
//         main : ()=> <About />
//     },
//     {
//         path : '/Topics',
//         exact : true,
//         main : ()=> <Topics />
//     }
 
// ];
// export default routes;
// import React from 'react';								
// import Login from './components/Login.js';								
// import AllProduct from './components/AllProduct.js';								
// import ProductList from './components/ProductList.js';								
// import ProductDetail from './components/ProductDetail.js';								
// import Add from './components/Add.js';								
// import Contact from './components/Contact.js';								
// import ContactList from './components/ContactList.js';								
// import Confirm from './components/Confirm.js';								
// import Introduce from './components/Introduce.js';								
// import SanPhamMoi from './components/SanPhamMoi.js';								
// import SanPhamHot from './components/SanPhamHot.js';								
// import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';								
// import ProDetailAdmin from './components/ProDetailAdmin.js';								
// import NotFound from './components/NotFound.js';								
// import ContactDetail from './components/ContactDetail.js';								
import ShowProduct from './component/ShowProduct.js';							
// const routes = [								
// 	{							
// 		path : '/',						
// 		exact : true,						
// 		main : ()=> <AllProduct />						
// 	},							
// 	{							
// 		path : '/login',						
// 		exact : true,						
// 		main : ({history})=> <Login history={history} />						
// 	},							
// 	{							
// 		path : '/product-list',						
// 		exact : true,						
// 		main : ()=> <ProductList />						
// 	},							
// 	{							
// 		path : '/contact-list',						
// 		exact : true,						
// 		main : ()=> <ContactList />						
// 	},							
// 	{							
// 		path : '/contacts/:id/contactdetail',						
// 		exact : true,						
// 		main : ({match})=> <ContactDetail match ={match}/>						
// 	},							
// 	{							
// 		path : '/products/:id/productdetail',						
// 		exact : true,						
// 		main : ({match})=> <ProductDetail  match ={match}/>						
// 	},							
// 	{							
// 		path : '/add',						
// 		exact : true,						
// 		main : ({history})=> <Add history={history} />						
// 	},							
// 	{							
// 		path : '/products/:id/edit',						
// 		exact : true,						
// 		main : ({match , history})=> <Add  match ={match} history={history}/>						
// 	},							
// 	{							
// 		path : '/contacts/:id/confirm',						
// 		exact : true,						
// 		main : ({match , history})=> <Confirm  match ={match} history={history}/>						
// 	},							
// 	{							
// 		path : '/contact',						
// 		exact : true,						
// 		main : ()=> <Contact />						
// 	},							
// 	{							
// 		path : '/introduce',						
// 		exact : true,						
// 		main : ()=> <Introduce />						
// 	},							
// 	{							
// 		path : '/sanphamhot',						
// 		exact : true,						
// 		main : ({match})=> <SanPhamHot match ={match}/>						
// 	},							
// 	{							
// 		path : '/sanphamkhuyenmai',						
// 		exact : true,						
// 		main : ({match})=> <SanPhamKhuyenMai match ={match}/>						
// 	},							
// 	{							
// 		path : '/sanphammoi',						
// 		exact : true,						
// 		main : ({match})=> <SanPhamMoi match ={match}/>						
// 	},							
// 	{							
// 		path : '/products/:id/prodetailadmin',						
// 		exact : true,						
// 		main : ({match})=> <ProDetailAdmin match ={match}/>						
// 	},							
// 	{							
// 		path : '',						
// 		exact : false,						
// 		main : ()=> <NotFound />						
// 	}							
// ];								
								
const routes =[
	{
		path: "/",
		exact: true,
		main: () => <ShowProduct />,
	},
	{
		path: "/admin",
		exact: true,
		main: () => <ShowProduct />,
	},
];							
export { routes };								