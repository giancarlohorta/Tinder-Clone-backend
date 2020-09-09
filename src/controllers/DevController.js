module.exports = {
  async store(req, res) {
    const { username } = req.body; // require the data of json

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    ); // response of fetch use axios

    console.log(response.data);

    return res.json(response.data); // send json with json response
  },
};
