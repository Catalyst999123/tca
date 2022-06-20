import React, { useState, useRef } from 'react';
import { useForm, useFormState } from "react-hook-form"
import { gsap } from 'gsap/all';

import styled from 'styled-components'
import media from '../../styles/media';
import { mailer } from '../../utils/mailer';


const FormDiv = styled.form`
    width: 100%;

    .sendDiv {
        display: flex;
        align-items: center;
    }

    input {
        width: 90%;
        height: 30px;
        border: none;
        background: transparent;
        border-bottom: 2px solid var(--dark-blue);
        display: flex;
        margin: 0 0 30px;
        font-size: 24px;
        line-height: 30px;
        color: var(--dark-blue);

        &::placeholder {
            color: var(--dark-blue);
        }

        &[type=submit] {
            border-bottom: none;
            margin: 20px 0;
            font-size: 22px;
            line-height: 22px;
            margin-right: 22px;
            width: fit-content;
        }
    }

    .explore {
        margin-top: -10px;
        width: fit-content;
        .exploreText {
        padding-left: 0px;
        margin: 0;
        font-size: 20px;
        line-height: 20px;
            color: var(--dark-blue);
        }

        .circ {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content:center;
        transition: all .3s linear;
        background: transparent;
        border: 2px solid var(--dark-blue);
        width: 116px;
        height: 116px;
        }

        /* &:hover {
        .circ {
            background: var(--light-green);
        }
        } */
    }

    .brandmark {
        height: 250px;
        position: absolute;
        bottom: -35%;
        right: 0;
    }

    .magnetic-button {
        border: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
        position: relative;
        z-index: 1;
        touch-action: none;
        
        span {
        display: inline-block;
        }
        
        &--hover {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        }
    }

    .button-1 {
        padding: 40px;
        font-size: 40px;
        margin-left: -20px;
        color: white;
    }

    .success {
        font-size: 14px;
        line-height: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;
        text-transform: uppercase;
    }

    .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 1em 0em;
    width: 95%;
    vertical-align: top;
     /*    margin: .5em 1em;
    width: calc(40vw - 14px); */
   /*  padding: 0 0 0 14px; */
   padding: 10px;

    input {
        margin: 0;
        padding: 0;
    }
}

.input__field {
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    border: none;
    border-radius: 0;
    background: #f0f0f0;
    color: var(--dark-blue);
}

.input__field:focus {
    outline: none;
}

.input__label {
    display: inline-block;
    float: right;
    color: var(--dark-blue);
    font-size: 70.25%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 30px;
    line-height: 30px;
}

.input__label-content {
    position: relative;
    display: block;
    padding: 0;
    width: 100%;
}

.input__field--jiro {
    padding: 0.85em 0em;
    width: 100%;
    background: transparent;
    color: var(--light-blue);
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
}

.input__label--jiro {
    position: absolute;
    left: 0;
    padding: 0 0em;
    width: 100%;
    height: 100%;
    text-align: left;
    pointer-events: none;
}

.input__label-content--jiro {
    -webkit-transition: -webkit-transform 0.3s 0.3s;
    transition: transform 0.3s 0.3s;
}

.input__label--jiro::before,
.input__label--jiro::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
}

.input__label--jiro::before {
    border-top: 2px solid var(--dark-blue);
    -webkit-transform: translate3d(0, 100%, 0) translate3d(0, -2px, 0);
    transform: translate3d(0, 100%, 0) translate3d(0, -2px, 0);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}

.input__label--jiro::after {
    z-index: -1;
    background: var(--dark-blue);
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
}

.input__field--jiro:focus,
.input--filled .input__field--jiro {
    opacity: 1;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}

.input__field--jiro:focus + .input__label--jiro .input__label-content--jiro,
.input--filled .input__label-content--jiro {
    -webkit-transform: translate3d(0, -80%, 0);
    transform: translate3d(0, -80%, 0);
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.input__field--jiro:focus + .input__label--jiro::before,
.input--filled .input__label--jiro::before {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}

.input__field--jiro:focus + .input__label--jiro::before,
.input--filled .input__label--jiro::before {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.input__field--jiro:focus + .input__label--jiro::after,
.input--filled .input__label--jiro::after {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.input__field--jiro + .input__label--jiro .input__label-content--jiro {
    margin-top: 20px;
}
.input__field--jiro:focus + .input__label--jiro .input__label-content--jiro {
    margin-top: -6px;
    font-size: 18px;
}

.input--filled {
.input__field--jiro + .input__label--jiro .input__label-content--jiro {
    margin-top: -6px;
    font-size: 18px;
}
}

.formErr {
  color: var(--dark-red);
  font-size: 12px;
    text-transform: uppercase;
}

    ${media.laptop`
        width: 40vw;

        .input {
    margin: .5em 1em;
    width: calc(40vw - 14px);
    padding: 0 0 0 14px;

    input {
        margin: 0;
        padding: 0;
    }
}

 .formErr {
 margin-left: 30px;
 font-size: 18px;
 
}
        .success {
            font-size: 16px;
            line-height: 28px;
        }

        .sendDiv {
            display: flex;
            align-items: center;
        }

        input {
            width: 100%;
            height: 70px;
            border: none;
            background: transparent;
            border-bottom: 2px solid var(--dark-blue);
            display: flex;
            margin: 0 0 30px;
            font-size: 30px;
            line-height: 30px;
            color: var(--dark-blue);

            &::placeholder {
                color: var(--dark-blue);
            }

            &[type=submit] {
                border-bottom: none;
                margin: 20px 0;
                font-size: 40px;
                line-height: 30px;
                margin-right: 30px;
                width: fit-content;
                margin-left: 30px;
            }
        }

        .circ {
            border-radius: 50%;
            transition: all .3s linear;
            background: transparent;
            border: 2px solid var(--dark-blue);
            width: 40px;
            height: 40px;
        }

        &:hover {
            .circ {
            background: var(--dark-blue);
            }
        }

        .magnetic-button {
            border: none;
            padding: 0;
            background: transparent;
            cursor: pointer;
            position: relative;
            z-index: 1;
            touch-action: none;
            
            span {
                display: inline-block;
            }
            
            &--hover {
                content: "";
                position: absolute;
                z-index: -1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        } 

        .button-1 {
            padding: 40px;
            font-size: 40px;
            margin-left: -20px;
            color: var(--light-green);
        }



    .explore {
      margin-top: -10px;
      width: fit-content;
      .exploreText {
        transition: all .3s linear;
        padding-left: 0px;
        margin: 0;
        font-size: 20px;
        line-height: 20px;
        color: var(--dark-blue);
        z-index: 3;
      }

      .circ {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content:center;
        transition: all .3s linear;
        background: transparent;
        border: 2px solid var(--dark-blue);
        width: 116px;
        height: 116px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--dark-blue);
          transition: .5s;
          border-radius: 45%;
        }
      }

      &:hover {
        .circ {
         &:before {
          top: 0;
        }
          width: 126px;
          height: 126px;
        }

        .exploreText {
            color: white;
            font-size: 16px;
            line-height: 16px;
        }
      }
    }
    `}
`


const PressForm = () => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();

    const { dirtyFields } = useFormState({
        control
    });

    const [buttonText, setButtonText] = useState('Send')

    const formSubmit = async ({ name, message, email, contact, agency }) => {

        setButtonText('Sending...')

        await mailer(
            'NEW PRESS MAIL',
            `
Hi there, you have a new email from ${name}.

Their message: ${message}

Contact details
${email}
${contact}
${agency}
`.trim(),
        )


        setTimeout(() => {
            document.getElementById("press-form").reset();
            setButtonText('Sent')
        }, 3000);

        setTimeout(() => {
            setButtonText('Send')
        }, 6000);

    }

    const MagneticButton = ({
        children,
        className,
        speed = 1,
        tollerance = 0.8,
        scale = 1.2,
        debug = false,
        borderRadius = 0,
        ...props
    }) => {
        const $root = useRef()
        const $item = useRef()
        const $hover = useRef()
        const rootBound = useRef()
        const itemBound = useRef()
        const diffBound = useRef({ x: 0, y: 0 })

        const handleMouseEnter = () => {
            gsap.killTweensOf($item.current)
            gsap.set($hover.current, {
                scale: scale,
                borderRadius,
                background: debug ? 'rgba(0, 125, 255, .4)' : 'transparent',
            })

            rootBound.current = $root.current.getBoundingClientRect()
            itemBound.current = $item.current.getBoundingClientRect()
            diffBound.current.x = (rootBound.current.width * scale - rootBound.current.width) / 2
            diffBound.current.y = (rootBound.current.height * scale - rootBound.current.height) / 2
        }

        const handleMouseLeave = () => {
            gsap.killTweensOf($item.current)
            gsap.to($item.current, {
                x: 0,
                y: 0,
                ease: 'elastic.out(1.1, .4)',
                duration: 1.2
            })
            gsap.set($hover.current, {
                scale: 1
            })
        }

        const handleMouseMove = (e) => {
            const x = e.clientX || e.touches[0].clientX
            const y = e.clientY || e.touches[0].clientY

            const maxX = (rootBound.current.width - itemBound.current.width) / 2 * tollerance
            const maxY = (rootBound.current.height - itemBound.current.height) / 2 * tollerance

            const newX = gsap.utils.mapRange(
                0,
                rootBound.current.width * scale,
                -maxX,
                maxX,
                x - rootBound.current.x + diffBound.current.x
            )

            const newY = gsap.utils.mapRange(
                0,
                rootBound.current.height * scale,
                -maxY,
                maxY,
                y - rootBound.current.y + diffBound.current.y
            )

            gsap.killTweensOf($item.current)
            gsap.to($item.current, {
                x: newX,
                y: newY,
                ease: 'power3.out',
                duration: speed
            })
        }

        return (
            <button
                ref={$root}
                className={`magnetic-button ${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
                onTouchStart={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleMouseLeave}
                {...props}
            >
                <span
                    ref={$item}
                    className="magnetic-button--item"
                >
                    {children}
                </span>
                <span
                    ref={$hover}
                    className="magnetic-button--hover"
                />
            </button>
        )
    }

    return (
        <FormDiv className="PressformBottom" onSubmit={handleSubmit(formSubmit)} id="press-form">
            {/* <div> */}

            <input type="hidden" name="form-name" value="press" />

            <span class={dirtyFields.name ? 'input input--jiro input--filled' : 'input input--jiro'}>
                {/* <input class="input__field input__field--jiro" type="text" /> */}
                <input autoComplete={false} type="text" {...register("name", { required: true })} className={errors.name ? 'input__field input__field--jiro labelErr' : 'input__field input__field--jiro'} />
                <label class="input__label input__label--jiro" for="input-10">
                    <span class="input__label-content input__label-content--jiro">Name</span>
                </label>
            </span>
            {errors.name && <span className="formErr">This field is required.</span>}

            <span class={dirtyFields.email ? 'input input--jiro input--filled' : 'input input--jiro'}>
                {/* <input class="input__field input__field--jiro" type="text" /> */}
                <input type="email" placeholder="Email" {...register("email", { required: true, pattern: { value: /\S+@\S+\.\S+/, message: "Please enter a valid email address." } })} className={errors.email ? 'input__field input__field--jiro labelErr' : 'input__field input__field--jiro'} />
                <label class="input__label input__label--jiro" for="input-10">
                    <span class="input__label-content input__label-content--jiro">Email</span>
                </label>
            </span>{errors.email && <span className="formErr">{errors.email.message}</span>}
            {errors.email && errors.email.type === "required" && <span className="formErr">This field is required.</span>}

            <span class={dirtyFields.contact ? 'input input--jiro input--filled' : 'input input--jiro'}>
                {/* <input class="input__field input__field--jiro" type="text" /> */}
                <input type="text" placeholder="Phone" {...register("contact", { required: true })} className={errors.contact ? 'input__field input__field--jiro labelErr' : 'input__field input__field--jiro'} />
                <label class="input__label input__label--jiro" for="input-10">
                    <span class="input__label-content input__label-content--jiro">Contact</span>
                </label>
            </span>
            {errors.contact && <span className="formErr">This field is required.</span>}

            <span class={dirtyFields.agency ? 'input input--jiro input--filled' : 'input input--jiro'}>
                {/* <input class="input__field input__field--jiro" type="text" /> */}
                <input type="text" placeholder="Agency" {...register("agency", { required: false })} className={errors.agency ? 'input__field input__field--jiro labelErr' : 'input__field input__field--jiro'} />
                <label class="input__label input__label--jiro" for="input-10">
                    <span class="input__label-content input__label-content--jiro">Agency</span>
                </label>
            </span>
            {errors.agency && <span className="formErr">This field is required.</span>}

            <span class={dirtyFields.message ? 'input input--jiro input--filled' : 'input input--jiro'}>
                {/* <input class="input__field input__field--jiro" type="text" /> */}
                <input type="text" placeholder="Message" {...register("message", { required: true })} className={errors.message ? 'input__field input__field--jiro labelErr' : 'input__field input__field--jiro'} />
                <label class="input__label input__label--jiro" for="input-10">
                    <span class="input__label-content input__label-content--jiro">Message</span>
                </label>
            </span>

            {errors.message && <span className="formErr">This field is required.</span>}

            <div className="sendDiv">
                <div className="explore">
                    <MagneticButton
                        className="button-1"
                        scale={1.5}
                        tollerance={.8}
                        speed={0.5}
                        borderRadius='30px'
                    >
                        <div className="circ">
                            <input type="submit" className="exploreText" value={buttonText} />
                            {/* Explore
                    </p> */}
                        </div>
                    </MagneticButton>
                </div>
                {buttonText === 'Sent' && (
                    <p className="success">Thank you for your message, we will be in touch shortly.</p>
                )}
            </div>
        </FormDiv>
    );
};


export default PressForm;