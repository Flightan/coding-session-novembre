function fetchFromApi(query) {
  return fetch(`http://api-adresse.data.gouv.fr/search/?q=${query}`)
    .then(response => response.json())
    .then((json) => {
      const result = json.features.map(feature => ({
        coordinates: feature.geometry.coordinates,
        label: feature.properties.label,
      }));
      return { result };
    });
}

export default { fetchFromApi };
