import Layout from "@/components/Layout/Layout"
import React from "react"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Contact() {

    const CONTACT_PROPS = [
        {
            title: "Full Name",
            type: "text",
            nameC: "name",
            placeHolder: "Uxbert-labs"
        },
        {
            title: "Phone Number",
            type: "text",
            nameC: "phone",
            placeHolder: "+20000000"
        },
        {
            title: "Email",
            type: "email",
            nameC: "email",
            placeHolder: "you@examble"
        },
        {
            title: "Order Number",
            type: "text",
            nameC: "order",
            placeHolder: ""
        },
        {
            title: "Company Name",
            type: "text",
            nameC: "name",
            placeHolder: "Uxbert-labs"
        },
        {
            title: "RMA Number",
            type: "text",
            nameC: "order",
            placeHolder: ""
        },
    ]



    return (
        <>
            <Layout>
                <div>
                    <div className="bg-second-color w-full h-40 flex flex-col items-center justify-center ">
                        <h1 className="mt-20">Contact Us</h1>
                        <div className="flex gap-3">
                            <Link passHref href="/">
                                <p className="hover:text-hover-color">Home</p>
                            </Link>
                            <p><ArrowForwardIosIcon /></p>
                            <Link passHref href="/contact">
                                <p className="hover:text-hover-color">Contact Us</p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-20 mb-10 flex-col p-5 md:p-0">

                        <div className="grid grid-cols-2  md:gap-10 gap-3">
                            {
                                CONTACT_PROPS.map((item) => (
                                    <>
                                        <label className="block">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                {item.title}
                                            </span>
                                            <input type={item.type} name={item.nameC} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={item.placeHolder} />
                                        </label>

                                    </>

                                ))
                            }
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="   bg-hover-color  w-[150px] mt-5  h-9 font-bold rounded  hover:text-white">
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Contact