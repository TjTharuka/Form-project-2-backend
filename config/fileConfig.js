module.exports = {
  fileSavePath: './uploads/',
  maxFileSize: 50 * 1024 * 1024, // 50MB
  imageProperties: [
    {
      location: '180x270/',
      width: 180,
      height: 270,
    },
    {
      location: '300x300/',
      width: 300,
      height: 300,
    },
    {
      location: '590x331/',
      width: 590,
      height: 331,
    },
  ],
  imageResizeQuality: 90,
  imageTypes: ['image/jpeg', 'image/png', 'image/jpg'],
};
