import React, { useState } from 'react'
import { useShoppingCart } from "@/context/ShoppingCartContext";
import AllShop from "../../data/allShop.json"
type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    img: string;
}


function MainShop() {

    const {
        increaseCartQuantity,
    } = useShoppingCart()

    const [currentPage, setCurrentPage] = useState(1);

    const recordesPerPage = 3;
    const lastIndex = currentPage * recordesPerPage;
    const firstIndex = lastIndex - recordesPerPage;
    const records = AllShop.slice(firstIndex, lastIndex);
    const npage = Math.ceil(AllShop.length / recordesPerPage)
    const numbers: number[] = Array.from({ length: npage }, (_, i) => i + 1);

    function prePage() {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(id: number) {
        setCurrentPage(id)
    }
    function nextPage() {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <>
            <div className='mt-6 ml-4 grid md:grid-cols-3 grid-cols-1'>
                {
                    records.map((item) => (
                        <div className="mt-10 p-5 flex flex-col items-center gap-3 ">
                            <div>
                                <img src={item.img} className="w-40 " />
                            </div>
                            <div>
                                <p className="text-xs">{item.name}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p>${item.price}</p>
                                <button className="hover:text-hover-color"></button>

                            </div>
                            <div>
                                <button onClick={() => increaseCartQuantity(item.id)} className="bg-hover-color text-white p-2 rounded-md">AddToCart</button>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='flex items-center gap-1 md:gap-4 mt-20 justify-center mb-10 md:mb-0   '>
                <div>
                    <button onClick={prePage} className=' bg-hover-color w-24  h-10 font-bold rounded  text-white'>prev</button>
                </div>
                {
                    numbers.map((n, i) => (
                        <div key={i}>
                            <p onClick={() => changeCPage(n)} className='cursor'>{n}</p>
                        </div>
                    ))
                }
                <div>
                    <button onClick={nextPage} className=' bg-hover-color w-24  h-10 font-bold rounded  text-white'>next</button>
                </div>
            </div>
        </>
    )
}

export default MainShop