import React from 'react'


const Games = ({ games }) => {
  return (
    <div className='paquete'>
    <div className='carta'>
        <img src={games.unouno} alt="1"/>
        <img src={games.unodos} alt="2"/>
        <img src={games.unotres} alt="3"/>
        <img src={games.unocuatro} alt="4"/>
        <img src={games.unocinco} alt="5"/>
        <img src={games.dosuno} alt="6"/>
        <img src={games.dosdos} alt="7"/>
        <img src={games.dostres} alt="8"/>
        <img src={games.doscuatro} alt="9"/>
        <img src={games.doscinco} alt="10"/>
    </div>

    </div>
  )
}

export default Games