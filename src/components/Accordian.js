import React from 'react'

const Accordian = ({ items }) => {
    const renderedItem = items.map(item => {
        return (
            <div>
                <div className='title active'>
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className='content active'>
                    <p>
                        {item.content}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <h1>{renderedItem}</h1>
    )
}

export default Accordian