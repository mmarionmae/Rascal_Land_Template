import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import React from 'react'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components'
import Vector from '../Icons/Vector';

const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    width: 100%;
    height: 100%;
}

`



const DrawSvg = () => {
   const ref  = useRef(null);

   gsap.registerPlugin(ScrollTrigger);
   useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];
     const length = svg.getTotalLength();
    
     console.log(length);
    
     //start positioning of svg drawing

     svg.style.strokeDasharray = length;

     //hide svg before scrolling start
     svg.style.strokDashoffset = length;

    let t1 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"top center",
            end: "bottom bottom",
            onUpdate: (self) => {
                const draw = length * self.progress;

                //also reverse the drawing when scroll goes up
                svg.style.strokDashoffset = length - draw;
            }

        }
    })

    return () => {
        
    };
    
   }, [])

    return (
        <VectorContainer ref={ref}> 
        <Vector/> 
        </VectorContainer>
    ) 
}

export default DrawSvg