const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const map = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('insira o nome da área.') }
        var url = 'https://mnazria.herokuapp.com/api/maps?search=' + teks
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.gambar)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = map
