import { agregarSuperheroes, leerSuperheroes } from "./servicios/utils.mjs";

agregarSuperheroes('./datos/superheroes.txt', './datos/AgregarSuperHeroes.txt')

const super_heroes = new leerSuperheroes('./datos/SuperHeroes.txt');
console.log("Heroes ordenados: ");
console.log(super_heroes);