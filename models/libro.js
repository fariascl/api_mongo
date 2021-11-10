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
            //required: true,
            validate:
            {
                validator: function (v)
                {
                    let isValid = false;
                    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
                    if (pattern.test(v))
                    {
                        isValid = true;
                    }
                    return isValid;
                },
                message: props => `nombre no tiene formato correcto`
            }
        },

        anio:
        {
            type: Number
        },

        idioma:
        {
            type: String,
            enum: ['ING','ESP'],
            //required: true
        },

        autor:
        {
            type: String,
            //required: true
        }

    })

module.exports = mongoose.model('libros', LibroSchema)