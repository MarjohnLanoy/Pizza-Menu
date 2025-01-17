import React, { StrictMode } from "react"
import ReactDom from "react-dom/client"
import "./index.css"
import clsx from "clsx"

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
    photoName: "/pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
        ))}
      </ul>
    </main>
  )
}
function Pizza({ pizzaObj }) {
  const { photoName, price, soldOut, ingredients, name } = pizzaObj

  const checkifSoldOut = soldOut && `sold-out`
  const showPrice = soldOut ? `Sold Out` : `Price: ${price}`

  return (
    <div className={`pizza ${checkifSoldOut}`}>
      <img className={`img`} src={photoName} alt={photoName}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span className={checkifSoldOut}>{showPrice}</span>
      </div>
    </div>
  )
}
function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} {isOpen ? `We're Open` : `We're Close`}
    </footer>
  )
}

function Button() {
  return <button className="btn">Order now</button>
}

const root = ReactDom.createRoot(document.getElementById(`root`))

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
