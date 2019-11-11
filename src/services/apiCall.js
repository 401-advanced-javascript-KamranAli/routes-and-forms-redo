export const getRandom = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(results => results.json());
};

export const getCharacter = (name) => {
  return fetch(`/api/v1/characters?name=${name}`)
    .then(results => results.json());
};
