import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Accordion from 'react-bootstrap/Accordion'

export default function Component2() {
    return (

        <Spring
        from={{ opacity: 0 }}
        to={{opacity: 1 }}
        config={{ delay: 1000, duration: 1000}}
        >
        { props => (
            <div style={props}>
            <div>
            <h1>Component 2</h1>
            <p> bla bla bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla </p>
            <button>Test</button>
            </div>
            </div>
        )}
    </Spring>

    )
}


