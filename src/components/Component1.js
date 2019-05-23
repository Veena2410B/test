import React from 'react'
import { Spring } from 'react-spring/renderprops'
import {Transition, animate} from "react-spring"



export default function Component1() {
    return (


        <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{opacity: 1, marginTop: 0 }}
        >
        { props => (
            <div style={props}>
            <div>
            <h1>Component 1</h1>
            <p> bla bla bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla </p>
            
            </div>
            </div>
        )}
    </Spring>


    )
}