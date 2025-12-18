import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ReactLenis } from "@studio-freight/react-lenis"
import PageTransition from "./pageTransition"
import Header from "./header"
import Footer from "./footer"

import "../scss/site.scss"

const SCROLL_OPTIONS = {
    duration: 1.2,
    orientation: "vertical",
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
}

export default function Layout({ children, title = null }) {
    return (
        <ReactLenis root options={SCROLL_OPTIONS}>
            <Header title={title}/>
            <PageTransition>
                <main>{children}</main>
                <Footer />
            </PageTransition>
        </ReactLenis>
    )
}
