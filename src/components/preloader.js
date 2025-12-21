import React, { useRef, useMemo } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText, useGSAP)

const TAGLINES = ["Design for humanity.", "Design for the human spirit.", "Go deeper."]
const PRELOADER_TIMESCALE = 0.85

export default function Preloader({ onComplete }) {
    const containerRef = useRef(null)
    const taglineRef = useRef(null)
    const tagline = useMemo(() => TAGLINES[Math.floor(Math.random() * TAGLINES.length)], [])

    useGSAP(() => {
        const officeEl = document.querySelector(".office-text")
        if (!officeEl || !containerRef.current || !taglineRef.current) {
            if (onComplete) onComplete()
            return
        }

        const split = new SplitText(officeEl, { type: "words" })
        let hasReverted = false
        const revertSplit = () => {
            if (hasReverted) return
            hasReverted = true
            split.revert()
        }

        const tl = gsap
            .timeline()
            .to(".preloader-seek", { opacity: 1, duration: 0.5 })
            .to(officeEl, { opacity: 1, duration: 0.2 })
            .to(split.words, { opacity: 1, duration: 0.4, stagger: 0.15 }, "<")
            .to(taglineRef.current, { opacity: 1, duration: 0.5 })
            .to(taglineRef.current, { opacity: 0, duration: 0.4 }, "+=0.8")
            .to(containerRef.current, { opacity: 0, duration: 0.5 })
            .to(officeEl, { opacity: 0, duration: 0.3 })
            .call(() => {
                revertSplit()
                if (onComplete) onComplete()
            })

        tl.timeScale(PRELOADER_TIMESCALE)

        return () => {
            tl.kill()
            revertSplit()
        }
    })

    return (
        <div className='preloader' ref={containerRef}>
            <p className='preloader-tagline h1' ref={taglineRef}>
                {tagline}
            </p>
        </div>
    )
}
