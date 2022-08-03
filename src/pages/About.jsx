import React from "react";
import './About.scss'

const About = () => {
  return (
    <div className='todoAbout'>
      <div className='form'>
        <div className='foto'>
          <img src='../../assets/rere.jpg' alt='' />
        </div>
        <div className='textoAbout'>
          <h2>Hi!</h2>
          <h3>My name is Silvia</h3>
          <p>and Mel Geller is my nickname 💙</p>
          <h4>English</h4>
          <p>
            I was born in 1990 in Murcia, Spain. I was always very passionate
            about computers, art and video games. I studied photography at the
            EASD in Murcia in 2011 and since then I have worked in the textile
            world as a seller. I also participate in a gaming podcast called
            Stay/Awake and have streamed on Twitch. I'm a very curious person, I
            like to learn and above all to be able to perform in a creative
            position that allows me to continue growing. 
          </p>
          <h4>Español</h4>
          <p>
            {" "}
            Nací en 1990 en Murcia, España. Siempre fui muy apasionada de los
            ordenadores, el arte y los videojuegos. Estudié fotografía en la
            EASD de Murcia en 2011 y desde entonces me he desempeñado en el
            mundo textil como vendedora. También participo en un podcast de
            videojuegos llamado Stay/Awake y he transmitido en Twitch. Soy una persona
            muy curiosa, me gusta aprender y sobre todo poder desempeñarme en un
            puesto creativo que me permita seguir creciendo. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
