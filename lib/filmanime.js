const axios = require('axios')

const filmanime = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'Undefined') { reject('Por favor, insira o nome do anime.') }
        var url = `https://arugaz.herokuapp.com/api/sdmovie?film=${query}`
        axios.get(url)
            .then(res => {
                const { title, rating, sinopis, video  } = res.data.result
                resolve({ hasil })
             })
    })
}

module.exports = filmanime
