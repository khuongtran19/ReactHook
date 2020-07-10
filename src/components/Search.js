import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResult] = useState([])
    console.log(results)
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResult(data.query.search)
        }
        if (term) {
            search()
        }
    }, [term])

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
                dkey={result.pageid}>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {result.snippet}
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