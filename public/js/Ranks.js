const ranks = function () {
    fetch('/ranks')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                console.log('t')
                console.log("Name: " + data[i].name + " Kingdom: " + data[i].kingdom + " Ranking: " + data[i].ranking)

                const table = document.getElementsByClassName('table-group-divider')[0]

                // create a new document fragment
                const fragment = document.createDocumentFragment()

                // create html elements
                const player = document.createElement('tr')
                const rank = document.createElement('th')
                rank.setAttribute('scope', 'row')
                const name = document.createElement('td')
                const kingdom = document.createElement('td')

                // set content within those new elements
                rank.textContent = `${data[i].ranking}`
                name.textContent = `${data[i].name}`
                kingdom.textContent = `${data[i].kingdom}`

                // append to fragments
                fragment.appendChild(rank)
                fragment.appendChild(name)
                fragment.appendChild(kingdom)

                // append fragment to list
                player.appendChild(fragment)
                table.appendChild(player)
            }


        })
        .catch(err => console.log(err))
}

ranks()