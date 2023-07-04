import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function App() {
  return (<div className="container">
            <Header/>
            <Menu/>
            <Footer/>
          </div>);
}

function Menu(){
  return(
    <div className = "menu">
      <main>Our Menu </main>
      <Pizza
      name = "Photo Spinaci"
      ingredients = "Tomato, mushrooms"
      photoName = "pizzas/spinaci.jpg"/>
      <Pizza
      name = "Photo Spinaci"
      ingredients = "Tomato, mushrooms"
      photoName = "pizzas/spinaci.jpg"/>
      <Pizza
      name = "Photo Spinaci"
      ingredients = "Tomato, mushrooms"
      photoName = "pizzas/spinaci.jpg"/>
    </div>
  )
}

function Pizza(props){
  return (   
    <div className='pizza'>
      <h2>{props.name}</h2>
    <img src = {props.photoName} alt={props.name}/>
    <p>{props.ingredients}</p>
    </div>
    );           
}

function Header(){
  return <header className="header">
      <h1>Pizza Limited Co.</h1></header>
}



function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  //if(hour >= openHour && hour<= closeHour) 
    //alert("We're currently open")
  return (<footer className="footer">We're currently open</footer>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);