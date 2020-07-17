import React from 'react'

const Link = ({ className, href, children }) => {
    const onClick = e => {
        if (e.metaKey || e.ctrlKey) {
            // hold control on window or command on mac then click on any tab will open new window tab
            return;
        }
        e.preventDefault();
        window.history.pushState({}, '', href)
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <a
            className={className}
            href={href}
            onClick={onClick}>
            {children}
        </a>
    )
}

export default Link