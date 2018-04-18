'use strict'

import React from 'react'
import './redes.css'

import FacebookIcon from '../../icons/components/facebook2'
import TwitterIcon from '../../icons/components/twitter'
import MailIcon from '../../icons/components/mail2'
export default function Redes(props) {
    return (
        <div className="Redes">
            <FacebookIcon size={30} color="white"/>
            <TwitterIcon size={30} color="white"/>
            <MailIcon size={30} color="white"/>
        </div>
    )
}