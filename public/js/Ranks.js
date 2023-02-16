const ranks = function () {
    fetch('/ranks')
        .then(resp => resp.json())
        .then(data => {
            const placement = []
            const names = []
            const king = []
            for (i = 0; i < data.length; i++) {
                // console.log(typeof (data[i].ranking))
                // console.log(data[i].ranking)
                placement.push(data[i].ranking)
                names.push(data[i].username)
                king.push(data[i].kingdom)
                // console.log(placement)
            }
            placement.sort((a, b) => b - a)
            console.log(placement)
            console.log(names)
            console.log(king)

            // console.log(data)
            // orderBy(data, "ranking", "asc")
            // console.log(data)
            

            for (var i = 0; i < data.length; i++) {

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
                rank.textContent = `${placement[i]}`
                name.textContent = `${names[i]}`
                kingdom.textContent = `${king[i]}`

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