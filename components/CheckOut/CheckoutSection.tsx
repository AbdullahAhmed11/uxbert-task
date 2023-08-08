import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import StoreItems from "../../data/items.json"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface CartItemProps {
    id: number
    quantity: number
}



function CheckoutSection({ id, quantity }: CartItemProps) {
    const {
        cartItems,
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,
    } = useShoppingCart()
    const item = StoreItems.find(i => i.id === id)
    if (item === null) return null




    return (
        <>
            <div className=" ">
                <div className="  mt-5 mb-10 p-10  w-full md:h-10 flex md:flex-row flex-col items-center ">
                    <div className="flex-1 flex md:flex-row flex-col items-center gap-2">
                        <img src={item?.img} className="w-20 h-30" />
                        <p className="text-xl hover:text-hover-color">{item?.name}</p>
                    </div>
                    <div className=" md:gap-40 flex md:flex-row flex-col items-center justify-around">

                        <h1 className="text-xl font-bold">${item?.price}</h1>
                        <div className="flex items-center gap-1">
                            <button onClick={() => decreaseCartQuantity(id)}><KeyboardArrowDownIcon /></button>
                            <h1 className="text-xl font-bold">{quantity}</h1>
                            <button onClick={() => increaseCartQuantity(id)}><KeyboardArrowUpIcon /></button>
                        </div>
                        <div className="flex items-center gap-2">
                            <h1>TOTAL</h1>
                            <div className="flex cursor-pointer items-center justify-center bg-second-color w-5 h-5 rounded-full">
                                <span onClick={() => removeFromCart(id)}>X</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1 bg-second-color">

                </div>
            </div>
        </>
    )
}
export default CheckoutSection;