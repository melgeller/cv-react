import React from 'react'
import './Music.scss'


const Music = ({ music }) => {
  return (
    <div className='paquete'>
    <div className='carta'>
        <img src={music.unouno} alt="1"/>
        <img src={music.unodos} alt="2"/>
        <img src={music.unotres} alt="3"/>
        <img src={music.unocuatro} alt="4"/>
        <img src={music.unocinco} alt="5"/>
        <img src={music.dosuno} alt="6"/>
        <img src={music.dosdos} alt="7"/>
        <img src={music.dostres} alt="8"/>
        <img src={music.doscuatro} alt="9"/>
        <img src={music.doscinco} alt="10"/>
    </div>

    </div>
  )
}

export default Music