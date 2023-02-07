const jwt = require('jsonwebtoken')
const EXPRIRE_TIME = 3600
const HASH = 'wasssssssupppppppppppofhdsf4t354bjkbfkdf'

const generateJWTToken = ({ id, username }) => {
  const payload = {
    id,
    username
  }
  const token = jwt.sign(payload, HASH, {
    expiresIn: EXPRIRE_TIME
  })
  return token
}

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, HASH, (error, decoded) => {
      if (error) reject(error)
      if (!decoded) reject(error)
      resolve(decoded)
    })
  })
}

module.exports = { generateJWTToken, verifyToken }
