import React from 'react'
import Accordian from './components/Accordian'

const items = [
    {
        title: 'what is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favoraite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

export default () => {
    return (
        <div>
            <Accordian items={items} />
        </div>
    )
}