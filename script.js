ihtml=``
let p = fetch("https://cat-fact.herokuapp.com/facts").then((result) => result.json()).then((fact) => {
    for (item in fact) {

        document.getElementById('fact-cards').innerHTML += `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${fact[item].type}</h5><h6 class="card-subtitle mb-2 text-body-secondary">${fact[item].type}</h6><p class="card-text">${fact[item].text}</p><a href="#" class="card-link">Card link</a><a href="#" class="card-link">Another link</a></div></div>`
        console.log(fact[item])
    }
})
