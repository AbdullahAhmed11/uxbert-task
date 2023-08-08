import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";

function LayoutHeader() {

    const [open, setOpen] = useState(false)

    const NAV_LINKS = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Shop ALL",
            href: "/shopAll",
        },
        {
            label: "Contact Us",
            href: "/contact",
        },
    ]
    const { cartQuantity, openCart } = useShoppingCart()

    return (
        <>
            <div className="w-full md:h-14  bg-layout-color p-5 mb-15 fixed z-40">
                <MaxWidthWrapper>
                    <div className="flex items-center justify-between">
                        <div>
                            <Image
                                src="/images/logo.webp"
                                width="100"
                                height="100"
                                alt="logo"
                            />
                        </div>
                        <div onClick={() => setOpen(!open)} className="text-white  md:hidden">
                            {
                                open ? (
                                    <MenuIcon />
                                ) : (
                                    <ShoppingBagOutlinedIcon />
                                )
                            }
                        </div>
                        <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static gap-5 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                            {
                                NAV_LINKS.map((link) => (
                                    <Link passHref target="_blank" href={link.href}>
                                        <p key={link.href} className="font-bold text-white cursor-pointer md:ml-8  md:my-0 my-7 hover:text-hover-color">{link.label}</p>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="flex items-center">
                            <div className="absolute top-3 right-28 bg-red rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 flex items-center justify-center text-white text-xs sm:text-sm md:text-base">
                                <p>{cartQuantity}</p>
                            </div>
                            <Link passHref href="/checkout">
                                <ShoppingBagOutlinedIcon className="text-white" />
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>





        </>
    )
}
export default LayoutHeader