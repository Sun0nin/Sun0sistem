const axios = require('axios')

const infoanime = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('Por favor, insira o nome do anime.') }
        var url = `https://arugaz.herokuapp.com/api/dewabatch?q=${query}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = infoanime
