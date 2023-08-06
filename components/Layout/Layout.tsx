import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import LayoutHeader from "./LayoutHeader";
import Footer from "./LayoutFooter";

interface StandardLayoutProps {
    children: React.ReactNode;
}


function Layout(props: StandardLayoutProps) {
    return (
        <>
            <div>
                <LayoutHeader />
                <div className="">
                    {props.children}
                </div>
                <Footer />

            </div>
        </>
    )
}
export default Layout;