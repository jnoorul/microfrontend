export const searchProducts = async (keyword) => {
  return fetch(`/products/search/${keyword}`)
    .then(res => res.json())
    .then(jsonRes => jsonRes)
    .catch(error => []);
};