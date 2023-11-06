import { useState, useEffect } from 'react'

export default function SearchBar() {
    function fetchAPIdata() {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((result) => console.log(result))
    }
    useEffect(fetchAPIdata, [])
    return (
        <div>
            <p>Here</p>
        </div>
    )
}
