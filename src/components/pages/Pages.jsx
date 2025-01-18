import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./about";
import { Services } from "../home/services";
import { Portofolio } from "./portofolio";
import { Testimonials } from "./testimonials";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Footer } from "../common/footer";


export const Pages = () => {
  return (
    <>
      <Header />  
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/portofolio' component={Portofolio} />
        <Route exact path='/testimonials' component={Testimonials} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer /> 
    </>
  );
};
