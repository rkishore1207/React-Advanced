import './index.css';

const App = () => {  

    return(
        <div className = 'container'>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

export default App;

const Header = () => {
  return(
    <header className = "header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = () => {

  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return(
    <div className = 'menu'>
      <ul className='pizzas'>
        {
          pizzaData.length > 0 && 
          pizzaData.map((pizza,index)=>{
            return(
              <Pizza pizzaObj = {pizza} key={index}/>
              )
            })
        }
      </ul>
    </div>
  )
}

const Pizza = (props) => {

  if(props.pizzaObj.soldOut) return null;

  return(
      <li className = 'pizza'>
        <h2>{props.pizzaObj.name}</h2>
        <img src = {props.pizzaObj.photoName} alt = {props.pizzaObj.name}/>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </li>
  )
}

const Footer = () => {

  const currentTime = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = currentTime >= openHour && currentTime <= closeHour;
  console.log(isOpen);

  return(
    <div>
      <footer className = 'footer'> 
      {
        isOpen ? (
          <Order closeHour={closeHour}/>
        ) : (
          <div>
            <p>We are Open only between {openHour} : 00 and {closeHour} : 00</p>
          </div>
        )
      }
      </footer>
    </div>
  )
}

const Order = (props) => {
  return(
    <div className='order'>
      <p>We are open till {props.closeHour} : 00</p>
      <div>
        <button className='btn'>Order</button>
      </div>
    </div>
  )
}