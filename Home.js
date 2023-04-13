import React from 'react'
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className='container'>
            <h1 className='title'>Hello World</h1>
            <button>
                <Link to="/password">password</Link>
            </button>
            <button>
                <Link to="/upload">Title</Link>
            </button>
        </div>
    )
}
