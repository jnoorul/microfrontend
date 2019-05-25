export const getKeywords = async (keyword) => {
  return fetch(`/search/autosuggest/${keyword}`)
    .then(res => res.json())
    .then(jsonRes => jsonRes.map(item => ({title: item})))
    .catch(error => []);
};