const axios = require('axios')

const kbbi = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('Por favor insira o texto.') }
        var url = `https://mnazria.herokuapp.com/api/kbbi?search=${query}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = kbbi
