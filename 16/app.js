const list = document.getElementById('list')

const createLi = (country, currencies) => {
    const li = document.createElement('li')

    const template = `
        <li class="item m-3 border border-black-200 h-[400px] w-[300px]">
            <img class="h-[200px]" alt="" src="${country.flags.png}"/>
            <div class="info p-3">
                <p class="name text-xl">${country.name.common}</p>
                <p class="continent">${country.region}</p>

                <p class="populationContainer">👨‍👩‍👧‍👦 ${(country.population / 1000000).toFixed(1)} млн</p>
                <p class="language">👅 ${Object.values(country.languages).join(', ')}</p>
                <p class="currency">💸 ${Object.values(currencies).join(', ')}</p>
            </div>
        </li>
    `

    li.innerHTML = template

    list.appendChild(li)
}

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        // console.log(countries[1])
        countries.forEach(country => {
            let currencies = []

            if (!country.currencies) {
                currencies.push('No currencies')
                console.log(currencies)
            } else {
                for (let i = 0; i < Object.values(country.currencies).length; i++) {
                    let currency = Object.values(country.currencies)[i]

                    let currencySymbol = currency.symbol

                    currencies.push(`${currencySymbol} ${currency.name}`)
                }
            }
            
            if (!country.languages) {
                console.log('No languages')
                country.languages = {
                    'No languages': 'No languages'
                }
            }


            createLi(country, currencies)
        })
    })
