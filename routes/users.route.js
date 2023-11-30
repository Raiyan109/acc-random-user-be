const express = require('express');
const { getAllUsers, getRandomUser, saveNewUser, updateUser, updateUsers, deleteUser } = require('../controllers/users.controller');

const router = express.Router()

// GET all users
/**
   * @api {get} /users All users
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
router.get('/all', getAllUsers)

// GET a random user
/**
   * @api {get} /user Random user
   * @apiDescription Get a Random user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} a Random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
router.get('/random', getRandomUser)

// POST a user
/**
   * @api {get} /user new user
   * @apiDescription Get a new user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} a new user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
router.post('/save', saveNewUser)


router.patch('/update/:id', updateUser)


router.patch('/bulk-update/:id', updateUsers)


router.delete('/delete/:id', deleteUser)

module.exports = router