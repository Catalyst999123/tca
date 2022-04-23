import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import About from './About'
import Services from './Services'
import Work from './Work'
import Blog from './Blog'
import Contact from "./Contact"
import Post from './Post'
import CaseStudy from './CaseStudy'

function Container({ location }) {

  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 700, exit: 700 }}
          classNames="fade"
        >
          <>
          <div className="overlay"></div>
          <section className="route-section">
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" exact component={Work} />
              <Route path="/work/:slug" component={CaseStudy} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/blog/:slug" component={Post} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </section>
          </>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: yellow;
  z-index: 999;
  width: 100vw;
  height: 100vh;
}



  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 1000ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Container);
