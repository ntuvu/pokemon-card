import { Pokemon } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonCollection(props: Props) {
  const { pokemons } = props;
  return (
    <>
      <section className="collection-container">
        {pokemons.map((pokemon) => {
          return (
            <div>
              <PokemonList
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
