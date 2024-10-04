const Photo = require('../models/photoModel');
const { deleteFile } = require('../utils/deleteFile');
const {generatePhotoUrl} = require('../utils/generatePhotoUrl');

const createPhoto = async (req, res) => {
  try {
    const { name, description } = req.body;
    const photoUrl = req.file ? generatePhotoUrl(req, req.file.filename) : null;
    const photo = await Photo.create({ name, description, photo: photoUrl });
    res.status(201).json(photo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll();
    res.status(200).json(photos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPhotoById = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (photo) {
      res.status(200).json(photo);
    } else {
      res.status(404).json({ error: 'Photo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (photo) {
      const { name, description } = req.body;
      const photoUrl = req.file ? generatePhotoUrl(req, req.file.filename) : photo.photo;
      if (req.file) {
        await deleteFile(photo.photo);
      }
      await photo.update({ name, description, photo: photoUrl });
      res.status(200).json(photo);
    } else {
      res.status(404).json({ error: 'Photo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (photo) {
      await deleteFile(photo.photo);
      await photo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Photo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createPhoto,
  getAllPhotos,
  getPhotoById,
  updatePhoto,
  deletePhoto
};