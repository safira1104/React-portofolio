import React from "react"
import { Hero } from "./Hero"
import { About } from "../pages/about"
import { Services } from "./services"
import { Counter } from "../pages/Counter"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
    </>
  )
}

