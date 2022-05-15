import React from 'react';

// Hago las tarjetas de los países por separado para no cargar tanto el home
export const CountryCard = ({ i, code, name, emoji, capital, phone, currency}) => {
    return (
        <article className='card'>
            <div className='head'>
                <small>{code}</small>
                <p>{name}</p>
                <i>{emoji}</i>
            </div>
            <div className='info'>
                <p>Capital: {capital}</p>
                <p>Phone: {phone}</p>
                <p>Currency: {currency}</p>
                <small>more</small>
            </div>
        </article>
    )
}
