import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const ProjectPreloader = ({ text, onComplete }) => {
  const containerRef = useRef(null)
  const wordsRef = useRef([])

  const words = text.split(" ")

  useGSAP(() => {
    gsap.set(wordsRef.current, { opacity: 0 })

    const tl = gsap.timeline({ onComplete })

    tl.to(wordsRef.current, { opacity: 1, duration: 0.4, stagger: 0.4, ease: "power2.out"})
    tl.to({}, { duration: 0.3 })
    tl.to(containerRef.current, { opacity: 0, duration: 0.6, ease: "power2.inOut",})
  }, [])

  return (
    <div className='project-preloader' ref={containerRef}>
      <p className='project-preloader-title h1 text-center flex flex-wrap gap-10 m-gap-5 align-center justify-center'>
        {words.map((word, i) => (
          <span key={i} ref={el => (wordsRef.current[i] = el)}>
            {word}
          </span>
        ))}
      </p>
    </div>
  )
}
