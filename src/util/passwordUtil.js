const bcrypt = require('bcrypt')
const SALT_ROUNDS = 5
const generateHashPassword = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT_ROUNDS, (error, hashedPass) => {
      if (error) reject(error)
      resolve(hashedPass)
    })
  })
}

const verifyPassword = async (password, passwordStoredInDB) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordStoredInDB, (error, verified) => {
      if (error) reject(error)
      resolve(verified)
    })
  })
}

module.exports = { generateHashPassword, verifyPassword }
