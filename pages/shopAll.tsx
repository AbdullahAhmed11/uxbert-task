import React, { useState } from "react";
import StoreItem from "../data/items.json"
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SideShop from "@/components/ShopAll/SideShop";
import MainShop from "@/components/ShopAll/MainShop";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import AllShop from "../data/allShop.json"
function ShopAll() {
    return (
        <>
            <Layout>
                <div>
                    <div className="bg-second-color w-full h-40 flex flex-col items-center justify-center ">
                        <h1 className="mt-20">SHOP ALL</h1>
                        <div className="flex gap-3">
                            <Link passHref href="/">
                                <p className="hover:text-hover-color">Home</p>
                            </Link>
                            <p><ArrowForwardIosIcon /></p>
                            <Link passHref href="/shopAll">
                                <p className="hover:text-hover-color">Shop All</p>
                            </Link>
                        </div>
                    </div>
                    <MaxWidthWrapper>
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <SideShop />
                            </div>
                            <div className="col-span-3 overflow-hidden">
                                <MainShop />
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </Layout>
        </>
    )
}
export default ShopAll;