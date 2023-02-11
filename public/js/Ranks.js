const ranks = function () {
    fetch('/ranks')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                console.log('t')
                // console.log("Name: " + data[i].name + " Kingdom: " + data[i].kingdom + " Ranking: " + data[i].ranking)
                let row = document.createElement('tr')

                let cell_1 = document.createElement('th')
                cell_1.innerHTML = ;


                let cell_2 = document.createElement('td')
                cell_2.innerHTML = ;



                let cell_3 = document.createElement('td')
                cell_3.innerHTML = ;

                
            }

            const displayContainer = document.getElementById('ranking');
            displayContainer.innerHTML = displayStrings;

        })
        .catch(err => console.log(err))

}

ranks()
































































// const ranks = function () {
//     fetch('/ranks')
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//             let displayStrings = "";
//             for (var i = 0; i < data.length; i++) {
//                 console.log(data[i])
//                 console.log('t')
//                 console.log("Name: " + data[i].name + " Kingdom: " + data[i].kingdom + " Ranking: " + data[i].ranking)

//                 displayStrings += `<p>${data[i].name + data[i].kingdom + data[i].ranking}</p>`;
//             }

//             const displayContainer = document.getElementById('ranking');
//             displayContainer.innerHTML = displayStrings;

//         })
//         .catch(err => console.log(err))

// }

// ranks()