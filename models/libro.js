'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema // Relación entre BD y objeto que se creará en el código.

// Schema personalizado.
const LibroSchema = Schema(

    /*
        VARIABLES

        nombre: string
        anio: number
        idioma: string enum[‘ING’,’ESP’]
        autor : string

    */

    {
        nombre:
        {
            type:String,
            required: true,
        },

        anio:
        {
            type: Number,
            required: true,
        },

        idioma:
        {
            type: String,
            enum: ['ING','ESP'],
            required: true
        },

        autor:
        {
            type: String,
            required: true
        }

    })

module.exports = mongoose.model('libros', LibroSchema)