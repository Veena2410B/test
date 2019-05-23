import React from 'react'
import {Transition} from 'react-spring/renderprops'
import { Spring } from 'react-spring/renderprops'



export default function Component3(){
    return(
        <Spring
        from={{ opacity: 0 }}
        to={{opacity: 1 }}
        config={{ delay: 1000, duration: 1000}}
        >
        { props => (
            <div style={props}>
            <div>
            <h1>Component 3</h1>
            <p> bla bla bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla </p>
            </div>
            </div>
        )}
    </Spring>
    
    )
}