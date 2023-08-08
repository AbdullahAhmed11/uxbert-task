import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import StoreItems from "../../data/allShop.json";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Layout from "@/components/Layout/Layout";


type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    img: string;
}


const ProductDetails = ({ id }: StoreItemProps) => {

    const router = useRouter();
    const idR = router.query.id;
    const [product, setProduct] = useState<StoreItemProps>();

    useEffect(() => {
        const getProduct = async () => {
            const foundProduct = StoreItems.find((item) => item.id === Number(idR));
            setProduct(foundProduct as any);
            console.log(foundProduct)
        };

        getProduct();
    }, [idR]);

    if (!product) {
        return <div>Loading...</div>;
    }
    const { increaseCartQuantity } = useShoppingCart()

    return (
        <>
            <Layout>
                <MaxWidthWrapper>
                    <div className=" flex gap-3 flex-col mb-10">
                        <div className="">
                            <h1 className="text-2xl font-bold mt-52">{product.name}</h1>
                        </div>
                        <div>
                            <p>(no reviews yet)</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold ">${product.price}</h1>
                        </div>
                        <div className="flex gap-3">
                            <h1 className="font-bold">Brand</h1>
                            <h1>OFS</h1>
                        </div>
                        <div className="flex gap-3">
                            <h1 className="font-bold">SKU:</h1>
                            <h1>OFSUC</h1>
                        </div>
                        <div className="w-full h-1 bg-second-color"></div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ala. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                        </div>
                        <div>
                            <button onClick={() => increaseCartQuantity(id)} className="bg-hover-color text-white p-2 rounded-md">AddToCart</button>
                        </div>
                    </div>
                </MaxWidthWrapper>

            </Layout>
        </>
    );
};

export default ProductDetails;