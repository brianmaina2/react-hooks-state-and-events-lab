import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDark] = useState(false) 
  
  const brian=()=>{
     setDark((dark)=> !dark)
  }

  
  const appClass = dark ? "App dark" : "App light"

  return (
    <div style={{background: appClass}} className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={brian}>{dark? "dark mode" : "light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
