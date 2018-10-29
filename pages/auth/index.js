import React from 'react'
import Link from 'next/link'
import User from '../../components/user'

const authIndexPage = (props) => {
    return (
        <div>
            <h1>The Auth Index Page</h1>
            <User name="somename" age={28} />
            <p>Go to <Link href="/"><a>Home</a></Link></p>
        </div>
    )
}

export default authIndexPage