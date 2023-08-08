import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import StoreItems from "../../data/items.json";
import Image from "next/image";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    img: string;
}


const ProductDetails = () => {

    const router = useRouter();
    const id = router.query.id;
    const [product, setProduct] = useState<StoreItemProps>();

    useEffect(() => {
        const getProduct = async () => {
            const foundProduct = StoreItems.find((item) => item.id === Number(id));
            setProduct(foundProduct as any);
            console.log(foundProduct)
        };

        getProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-10 p-5 flex flex-col items-center gap-3 ">
            <div>
                {/* <Image src={product.img} width="100" height="100" alt="logo;'" /> */}
                <img src={product.img} className="w-40 " />
            </div>
            <div>
                <p className="text-xs">{product.name}</p>
            </div>
            <div className="flex items-center gap-3">
                <p>${product.price}</p>
                <button className="hover:text-hover-color"></button>

            </div>
            <div>
            </div>
        </div>
    );
};

export default ProductDetails;