const ranks = function () {
    fetch('/ranks')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                console.log('t')
                // console.log("Name: " + data[i].name + " Kingdom: " + data[i].kingdom + " Ranking: " + data[i].ranking)

                document.getElementById('tr')
                // create a new document fragment
                const fragment = document.createDocumentFragment()
                // create html elements
                const rank = document.createElement('th')
                rank.setAttribute('scope', 'row')
                const name = document.createElement('td')
                const kingdom = document.createElement('td')
                // set content within those new elements
                rank.textContent = `${data[i].ranking]}`
                name.textContent = `${data[i]. name}`
                kingdom.textContent = `${data[i].kingdom}`
                // append to fragments
                fragment.appendChild(rank)
                fragment.appendChild(name)
                fragment.appendChild(kingdom)

                












            //     // create html elements
            //     let row = document.createElement('tr')

            //     let cell_1 = document.createElement('th')
            //     cell_1.innerHTML = `${data[i].ranking};`


            //     let cell_2 = document.createElement('td')
            //     cell_2.textContent = `${data[i].name}`;



            //     let cell_3 = document.createElement('td')
            //     cell_3.textContent = `${data[i].Kingdom}`;

            //     // append all of the elements together
            //     // tbody.appendChild(row)
            // }

            

    

        })
        .catch(err => console.log(err))

}

ranks()









// more example code 
// const element  = document.getElementById('ul'); // assuming ul exists
// const fragment = document.createDocumentFragment();
// const browsers = ['Firefox', 'Chrome', 'Opera',
//     'Safari', 'Internet Explorer'];

// browsers.forEach((browser) => {
//     const li = document.createElement('li');
//     li.textContent = browser;
//     fragment.appendChild(li);
// });

// element.appendChild(fragment);











// example code
// let table = document.createElement('table');

// data.forEach(rowData => {
//   let row = document.createElement('tr');

//   for (let key in rowData) {
//     let cell = document.createElement('td');
//     cell.textContent = rowData[key];
//     row.appendChild(cell);
//   }

//   table.appendChild(row);
// });

// document.body.appendChild(table);
















// backup code
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