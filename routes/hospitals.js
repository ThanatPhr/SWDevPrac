const express = require('express')
const { getHospitals, createHospital, getHospital, deleteHospital, updateHospital } = require('../controller/hospitals')
const router = express.Router()

const app = express()

router.route('/').get(getHospitals).post(createHospital)
router.route('/:id').get(getHospital).delete(deleteHospital).put(updateHospital)

module.exports = router