const axios = require('axios')

const zodiak = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('por favor insira sua data de nascimento.') }
        var url = `https://arugaz.herokuapp.com/api/getzodiak?nama=aruga&tgl-bln-thn=${query}`
        axios.get(url)
            .then(res => {
                const { lahir, ultah, usia, zodiak } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = zodiak
