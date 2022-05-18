import React, { useState } from 'react';
import { CountryCard } from '../components/CountryCard';

export const Home = ({countries}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className='home'>
            
            <h1 className='header'>Country Search</h1>
            <h4>Enter the first letters of the country. You can group by continent or language.</h4>
            <div className='searchContainer'>
                <form onSubmit={handleSubmit}>
                    <input  
                    type="text" 
                    className='search' 
                    placeholder="Chi..."
                    onChange={handleInputChange}
                    />
                    <button type='submit'>
                        <i className='icon-search fas fa-search'></i>
                    </button>
                </form>
                <div>
                    <button>Continent</button>
                    <button>Language</button>
                </div>
            </div>
            <section>
                <h2>Countries</h2>
                <div className='countryCard-container'>
                    {/* Paso de datos estáticos a dinámicos  */}
                    {
                        countries.filter((country) => {
                            if(searchTerm === "") {
                                return country
                            } else if (country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return country
                            }
                        }).map((country, i) => (
                            <CountryCard
                            key={i + 1}
                            {...country}
                            />
                        ))
                    }
                </div>
            </section>
            {/* <section>
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
            </section> */}
            <h2 className='footer'>Kimche Challenge</h2>
        </div>
    )
}
