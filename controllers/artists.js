const Artist = require('../models/artist')

const getAll = (req, res) => {
  Artist.getAll().then(artists => {
    res.json(artists)
  })
}

const getOne = (req, res) => {
  const id = req.params.id
  Artist.getOne(id).then(artist => {
    res.json(artist)
  })
}

const del = (req, res) => {
  const id = req.params.id
  Artist.delete(id).then(artists => {
    const artist = artists[0]
    res.json(artist)
  })
}

module.exports = {
  getAll, getOne, del
}
