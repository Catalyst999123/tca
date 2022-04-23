import './App.css';
import './styles/themes.css';
import React, { useEffect, useState } from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Blog from './components/Blog'
import Contact from "./components/Contact"
import Header from "./components/header"
import Post from './components/Post'
import CaseStudy from './components/CaseStudy'
import Loader from './components/loader';
import Background from './components/background';
import Page404 from './components/page404';
import Privacy from './components/Privacy';
import Footer from './components/footer';

import { prismicClient } from './components/client'
import * as Prismic from '@prismicio/client'
import { PrismicProvider } from '@prismicio/react'


import { client as PClient } from './prismic'


function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'casestudy')
      )
      if (response) {
        localStorage.setItem('casestudyNo', response.results.length)
        console.log(response.results);
        localStorage.setItem('caseStudies', JSON.stringify(response.results))
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'blogpost')
      )
      if (response) {
        localStorage.setItem('blogNo', response.results.length)
        console.log(response.results);
        localStorage.setItem('blogs', JSON.stringify(response.results))
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    document.body.scrollTop = 0;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    setTimeout(function () {
      setIsLoaded(true)
    }, 10000)
  })

  return (
    <PrismicProvider client={PClient}>
      <Router>
        <ParallaxProvider>
          <Loader loaded={isLoaded} />
          <Header />
          <Background />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/work/:slug" component={CaseStudy} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:slug" component={Post} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="*" component={Page404} />
          </Switch>
          <Footer />
        </ParallaxProvider>
      </Router>
    </PrismicProvider>
  );
}

export default App;
