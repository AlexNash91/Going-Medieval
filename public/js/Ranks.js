const ranks =  function () {
    fetch('/ranks')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            let displayStrings = "";
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])            
                console.log('t')
                console.log("Name: " + data[i].name + " Kingdom: " + data[i].kingdom + " Ranking: " + data[i].ranking)

                // displayStrings += `<p>${item}</p>`;
            }
        

            // displayContainer.innerHTML = displayStrings;
            
    })
    .catch(err => console.log(err))
   
}

// const ranks = function () {
//     fetch('/ranks')
//         .then(resp => {
//             console.log('t')
//             console.log(resp.status)
//             return resp.json()
//         })
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => console.log(err))
// };

ranks()

// const ranks = function () {
//     const displayContainer = document.getElementById("display-container");
    
//     fetch('/ranks')
//         .then(resp => resp.json())
//         .then(data => {
//             let displayStrings = "";
//             for (const item of data) {
//                 displayStrings += `<p>${item}</p>`;
//             }
//             displayContainer.innerHTML = displayStrings;
//         })
//         .catch(err => console.log(err))
// };


  