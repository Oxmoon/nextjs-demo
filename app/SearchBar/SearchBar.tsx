import { useState, useEffect } from 'react'
import './SearchBar.css'

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState('')
    useEffect(fetchAPIdata, [searchString])
    function fetchAPIdata() {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((products) => {
                const filtered = products.filter((el) => {
                    return el.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                })
                const currentFilter = filtered.map((product, index) => {
                    return (
                        <div className="product">
                            <p className="title">{product.title}</p>
                            <img src={product.image} />
                            <p className="price">${product.price}</p>
                        </div>
                    )
                })
                setFilteredProducts(currentFilter)
            })
    }
    function handleChange(event) {
        setSearchString(event.target.value)
    }
    return (
        <div>
            <p>The Search Bar</p>
            <input type="text" value={searchString} onChange={handleChange} />
            <div id="container">{filteredProducts}</div>
        </div>
    )
}
