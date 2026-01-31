const express = require('express');
const upload = require('../middleware/upload');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();

// Single image upload
router.post('/single/:type?', adminAuth, upload.single('image'), (req, res) => {
  try {
    console.log('Single image upload request:', {
      type: req.params.type,
      adminId: req.admin ? req.admin.id : 'no admin',
      file: req.file ? req.file.filename : 'no file',
      originalname: req.file ? req.file.originalname : 'no file'
    });
    
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const imageUrl = `/uploads/images/${req.params.type || 'general'}/${req.file.filename}`;
    
    console.log('File saved:', req.file.filename);
    console.log('Image URL:', imageUrl);
    
    res.json({
      success: true,
      message: 'Image uploaded successfully',
      url: imageUrl,
      filename: req.file.filename
    });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading image',
      error: error.message
    });
  }
});

// Multiple images upload
router.post('/multiple/:type?', adminAuth, upload.array('images', 10), (req, res) => {
  try {
    console.log('Multiple image upload request:', {
      type: req.params.type,
      adminId: req.admin ? req.admin.id : 'no admin',
      fileCount: req.files ? req.files.length : 0
    });
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No files uploaded'
      });
    }

    const imageUrls = req.files.map(file => {
      const imageUrl = `/uploads/images/${req.params.type || 'general'}/${file.filename}`;
      console.log('File saved:', file.filename);
      return {
        url: imageUrl,
        filename: file.filename
      };
    });
    
    console.log('Image URLs generated:', imageUrls);
    
    res.json({
      success: true,
      message: `${req.files.length} images uploaded successfully`,
      urls: imageUrls
    });
  } catch (error) {
    console.error('Multiple image upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading images',
      error: error.message
    });
  }
});

module.exports = router;