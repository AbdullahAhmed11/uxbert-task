import React, { useContext, useState } from "react";
import StoreItems from "../../data/items.json"
import { useShoppingCart } from "@/context/ShoppingCartContext";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from "next/link";
import { useRouter } from "next/router";




type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    img: string;
}


function CartItem({ id, name, price, img }: StoreItemProps) {
    const router = useRouter();

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()



    return (
        <>
            <MaxWidthWrapper>

                <div className="mt-10 p-5 flex flex-col items-center gap-3 ">
                    <div>

                        <img src={img} className="w-40 " />
                    </div>
                    <div>
                        <p className="text-xs">{name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p>${price}</p>
                        <Link passHref href={`product/${id}`} target="_blank">
                            <button className="hover:text-hover-color"><VisibilityIcon /></button>
                        </Link>

                    </div>
                    <div>
                        <button onClick={() => increaseCartQuantity(id)} className="bg-hover-color text-white p-2 rounded-md">AddToCart</button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}
export default CartItem;