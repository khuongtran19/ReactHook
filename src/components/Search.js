import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResult] = useState([])

    // Reason we use 2 useEffect is because it minimize the error in the future when there are multiple term
    // when use 1 useEffect with 2 term at same time the useEffect function will run twice when each term change which may create multiple axios call.
    // to minimize the call we can use 2 different useEffect.
    useEffect(() => { // <- this run first anytime term change
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000) // queue up the change after 1 milisecond time out
        return () => {
            clearTimeout(timerId) // if the user change term the timeout will reset
        }
    }, [term]) // <- this first term

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResult(data.query.search)
        }
        search();
    }, [debouncedTerm]) // <- this second term which will store after 1 milisecond

    // Alt way to use with .then
    // useEffect(() => {
    //     axios
    //         .get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         })
    //         .then(res => {
    //             if (term) {
    //                 setResult(res.data.query.search)
    //             }
    //         })
    // }, [term])

    const renderedResult = results.map(result => {
        return (
            <div
                className='item'
                key={result.pageid}>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResult}
            </div>
        </div>
    )
}

export default Search