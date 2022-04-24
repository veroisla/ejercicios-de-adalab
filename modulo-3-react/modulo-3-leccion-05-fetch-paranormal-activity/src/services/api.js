const callToApi = () => {
  return fetch('https://api.tvmaze.com/search/shows?q=paranormal/ ') //
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí, no es obligatorio
      const result = {
        name: response.name,
        type: response.type,
        genres: response.genres,
      };
      return result;
    });
};

export default callToApi;
