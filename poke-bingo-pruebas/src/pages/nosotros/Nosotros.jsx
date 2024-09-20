import React from 'react';
import './nosotros.css';
import { CarruselNosotros } from '../../components/nosotros/CarruselNosotros';

export const Nosotros = () => {
    return (
        <div className="nosotros-container">
            <div className="texto-historia">
                <h3>Nuestra Historia</h3>
                <p>Una divertida combinación entre el clásico juego de Bingo y el universo Pokémon.</p>
                <p>Todo comenzó con un grupo de amigos fanáticos de Pokémon y amantes del Bingo. Nos dimos cuenta de que estos dos mundos podían unirse para crear una experiencia única y divertida. Así nació PokeBingo, con la misión de llevar la emoción del juego de Bingo a la comunidad Pokémon.</p>
                <h2>El Equipo Detrás de PokeBingo</h2>
                <p><strong>Ash</strong>: El estratega de los juegos, siempre buscando formas de mejorar la experiencia.</p>
                <p><strong>Misty</strong>: Encargada de la estética del juego y de los adorables Pokémon en los cartones.</p>
                <p><strong>Brock</strong>: El cerebro detrás de la programación, que asegura que cada partida sea justa y emocionante.</p>
                <h2>¡Únete a la Aventura!</h2>
                <p>Estamos emocionados de que formes parte de nuestra comunidad. ¡No pierdas la oportunidad de disfrutar de PokeBingo y atrapar a todos los Pokémon mientras juegas!</p>
            </div>
            <div className="carrusel_size">
                <CarruselNosotros />
            </div>
        </div>
    );
};
