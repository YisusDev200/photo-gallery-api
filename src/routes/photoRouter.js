const express = require('express');
const multer = require('multer');
const path = require('path');
const photoController = require('../controllers/photoController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/photos', upload.single('photo'), photoController.createPhoto);
router.get('/photos', photoController.getAllPhotos);
router.get('/photos/:id', photoController.getPhotoById);
router.put('/photos/:id', upload.single('photo'), photoController.updatePhoto);
router.delete('/photos/:id', photoController.deletePhoto);

module.exports = router;