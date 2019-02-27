'use strict';


const express = require('express');
const app = express();
const { getSubjectList, getChapterList } = require('./stub');

app.get('/subjects', (req, res) => {
  res.status(200).send(getSubjectList());
});

app.get('/chapters/:subject', (req, res) => {
  res.status(200).send(getChapterList(req.params.subject));
});

module.exports = app;
