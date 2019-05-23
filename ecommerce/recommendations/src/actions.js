export const getRecommendations = async (keyword) => {
  return fetch(`/recommendations/search/${keyword}`)
    .then(res => res.json())
    .then(jsonRes => jsonRes)
    .catch(error => []);
};