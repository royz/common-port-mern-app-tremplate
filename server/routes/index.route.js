const express = require('express');
const router = express.Router();

// @description: simple api test
router.get('/test', async (req, res) => {
  res.json({
    data: [23, 46, 7, 8, 678, 78, 978, 9]
  })
});

module.exports = router;
