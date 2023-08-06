import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
function Footer() {

    const FOOTER_PROPS = [
        {
            desc: "Shopping",
            desc1: "Shopping",
            desc2: "Shopping",
            desc3: "Shopping",
            desc4: "Shopping",
            title: "OutStock",
        },
        {
            desc: "Shopping",
            desc1: "Shopping",
            desc2: "Shopping",
            desc3: "Shopping",
            desc4: "Shopping",
            title: "OutStock",

        },
        {
            desc: "Shopping",
            desc1: "Shopping",
            desc2: "Shopping",
            desc3: "Shopping",
            desc4: "Shopping",
            title: "OutStock",

        },
        {
            desc: "Shopping",
            desc1: "Shopping",
            desc2: "Shopping",
            desc3: "Shopping",
            desc4: "Shopping",
            title: "OutStock",

        },
    ]

    return (
        <>
            <MaxWidthWrapper>
                <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                    <div>
                        <h1 className="font-bold text-white ">OutStock</h1>
                        <div className="flex flex-col  mt-7 gap-3">
                            <div className="flex items-center">
                                <p className="text-second-text"> <span className="text-second-text"><RoomOutlinedIcon /></span>Addresses : Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-second-text "> <span className="text-second-text"><MailOutlineOutlinedIcon /></span> Email: Examlbel@gmail.com</p>
                            </div>
                            <div className="flex ">
                                <p className="text-second-text "> <span className="text-second-text"><LocalPhoneOutlinedIcon /></span> Phone: <br />(1800)-000-6890 </p>
                            </div>

                        </div>
                    </div>

                    {
                        FOOTER_PROPS.map(prop => (
                            <div key={prop.desc}>
                                <h1 className="font-bold text-white">{prop.title}</h1>
                                <div>
                                    <p className="text-second-text gap-4 mt-7">{prop.desc}</p>
                                    <p className="text-second-text gap-4 mt-7">{prop.desc1}</p>
                                    <p className="text-second-text gap-4 mt-7">{prop.desc2}</p>
                                    <p className="text-second-text gap-4 mt-7">{prop.desc3}</p>
                                    <p className="text-second-text gap-4 mt-7">{prop.desc4}</p>
                                </div>
                            </div>

                        ))
                    }



                </div>
            </MaxWidthWrapper>
        </>
    )
}
export default Footer;