// const { describe, it, expect } = require('@jest/globals')
const authController = require('../../../src/controllers/authController')
const authService = require('../../../src/services/authService')

describe('Tests for authController', () => {
  describe('Tests for create user', () => {
    const req = {
      body: {
        username: 'saatwik',
        password: 123456
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    it('should create a user', async () => {
      jest
        .spyOn(authService, 'createUser')
        .mockResolvedValue({ username: 'saatwik' })
      await authController.createUser(req, res)
      expect(res.status).toHaveBeenCalledWith(201)
      expect(res.json).toHaveBeenCalled()
    })
  })
})
