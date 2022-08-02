import React from 'react'
import { useState } from "react";
import { Music } from "../components"
import { Games } from "../components"
import { HOBBIES } from "../Hobbies/Hobbies"
import { Description } from "../components"
import './More.scss'

const { music, games, description } = HOBBIES

function More() {
  const [cambiador, setCambiador] = useState("Description");

  return (
    <>
    <div className='more'>

      <div className='botones'>
      <button className="botoninvisible" onClick={() => setCambiador("Description")}>
        </button>
        <button className="btn draw-border" onClick={() => setCambiador("Music")}>
          <h1>Music</h1>
        </button>
        <button className="btn draw-border" onClick={() => setCambiador("Games")}>
          <h1>Games</h1>
        </button>
      </div>
    </div>

    {cambiador === "Music" ? (
      <Music music={music}></Music>
    ) : cambiador === "Games" ? (
      <Games games={games}></Games>
    ) : ( <Description description={description}></Description> )
    }
   </>
  );
}

export default More