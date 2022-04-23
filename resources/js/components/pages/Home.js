import React from "react";

function Home(){
    return(
        <div>
            <h2>Home page component</h2>
        </div>
    );
}

export default Home;




// import react from "react";
// import ReactDOM from "react-dom";
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
// import {Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

// import NavbarHeader from "./NavbarHeader";
// import Home from './pages/Home';
// import About from './pages/About';

// function App(){
//     return(
        
//         <Router>
//             {/* <NavbarHeader /> */}
//             <div>
//                 <h2>Laravel React</h2>
//                 <ul>
//                     <li>
//                         <Link to="/laravel-react/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/laravel-react/about">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/laravel-react/dashboard">Dashboard</Link>
//                     </li>
//                 </ul>
//                 <hr />

//                 <Routes>
//                     <Route path="/laravel-react/" component={ <Home/> }></Route>
//                     <Route path="/laravel-react/about" component={ <About/> }></Route>
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

// if (document.getElementById('mainHome')) {
//     ReactDOM.render(<App />, document.getElementById('mainHome'));
// }







