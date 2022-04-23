import React, { useState } from "react"
import styled from 'styled-components'
import media from '../../styles/media'
import Modal from 'react-modal';

import HoverVideoPlayer from 'react-hover-video-player'

import Vid1 from '../../images/team/andrew.mp4'
import Thumb1 from '../../images/team/andrew.png'
import Li from '../../images/social/footerli.svg'
import { Reveal, Tween } from "react-gsap";
import { useAllPrismicDocumentsByType } from '@prismicio/react'



const TeamCon = styled.div`
    .teammembers {
        padding: 50px 5vw 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5vw;
        row-gap: 5vw;

        .videoteam {
            width: 42.5vw;
            height: 42.5vw;
            video {
                width: 42.5vw;
                height: 42.5vw;
            }
        }

        .teaminfo {
            .name {
                font-size: 18px;
                line-height: 22px;
                color: var(--dark-red);
                margin: 10px 0 0px;
            }
            .title {
                font-size: 14px;
                line-height: 17px;
                margin: 0;
            }
        }
    }

    .smallHeadUpper {
        margin: 0px 5vw 0;
    }

    h2 {
        color: var(--dark-red);
        font-weight: normal;
        font-size: 36px;
        line-height: 43px;
        margin: 0px 5vw 0;
    }

  ${media.laptop`

    .teammembers {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2vw;
        row-gap: 2vw;
        padding: 50px 8vw 200px;

        .teamMember {
            cursor: pointer;
        }

        .videoteam {
            width: 15vw;
            height: 15vw;
            video {
                height: 15vw;
                width: 15vw;
            }
        }

        .teaminfo {
            .name {
                font-size: 20px;
                line-height: 30px;
                color: var(--dark-red);
                margin: 10px 0 0px;
            }
            .title {
                font-size: 18px;
                line-height: 20px;
                margin: 0;
            }
        }
    }

    h2 {
        color: var(--dark-red);
        font-weight: normal;
        font-size: 48px;
        line-height: 74px;
        margin: 0 8vw 0;
    }

    .smallHeadUpper {
        margin: 100px 8vw 0;
    }
  `}
`

function Team() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectTeamMember, setSelectedTeamMember] = useState()
    const [teamMembers] = useAllPrismicDocumentsByType('team_member')

    const openLink = (link) => {
        window.open(link, "_blank")
    }

    console.log(teamMembers)

    return (
        <>
            <Modal
                isOpen={isOpen}
                contentLabel="Team Member Modal"
            >
                <button onClick={() => setIsOpen(!isOpen)} className="exitModal">&times;</button>
                <div className={`innerModal ${selectTeamMember?.color}`}>
                    <div className="left">
                        <div className="teamImage">
                            <img src={selectTeamMember?.thumbnail} />
                        </div>
                        <div className="info">
                            <p className="modalName">{selectTeamMember?.name}</p>
                            <p className="modalTitle">{selectTeamMember?.title}</p>
                            <button><img src={Li} className="liModal" /></button>
                        </div>
                        <div className="teamButtons">
                            <button onClick={() => openLink(selectTeamMember?.links?.calendly)}>Schedule a Meet</button>
                            <button onClick={() => openLink(selectTeamMember?.links?.linkedin)}>Linkedin</button>
                        </div>
                    </div>
                    <div className="right">
                        <p className="modalName">{selectTeamMember?.name}</p>
                        <p className="modalTitle">{selectTeamMember?.title}</p>
                        <p className="modalBio">{selectTeamMember?.bio}</p>
                        <p className="question">Question 1</p>
                        <p className="answer">{selectTeamMember?.answer1}</p>
                        <p className="question">Question 2</p>
                        <p className="answer">{selectTeamMember?.answer2}</p>
                        <p className="question">Question 3</p>
                        <p className="answer">{selectTeamMember?.answer3}</p>
                    </div>
                </div>
            </Modal>
            <TeamCon>
                <p className="smallHeadUpper">Team</p>
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}><h2>Meet the Catalysts</h2></Tween></Reveal>
                <div className="teammembers">
                    {teamMembers?.map((member) => {
                        const { id, data } = member
                        const { colour, bio, full_name, role, image, question_1, question_2, question_3, video, linkedin_link, calendly_link } = data

                        return (
                            <div key={id} className="teamMember" onClick={() => {
                                setSelectedTeamMember({
                                    name: full_name?.[0]?.text,
                                    title: role?.[0]?.tex,
                                    thumbnail: image?.url,
                                    bio: bio?.[0]?.text,
                                    answer1: question_1?.[0]?.text,
                                    answer2: question_2?.[0]?.text,
                                    answer3: question_3?.[0]?.text,
                                    color: String(colour).toLowerCase(),
                                    links: {
                                        linkedin: linkedin_link?.url,
                                        calendly: calendly_link?.url
                                    }
                                })
                                setIsOpen(!isOpen)
                            }}>
                                {
                                    video?.url ? (<HoverVideoPlayer
                                        className="videoteam"
                                        videoSrc={Vid1}
                                        pausedOverlay={
                                            <img
                                                src={image?.url}
                                                alt=""
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        }
                                        loadingOverlay={
                                            <div className="loading-overlay">
                                                <div className="loading-spinner" />
                                            </div>
                                        }
                                    />) :
                                        <div className="videoteam">
                                            <img
                                                src={image?.url}
                                                alt=""
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                }

                                <div className="teaminfo">
                                    <Reveal>
                                        <Tween from={{ opacity: '0' }} duration={.5}>
                                            <p className="name">{full_name?.[0].text}</p>
                                            <p className="title">{role?.[0].text}</p>
                                        </Tween>
                                    </Reveal>
                                </div>
                            </div>)
                    })}
                </div>
            </TeamCon>
        </>
    );
}
export default Team;