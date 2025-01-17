import React from "react"
import { Hero } from "./Hero"
import { About } from "../pages/about"
import { Services } from "./services"
import { Counter } from "../pages/Counter"
import { Portofolio } from "../pages/portofolio"
import { Testimonials } from "../pages/testimonials"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portofolio />
      <Testimonials />
    </>
  )
}

