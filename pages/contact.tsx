import Layout from "@/components/Layout/Layout"
import React from "react"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Contact() {
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
                        <div className="flex md:gap-20 gap-3">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Full Name
                                </span>
                                <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Uxbert-labs" />
                            </label>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Phone Number
                                </span>
                                <input type="text" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+200000000" />
                            </label>
                        </div>
                        <div className="flex gap-20 mt-10">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email
                                </span>
                                <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                            </label>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Order Number
                                </span>
                                <input type="text" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div className="flex gap-20 mt-10">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Company Name

                                </span>
                                <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Uxbert-labs" />
                            </label>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    RMA Number
                                </span>
                                <input type="text" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
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