import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import f_perfil from './images/f_perfil.jpg'
import slipknot from './images/slipknot.jpg'
import gears from './images/gears.jpg'
import anabelle from './images/anabelle.jpg'
import avenged from './images/avenged.jpg'
import f_trofeo from './images/f_trofeo.jpg'
import Hobbies from './components/Hobbies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFutbol,faMusic,faDrum, faGamepad, faFilm } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div className= 'container d-flex align-center justify-content-center bg-info'>
      <div className= 'row'>
        <div className= 'col-12 col-lg-9' p-2>
          <article className='card bg-success h-100'>
          <h1 className= 'd-flex align-center justify-content-center' color='white' >
          <img src={slipknot} width="50" height="50" class="border border-secondary border-3 rounded-circle"/>
            Acerca de mi</h1>
            <div className='card-body bg-secondary' p-3>
              <div className='d-flex '>
                <p>Mi nombre es <b>Cruz David Sánchez Barba</b>, tengo 27 años de edad, vivo en la ciudad de león Guanajuato,  vivo con mis padres, soy soltero y quisiera compartir algunos de mis gustos y hobbies.
                Algunos de los hobbies que estare compartiendo son: 
                <li>Gustos Musicales <FontAwesomeIcon icon={faMusic} color="red" /> <FontAwesomeIcon icon={faDrum}/></li>
                <li>Peliculas <FontAwesomeIcon icon={faFilm} /></li>
                <li>Videojuegos <FontAwesomeIcon icon={faGamepad} color="white" /></li>
                <li> Deportes <FontAwesomeIcon icon={faFutbol}/></li>    
                </p>
                
              </div>
            </div>

          </article>
        </div>
        <div className= 'col-12 col-lg-3' p-3>
          <article className='card bg-info h-100'>
            <div className='card-body bg-secondary'>
              <div className='d-flex '>
              <img src={f_perfil} className="img-fluid"/>
              </div>
            </div>

          </article>
        </div>

        <div className= ' col-12 col-lg-3' p-3>
            <article className='card bg-info h-100'>
                <div className='card-body bg-danger' p-3>
                    <div className='d-flex'>
                    <img src={gears} width="75" height="75" class="border border-secondary border-3 rounded-circle" />
                     <p>Los videojuegos son algo que me gusta desde muy pequeño y es algo que disfruto jugar mas con amigos,
                       pero no todo tipo de juegos, los juegos que mas me gustan jugar son:
                       <li><b>Gears of War</b></li>
                       <li><b>Mortal Kombat</b></li>
                       <li><b>Nier Automata</b></li>
                       <li><b>Resident Evil</b></li>
                       <li><b>Halo</b></li>
                     </p>
                    </div>
                </div>
            </article>
          </div> 

          <div className= ' col-12 col-lg-3' p-3>
            <article className='card bg-info h-100'>
                <div className='card-body bg-secondary'>
                    <div className='d-flex '>
                    <img src={avenged} width="75" height="75" class="border border-secondary border-3 rounded-circle" /> 
                    <p>La musica es algo que me relaja y me tranquiliza y disfruto escuchar de ella y me gusta escuchar bastante rock y metal,
                      pero recientemente eh empezado a escuchar rap y algunos artistas tienen unas canciones increibles como lo son:
                       <li><b>Metallica</b></li>
                       <li><b>Slipknot</b></li>
                       <li><b>Santa fe klan</b></li>
                       <li><b>Nach</b></li>
                       <li><b>Avenged Sevenfold</b></li>
                     </p>
                    </div>
                </div>
            </article>
          </div> 
          
          <div className= ' col-12 col-lg-3' p-3>
            <article className='card bg-info h-100'>
                <div className='card-body bg-primary'>
                    <div className='d-flex '>
                    <img src={anabelle} width="75" height="75" class="border border-secondary border-3 rounded-circle" /> 
                    <p>Las peliculas son entretenidas aunque no suelo ver tan seguido, pero algunas de mis favoritas son las que 
                      tienen una buena historia y te mantienen enganchado queriendo saber que pasa y algunas de las peliculas que 
                      me gustan son:
                      <li><b>soy Leyenda</b></li>
                      <li><b>La caída del halcón negro</b></li>
                      <li><b>Anabelle</b></li>
                     </p>
                    </div>
                </div>
            </article>
          </div> 

          <div className= ' col-12 col-lg-3' p-3>
            <article className='card bg-info h-100'>
                <div className='card-body bg-warning'>
                    <div className='d-flex '>
                     <img src={f_trofeo} width="75" height="75" class="border border-secondary border-3 rounded-circle" /> 
                        <p>El deporte que mas me gusta jugar es futbol ssoccer pero es raro ya que ver los partidos me aburren,
                           me encanta jugar y descubri que soy muy bueno en la posición de portero, tanto que llegue a quedar en
                           segundo lugar en un torneo que organiza rinat cada año llamado <b>Keeper Kombat.</b></p>
                    </div>
                </div>
            </article>
          </div> 
          
        <Hobbies/>
        
      </div>
      
    </div>
  );
}

export default App;
