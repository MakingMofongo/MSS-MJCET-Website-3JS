const express = require('express');
const data = require('./dummy');

const api = express()

const HOST = process.env.HOST || 'localhost';
const PORT = 8080;

api.get('/', (req, res) => {
    res.send('BRUHH API WOKRING')
}
)

api.post('/people', (req, res) => {
    res.send('BRUHH API WOKRING')

}
)
