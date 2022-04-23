import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import styled from 'styled-components'
import media from '../../styles/media'
import { Reveal, Tween } from "react-gsap";

const ServicesCon = styled.div`
    .services {
        padding: 80px 5vw 100px;
    }

    h2 {
        color: var(--dark-red);
        font-weight: normal;
        font-size: 36px;
        line-height: 43px;
        margin: 20px 5vw 0;
    }
    .smallHeadUpper {
        margin: 50px 5vw 0;
    }

    .service {
        display: flex;
        margin: 0 0 30px;

        p {
            margin: 0;
        }

        .number {
            color: var(--light-red);
            margin-right: 20px;
            margin-top: 10px;
            font-size: 12px;
            line-height: 14px;
        }

        .text {
            .heading {
                color: var(--dark-red);
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 10px;
            }
            .body {
                font-size: 18px;
                line-height: 22px;
            }
        }
    }

  ${media.laptop`

    .services {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 5vw;
        row-gap: 80px;
        padding: 50px 16vw 150px 16vw;
    }

    h2 {
        color: var(--dark-red);
        font-weight: normal;
        font-size:48px;
        line-height: 74px;
        margin: 0 16vw 0;
    }

    .smallHeadUpper {
        margin: 150px 16vw 0;
    }

    .service {
        display: flex;

        p {
            margin: 0;
        }

        .number {
            color: var(--light-red);
            margin-right: 20px;
            margin-top: 5px;
            font-size: 18px;
            line-height: 24px;
            font-weight: bold;
        }

        .text {
            &.wider {
                width: 245px;
            }
            .heading {
                color: var(--dark-red);
                font-size: 30px;
                line-height: 30px;
                height: 80px;
                margin-bottom: 0;
            }
            .body {
                font-size: 25px;
                line-height: 35px;
            }
        }
    }
    
  `}
`

function Services() {

  return (
    <ServicesCon>
        <p className="smallHeadUpper">Services</p>
        <Reveal><Tween from={{ opacity: '0' }} duration={.5}><h2>What we do</h2></Tween></Reveal>
        <div className="services">
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>01</p></div>
                </Tween>
                </Reveal>
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Above the Line campaigns</p>
                    <p className="body">From radio ads to television commercials, we can take your marketing above the line.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>02</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Content Creation</p>
                    <p className="body">From words to pictures and videos, we don’t just do content creation. We understand content creation.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>03</p></div>
                </Tween>
                </Reveal>
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    
                    <div className="text">
                    <p className="heading">Creative Concept and Design</p>
                    <p className="body">We have the solutions to all of your creative concept and design concerns.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>04</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Customer Nurturing</p>
                    <p className="body">The start of connecting you with your customers.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>05</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Digital and Social</p>
                    <p className="body">From strategy to implementation, we know the digital and social landscape well.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>06</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Events and Activations</p>
                    <p className="body">Whether you need to launch a new product or celebrate a big win, we’re your partner in epic events and activations.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>07</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Integrated Marketing</p>
                    <p className="body">A combination of all of the above to tap into a particular challenge.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>08</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Loyalty and Incentive Programs</p>
                    <p className="body">If the solution is a loyalty or incentive program, we’ll set it up.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>09</p></div>
                </Tween>
                </Reveal>
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                        <p className="heading">Marketing Automation</p>
                        <p className="body">Taking away mundane tasks by automating them, while making your business more efficient in the process.</p>
                    </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>10</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text wider">
                    <p className="heading">Mobile and Whatsapp Business</p>
                    <p className="body">Using mobile devices to connect to customers.</p>
                </div>
                </Tween></Reveal>
            </div>
            <div className="service">
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="number"><p>11</p></div>
                </Tween>
                </Reveal>
                
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                    <div className="text">
                    <p className="heading">Strategy</p>
                    <p className="body">All significant marketing efforts start with a robust design. We bring our years of experience to the table, guiding the direction of a results-driven campaign.</p>
                </div>
                </Tween></Reveal>
            </div>
        </div>
    </ServicesCon>
  );
}
export default Services;