import React, { useEffect } from "react";
import { Home } from "./pages/Home";


function App() {

  // Para asegurarme decido empezar por traerme los datos del playground que prepararon en GraphQL ya que nunca lo había utilizado.
useEffect(() => {
  fetch('https://countries.trevorblades.com', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query: `
      query {
      countries {
          code
          emoji
          name
          capital
          phone
          currency
          emojiU
          continent {
          name
          }
          languages {
          name
          native
          }
          states {
          name
          }
      }
      }
      `})
  })
  .then(res => res.json())
  .then(res => {
    //Guardo los países en localstorage
    localStorage.setItem('countries', JSON.stringify(res.data))
  })
  .catch(error => console.log(error))
  })
  //Si hay países en local storage los traigo, sino traigo un array vacío para prevenir cualquier error
  const { countries } = JSON.parse(localStorage.getItem('countries')) || [];

  return (
    <>
      <Home
      countries = {countries} //las envío por props
      />
    </>
  )

};
export default App;
