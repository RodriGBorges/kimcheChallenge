import React, { useEffect } from 'react';
import { CountryCard } from '../components/CountryCard';

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
        <div className='home'>
            <h1 className='header'>Country Search</h1>
            <h4>Enter the first letters of the country. You can group by continent or language.</h4>
            <div className='searchContainer'>
                <form>
                    <input  type="text" className='search' placeholder="Chi..."/>
                    <button>
                        <i className='icon-search fas fa-search'></i>
                    </button>
                </form>
                <div>
                    <button>Continent</button>
                    <button>Language</button>
                </div>
            </div>
            <section>
                <h2>Asia</h2>
                <CountryCard />
            </section>
            <section>
                <h2>Africa</h2>
                <CountryCard />
            </section>
            <section>
                <h2>Europe</h2>
                <CountryCard />
            </section>
            <section>
                <h2>North America</h2>
                <CountryCard />
            </section>
            <section>
                <h2>South America</h2>
                <CountryCard />
            </section>
            <section>
                <h2>Oceania</h2>
                <CountryCard />
            </section>
            <section>
                <h2>Antarctica</h2>
                <CountryCard />
            </section>
            <h2 className='footer'>Kimche Challenge</h2>
        </div>
    )
}
