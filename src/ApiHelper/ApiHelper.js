function fetchFromApi(query) {
  return fetch(`http://api-adresse.data.gouv.fr/search/?q=${query}`)
    .then(response => response.json())
    .then((json) => {
      const results = json.features.map(feature => ({
        coordinates: feature.geometry.coordinates,
        label: feature.properties.label,
      }));
      return { results };
    });
}

export default { fetchFromApi };
