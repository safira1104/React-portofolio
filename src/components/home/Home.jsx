import React from "react"
import { Hero } from "./Hero"
import { About } from "../pages/about"
import { Services } from "./services"
import { Counter } from "../pages/Counter"
import { Portofolio } from "../pages/portofolio"
import { Testimonials } from "../pages/testimonials"
import { Blog } from "../pages/blog"
import { Contact } from "../pages/contact"
import { Footer } from "../common/footer"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portofolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  )
}

