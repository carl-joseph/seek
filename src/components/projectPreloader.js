import React, { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText, useGSAP)

export const ProjectPreloader = ({ text, onComplete }) => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(
        () => {
            if (!containerRef.current || !titleRef.current || !text) {
                if (onComplete) onComplete()
                return
            }

            const mm = gsap.matchMedia()
            let split = null
            let hasReverted = false
            const revertSplit = () => {
                if (hasReverted) return
                hasReverted = true
                if (split) split.revert()
            }

            mm.add("(min-width: 769px)", () => {
                split = new SplitText(titleRef.current, { type: "words" })
                const words = split.words.map(word => word.textContent).filter(Boolean)
                revertSplit()

                if (!words.length) {
                    if (onComplete) onComplete()
                    return () => {}
                }

                const WORD_DELAY = 0.1
                const WORD_FADE = 0.5
                const wordEls = words.map(word => {
                    const el = document.createElement("span")
                    el.className = "project-preloader-word"
                    el.textContent = word
                    return el
                })

                titleRef.current.textContent = ""
                titleRef.current.classList.add("active")

                const tl = gsap.timeline()

                wordEls.forEach((wordEl, i) => {
                    tl.call(() => {
                        if (!titleRef.current) return
                        if (i !== 0) titleRef.current.append(" ")
                        titleRef.current.append(wordEl)
                    })
                    tl.to(wordEl, { opacity: 1, duration: WORD_FADE, ease: "power1.out", delay: 0.1 }, "<")
                    if (i < wordEls.length - 1) tl.to({}, { duration: WORD_DELAY })
                })

                tl.to(titleRef.current, { opacity: 0, duration: 0.35 }, "+=0.8")
                    .to(containerRef.current, { opacity: 0, duration: 0.55 })
                    .call(() => {
                        titleRef.current.classList.remove("active")
                        if (onComplete) onComplete()
                    })

                return () => {
                    tl.kill()
                    gsap.killTweensOf(wordEls)
                    titleRef.current.classList.remove("active")
                    titleRef.current.textContent = text
                }
            })

            mm.add("(max-width: 768px)", () => {
                const tl = gsap
                    .timeline()
                    .to(titleRef.current, { opacity: 1, duration: 0.4 })
                    .to(titleRef.current, { opacity: 0, duration: 0.3 }, "+=0.9")
                    .to(containerRef.current, { opacity: 0, duration: 0.55 })
                    .call(() => {
                        if (onComplete) onComplete()
                    })

                return () => {
                    tl.kill()
                }
            })

            return () => {
                mm.revert()
                revertSplit()
            }
        },
        { scope: containerRef, dependencies: [text] }
    )

    if (!text) return null

    return (
        <div className='project-preloader' ref={containerRef}>
            <h1 className='project-preloader-title h1 text-center' ref={titleRef}>
                {text}
            </h1>
        </div>
    )
}
