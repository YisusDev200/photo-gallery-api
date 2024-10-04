const generatePhotoUrl = (req, filename) => {
  const baseUrl = process.env.BASE_URL;
  return `${baseUrl}/uploads/${filename}`;
};

module.exports = { generatePhotoUrl };
