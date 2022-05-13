import React, { useEffect } from 'react'

export const Home = () => {

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
        console.log(res.data)
    })
    })

    return (
        <div>
            <h1>Kimche Challenge</h1>
        </div>
    )
}
