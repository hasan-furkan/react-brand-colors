import React from 'react'

function Brand({brand}) {
    return (
        <div className="brand">
            <h5>{brand.title}</h5>
            <div className="brands-colors">
                {}
            </div>
        </div>
    )
}

export default Brand
