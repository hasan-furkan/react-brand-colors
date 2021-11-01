import React, { useState } from 'react'
import Search from './Search'
import BrandsData from "../brands.json"
import Brand from './Brand'

function Content() {
    // console.log(BrandsData);

    const brandsArray = []
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    })
    // console.log(brandsArray);

    const [brands, setBrands] = useState(brandsArray)

    return (
        <div className="content">
            <header className="header">
                <Search/>
            </header>
            <section className="brands">
                {
                    brands.map((brand)=> (
                        <Brand brand={brand}/>
                    ))
                }
            </section>
        </div>
    )
}

export default Content
