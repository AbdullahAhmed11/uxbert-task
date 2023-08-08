import Layout from "@/components/Layout/Layout";
import React from "react";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useShoppingCart } from "@/context/ShoppingCartContext";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import CheckoutSection from "@/components/CheckOut/CheckoutSection";

function Checkout() {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems
    } = useShoppingCart()

    return (
        <>
            <Layout>
                <div>
                    <div className="bg-second-color w-full h-40 flex flex-col items-center justify-center ">
                        <h1 className="mt-20">Checkout</h1>
                        <div className="flex gap-3">
                            <Link passHref href="/">
                                <p className="hover:text-hover-color">Home</p>
                            </Link>
                            <p><ArrowForwardIosIcon /></p>
                            <Link passHref href="/checkout">
                                <p className="hover:text-hover-color">Checkout</p>
                            </Link>
                        </div>
                    </div>
                    <MaxWidthWrapper>
                        <div className="mt-10 overflow-hidden">
                            <div>
                                <h1>Your Cart ({cartQuantity} items) </h1>
                            </div>
                            <div className="">
                                <div className=" p-10 bg-second-color w-full md:h-10 h-full flex flex-col md:flex-row items-center">
                                    <div className="md:flex-1">
                                        <h1>ITEM</h1>
                                    </div>
                                    <div className=" md:gap-40 flex items-center justify-around flex flex-col md:flex-row">
                                        <h1>PRICE</h1>
                                        <h1>QUNATITY</h1>
                                        <h1>TOTAL</h1>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {
                            cartItems.map(item => (
                                <CheckoutSection key={item.id} {...item} />
                            ))
                        }
                    </MaxWidthWrapper>
                </div>
            </Layout>
        </>
    )
}
export default Checkout