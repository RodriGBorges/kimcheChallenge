import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";


function App() {

  const [loading, setLoading] = useState(true)

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
    setLoading(false)
  })
  .catch(error => console.log(error))
})
//Si hay países en local storage los traigo, sino traigo un array vacío para prevenir cualquier error
const { countries } = JSON.parse(localStorage.getItem('countries')) || [];

  if(loading) {
    return (
        <div className="auth__main">
            <div className="sk-fading-circle">
                <div className="sk-circle1 sk-circle"></div>
                <div className="sk-circle2 sk-circle"></div>
                <div className="sk-circle3 sk-circle"></div>
                <div className="sk-circle4 sk-circle"></div>
                <div className="sk-circle5 sk-circle"></div>
                <div className="sk-circle6 sk-circle"></div>
                <div className="sk-circle7 sk-circle"></div>
                <div className="sk-circle8 sk-circle"></div>
                <div className="sk-circle9 sk-circle"></div>
                <div className="sk-circle10 sk-circle"></div>
                <div className="sk-circle11 sk-circle"></div>
                <div className="sk-circle12 sk-circle"></div>
            </div>
        </div>
    )
}

  return (
    <>
      <Home
      countries = {countries} //las envío por props
      />
    </>
  )
  
};
export default App;
