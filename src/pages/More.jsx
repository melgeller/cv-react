import React from 'react'
import { useState } from "react";
import { Music } from "../components"
import { Games } from "../components"
import { HOBBIES } from "../Hobbies/Hobbies"
import './More.scss'

const { music, games } = HOBBIES

function More() {
  const [cambiador, setCambiador] = useState("Music");

  return (
    <>
    <div className='more'>
      <div className='botones'>
        <button onClick={() => setCambiador("Music")}>
          <h1>Music</h1>
        </button>
        <button onClick={() => setCambiador("Games")}>
          <h1>Games</h1>
        </button>
      </div>
    </div>

    {cambiador === "Music" ? (
      <Music music={music}></Music>
    ) : (
      <Games games={games}></Games>
    )}
   </>
  );
}

export default More