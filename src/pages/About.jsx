import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className='todoAbout'>
      <div className='form'>
        <div className='foto'>
          <img className="profilePic" src='../../assets/imgport.jpg' alt='' />
        </div>
        <div className='textoAbout'>
          <div className='textoIdiomas'>
            <h2>
              👋🏻 <span id='spin'></span>
            </h2>
          </div>
          <div className='paragraph'>
            <h3>My name is Silvia</h3>
            <p>
              and <span className='melgeller'>Mel Geller</span> is my nickname
            </p>
          </div>
          <div className='paragraph'>
            <p className='icons'>🎂 1990</p>
            <p className='icons'>🌍 Madrid / Murcia</p>
            <p className='icons'>📧 melgeller.foto@gmail.com </p>
          </div>
          <div className='paragraph'>
            <p>
              I was born in 1990 in <span className='melgeller'>Murcia</span>, Spain. I have always been very passionate
              about computers, art and video games. I studied photography at the
              <span className='melgeller'> EASD</span> (escuela de arte y superior de diseño) in Murcia in 2011 and since then I have worked in the textile
              world as a seller. I also participate in a gaming podcast called
              <span className='melgeller'> Stay/Awake</span> and have streamed on Twitch. I'm a very curious person,
              I like to learn and specially to be able to perform in a creative
              position that allows me to continue growing.
            </p>
          </div>

          <div className='paragraph'>
            <p className='icons'>🔧</p>
            <div className="iconos">
            <img src="../../assets/iconos/photoshop.png" alt=""/>
            <img src="../../assets/iconos/lightroom.png" alt=""/>
            <img src="../../assets/iconos/js.png" alt=""/>
            <img src="../../assets/iconos/html.png" alt=""/>
            <img src="../../assets/iconos/css.png" alt=""/>
            <img src="../../assets/iconos/sass.png" alt=""/>
            <img src="../../assets/iconos/mongo.png" alt=""/>
            <img src="../../assets/iconos/react.png" alt=""/>
            <img src="../../assets/iconos/angular.png" alt=""/>
            <img src="../../assets/iconos/node.png" alt=""/>
            <img src="../../assets/iconos/insomnia.png" alt=""/>
            <img src="../../assets/iconos/obs.png" alt=""/>
            <img src="../../assets/iconos/twitch.png" alt=""/>
            <img src="../../assets/iconos/figurama.png" alt=""/>
            <img src="../../assets/iconos/campaign.png" alt=""/>
            <img src="../../assets/iconos/target.jpg" alt=""/>
            <img src="../../assets/iconos/aa.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
