const Hospital = require('../models/Hospital')

exports.getHospitals = async (req,res,next) => {
  try {
    const hospitals = await Hospital.find()
    res.status(200).json({
      success: true,
      count: hospitals.length,
      data: hospitals
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error.message
    })
  }
}

exports.getHospital = async (req,res,next) => {
  try {
    const hospital = await Hospital.findById(req.params.id)
    
    if (!hospital) {
      return res.status(404).json({
        success: false,
        data: "Hospital not found"
      })
    }
    res.status(200).json({
      success: true,
      data: hospital
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error.message
    })
  }
}

exports.createHospital = async (req,res,next) => {
  try {
    const hospital = await Hospital.create(req.body)
    res.status(201).json({
      success: true,
      data: hospital
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error.message
    })
  }
}

exports.updateHospital = async (req,res,next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {
        new: true,
        runValidators: true
      }
    )
    
    if (!hospital) {
      return res.status(404).json({
        success: false,
        data: "Hospital not found"
      })
    }
    res.status(200).json({
      success: true,
      data: hospital
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error.message
    })
  }
}

exports.deleteHospital = async (req,res,next) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.params.id)

    if (!hospital) {
      return res.status(404).json({
        success: false,
        data: "Hospital not found"
      })
    }
    res.status(200).json({
      success: true,
      data: {}
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error.message
    })
  }
}
