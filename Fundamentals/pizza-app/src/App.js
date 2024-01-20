const App = () => {

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
        <div>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

export default App;

const Header = () => {
  return(
    <div>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
}

const Menu = () => {
  return(
    <div>
      <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </div>
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
      <footer> {new Date().toLocaleTimeString()} We are currently Open</footer>
    </div>
  )
}

const Pizza = () => {
    return(
        <div>
            <h3>Pizza Prosciutto</h3>
            <img src = "pizzas/prosciutto.jpg" alt = "prosciutto"/>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
        </div>
    )
}