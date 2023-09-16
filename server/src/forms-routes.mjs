import fs from 'node:fs/promises'
import forms from '../db/forms.json' assert { type: 'json' }

const DB_PATH = './db/forms.json'

let NEXT = Object
    .keys(forms)
    .reduce((biggest, id) => biggest > id ? biggest : id, 0)

export const create = async (req, res) => {
    NEXT++
    forms[NEXT] = req.body


    //Per permettere il salvataggio nel file system!!!
    await fs.writeFile(DB_PATH, JSON.stringify(forms, null, '  '))

    res
        .status(201)
        .send({
            message: 'form created'
        })
}

export const get = (req, res) => {
    let form = forms[req.params.id]
    if (form) {
        res.send({ data: form })
    } else {
        res.status
        res.send({
            data: {},
            error: true,
            message: 'form not found'
        })
    }
}

export const getAll = (req, res) => {
    res.send(forms)
}

export const update = async (req, res) => {
    let form = forms[req.params.id]
    if (form) {
        let newform = { ...form, ...req.body }
        forms[req.params.id] = newform
        await fs.writeFile(DB_PATH, JSON.stringify(forms, null, '  '))
        res.send(newform)
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'form not found'
        })
    }

}

export const remove = async (req, res) => {
    let form = forms[req.params.id]
    if (form) {
        delete forms[req.params.id]

        await fs.writeFile(DB_PATH, JSON.stringify(forms, null, '  '))
        res.status(200).end()
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'form not found'
        })
    }

}