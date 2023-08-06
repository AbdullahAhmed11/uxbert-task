import Layout from "@/components/Layout/Layout"
import React, { useEffect } from "react"
import HomeSection from "@/components/HomeSection/Home"
import Cart from "@/components/CartSection/Cart"
import StoreItems from "../data/items.json"
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper"
import AboutSection from "@/components/AboutSection/AboutSection"

function Home() {


  return (
    <div>
      <Layout>

        {/* horoSection  */}
        <div >
          <HomeSection />
        </div>

        {/* cartsection  */}
        <div className="flex items-center justify-center mt-4 flex-col gap-2 text-center">
          <h1 className="text-2xl font-bold">NEWEST PRODUCTS</h1>
          <p className="">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget</p>
        </div>
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
            {
              StoreItems.map((item) => (
                <div key={item.id}>
                  <Cart {...item} />
                </div>
              ))
            }

          </div>
        </MaxWidthWrapper>
        {/* AboutSection */}


        <div className="overflow-hidden">
          <AboutSection />
        </div>

      </Layout >
    </div >
  )
}
export default Home;