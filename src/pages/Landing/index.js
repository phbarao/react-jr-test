import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import { Container, Content, Pagination } from "./styles";

function Landing() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [offset, setOffset] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
  const amount = 20;

  async function loadNext() {
    setOffset(offset + amount);
    setPageNumber(pageNumber + 1);
  }

  async function loadPrevious() {
    setOffset(offset - amount);
    setPageNumber(pageNumber - 1);
  }

  useEffect(() => {
    async function loadPokemons() {
      const response = await axios.get(url);

      if (pageNumber === 1) {
        setIsDisabled(true);
      }

      if (pageNumber === 2) {
        setIsDisabled(false);
      }

      setPokemonsList(response.data.results);
    }

    loadPokemons();
  }, [url, pageNumber]);

  return (
    <Container>
      <Header title="Lista de Pokemons" />

      <Content>
        <ul>
          {pokemonsList.map((pokemon) => (
            <li data-testid="pokemon-item" key={pokemon.name}>
              {pokemon.name}
            </li>
          ))}
        </ul>

        <Pagination>
          <button
            data-testid="previous-button"
            disabled={isDisabled}
            onClick={loadPrevious}
          >
            Anterior
          </button>

          <p data-testid="page-number">{pageNumber}</p>

          <button onClick={loadNext}>Próxima</button>
        </Pagination>
      </Content>
    </Container>
  );
}

export default Landing;
