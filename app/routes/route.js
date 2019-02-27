'use strict';
const express = require('express');
const router = express.Router();
const curriculumService = require('../service/curriculumService');

router.get('/subjects', async (req, res) => {
  try {
    const response = await curriculumService.getSubjectList();
    return res.status(200).json(response);
  }
  catch (error) {
    return res.sendStatus(500);
  }
});

router.get('/chapters/:subject', async (req, res) => {
  try {
    const response = await curriculumService.getChapterList(req.params.subject);
    return res.status(200).json(response);
  }
  catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;