export const getDataProps = (utils, props) => {
  return utils.client
    .request("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((e) => [])
}
