const router = require('../routes')

const oi = router.toString('/:id', (req) => {
  const { id } = req.params
  id.parseInt()
  console.log(id)
  return id
})

// const trans = toString()

module.exports = oi
