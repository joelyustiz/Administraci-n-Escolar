import React from 'react'
import './loader.css'
export default function IsLoading(props) {
    return (
        <div className="IsLoading">
            {props.isLoading&&
                <div className="loader">Loading...</div>
            }
            {!props.isLoading&&
                props.children
            }
        </div>
    )
}
