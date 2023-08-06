import React from "react";
import Footer from "../Footer/Footer";

function FooterLayout() {
    return (
        <>
            <div className="bottom-0 w-full h-full bg-footer-color p-5 divide-y divide-solid ">
                <Footer />
                <div className="mt-3 flex items-center justify-center">
                    <h1 className="text-white mt-3 mb-3">© 2023 Outstock - Footer </h1>
                </div>
            </div>
        </>
    )
}
export default FooterLayout;