import express from "express";
import cors from 'cors';
import * as form from './forms-routes.mjs';
import bodyParser from 'body-parser';
const app = express()
const port = 8000
app.use(cors());
app.use(bodyParser.json())

app.get('/forms', form.getAll)
app.get('/forms/:id', form.get)
app.put('/forms/:id', form.update)
app.delete('/forms/:id', form.remove)
app.post('/forms', form.create)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})