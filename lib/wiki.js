const axios = require('axios')

const wiki = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('Por favor insira uma consulta.') }
        var url = `https://st4rz.herokuapp.com/api/wiki?q=${query}`
        axios.get(url)
            .then(res => {
                const { result: hasil } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = wiki
