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
      <h2>Our Menu</h2>

        {
          pizzaData.length > 0 && 
          <>
            <p>These are all our bestsellers pizza's which was liked by most of our clients. We guaranteed to you that it will give you satisfaction.</p>\
            <ul className='pizzas'>
              {
                pizzaData.map((pizza,index) => 
                      <Pizza pizzaObj = {pizza} key={index}/>
                  )
              }
            </ul>
          </>
        }
    </div>
  )
}

const Pizza = ({pizzaObj}) => {

  if(pizzaObj.soldOut) return null;

  return(
      <li className = 'pizza'>
        <h2>{pizzaObj.name}</h2>
        <img src = {pizzaObj.photoName} alt = {pizzaObj.name}/>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
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

const Order = ({closeHour}) => {
  return(
    <div className='order'>
      <p>We are open till {closeHour} : 00</p>
      <div>
        <button className='btn'>Order</button>
      </div>
    </div>
  )
}