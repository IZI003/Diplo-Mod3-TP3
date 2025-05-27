import fs from 'fs';
import { SuperHeroe } from '../modelos/SuperHeroe.mjs';

export function leerSuperheroes(ruta) {

    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    // Convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new SuperHeroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad,
            hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial,
            hero.aliado, hero.enemigo));

    // Ordenar por nombre de superhéroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

    return superheroes;
}

// Nueva función para agregar superhéroes

export function agregarSuperheroes(rutaoriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaoriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);

    const nuevosSuperheroes = JSON.parse(datosNuevos);

    // Convertir los nuevos superhéroes a instancias de Superheroe
    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new SuperHeroe(hero.id, hero.nombreSuperheroe,
            hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad,
            hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );
    // Combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    // Guardar la lista actualizada
    fs.writeFileSync(rutaoriginal, JSON.stringify(listaActualizada, null, 2),
        'utf8');

    console.log('Lista de superhéroes actualizada con éxito.')
}