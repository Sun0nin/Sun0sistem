const axios = require('axios')

const covidcountry = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('Por favor, insira o nome do país.') }
        var url = `https://arugaz.herokuapp.com/api/corona?country=${query}`
        axios.get(url)
            .then(res => {
                const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest  } = res.data.result
                resolve({ hasil })
             })
    })
}

module.exports = covidcountry
