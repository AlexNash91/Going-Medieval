const ranks = function () {
    fetch('/ranks')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            let displayStrings = "";
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                console.log('t')
                console.log("Name: " + data[i].name + " Kingdom: " + data[i].kingdom + " Ranking: " + data[i].ranking)

                displayStrings += `<p>${data[i].name + data[i].kingdom + data[i].ranking}</p>`;
            }

            const displayContainer = document.getElementById('ranking');
            displayContainer.innerHTML = displayStrings;

        })
        .catch(err => console.log(err))

}

ranks()