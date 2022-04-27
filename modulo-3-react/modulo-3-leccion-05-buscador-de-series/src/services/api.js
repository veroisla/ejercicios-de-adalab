const callToApi = () => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${userSearch}`) //
    .then((response) => response.json())
    .then((response) => {
      const result = response.shows.map((show) => {
        return {
          name: show.name,
        };
      });
      return result;
    });
};

export default callToApi;
