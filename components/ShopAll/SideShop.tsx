import React from 'react'

function SideShop() {
    const CATO_PROPS = [
        {
            id: 1,
            title: "Shop ALL"
        },
        {
            id: 2,
            title: "Scraft Moss"
        },
        {
            id: 3,
            title: "Publicatiions"
        },
    ]
    const PRICE_PROPS = [
        {
            id: 1,
            priceRange: "$0.00 - $51.00"
        },
        {
            id: 1,
            priceRange: "$0.00 - $51.00"
        },
        {
            id: 1,
            priceRange: "$0.00 - $51.00"
        },
        {
            id: 1,
            priceRange: "$0.00 - $51.00"
        },
        {
            id: 1,
            priceRange: "$0.00 - $51.00"
        },
    ]

    const SELLERS_PROPS = [
        {
            imgUrl: "./images/cart1.jpg",
            price: 123,
            title: "semple"
        },
        {
            imgUrl: "./images/cart2.jpg",
            price: 123,
            title: "semple"
        },
        {
            imgUrl: "./images/cart3.jpg",
            price: 123,
            title: "semple"
        },
        {
            imgUrl: "./images/cart4.jpg",
            price: 123,
            title: "semple"
        },
        {
            imgUrl: "./images/cart5.jpg",
            price: 123,
            title: "semple"
        },
    ]

    return (
        <div className='flex flex-col '>
            <div className='divide-y divide-solid'>
                <h1 className='font-bold mb-4 mt-6'>ALL Category</h1>
                {
                    CATO_PROPS.map((item) => (
                        <p className=' mb-4 mt-3 hover:text-hover-color'>{item.title}</p>
                    ))
                }
            </div>
            <div className=''>
                <h1 className='font-bold mb-4 mt-6'>Shop By Price</h1>
                {
                    PRICE_PROPS.map((item) => (
                        <p className=' mb-4 hover:text-hover-color'>{item.priceRange}</p>
                    ))
                }
            </div>
            <div className=''>
                <h1 className='font-bold mb-4 mt-6'>Best Sellers</h1>
                {
                    SELLERS_PROPS.map((sale) => (
                        <div className='flex gap-2 items-center mt-3 mb-2'>
                            <img src={sale.imgUrl} alt="cart" className='w-20 h-20' />
                            <div>
                                <p>{sale.title}</p>
                                <p>${sale.price}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default SideShop