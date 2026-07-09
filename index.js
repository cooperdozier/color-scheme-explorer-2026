"use strict"

const express = require("express");
const convert = require("color-convert");
const app = express();

app.use(convert())