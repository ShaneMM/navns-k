const knownNames = {
    "david raya": {
        fullName: "David Raya",
        position: "Keeper",
        description: "Spansk keeper. Nr 22 for Arsenal",
        image: "img/raya.webp"
    },
    "norberto neto": {
        fullName: "Norberto Neto",
        position: "Keeper",
        description: "Brasiliansk keeper. Nr 32 for Arsenal",
        image: "img/neto.webp"
    },
    "william saliba": {
        fullName: "William Saliba",
        position: "Forsvar",
        description: "Fransk midtstopper. Nr 2 for Arsenal",
        image: "img/saliba.webp"
    },
    "ben white": {
        fullName: "Ben White",
        position: "Forsvar",
        description: "Engelsk høyrebekk. Nr 4 for Arsenal",
        image: "img/white.webp"
    },
    "Gabriel": {
        fullName: "Gabriel",
        position: "Forsvar",
        description: "Brasiliansk midtstopper. Nr 6 for Arsenal",
        image: "img/gabriel.webp"
    },
    "jurrien timber": {
        fullName: "Jurrien Timber",
        position: "Forsvar",
        description: "Nederlandsk midtstopper/bekk spiller. Nr 12 for Arsenal",
        image: "img/timber.webp"
    },
    "jakub kiwior": {
        fullName: "Jakub Kiwior",
        position: "Forsvar",
        description: "Polsk midtstopper/venstrebekk. Nr 15 for Arsenal",
        image: "img/kiwior.webp"
    },
    "oleksandr zinchenko": {
        fullName: "Oleksandr Zinchenko",
        position: "Forsvar",
        description: "Ukrainsk venstrebekk. Nr 17 for Arsenal",
        image: "img/zinchenko.webp"
    },
    "takehiro tomiyasu": {
        fullName: "Takehiro Tomiyasu",
        position: "Forsvar",
        description: "Japansk bekk spiller. Nr 18 for Arsenal",
        image: "img/tomiyasu.webp"
    },
    "riccardo calafiori": {
        fullName: "Riccardo Calafiori",
        position: "Forsvar",
        description: "Italiensk midtstopper/venstrebekk. Nr 33 for Arsenal",
        image: "img/calafiori.webp"
    },
    "thomas partey": {
        fullName: "Thomas Partey",
        position: "midtbane",
        description: "Ghanisk defensiv midtbane spiller. Nr 5 for Arsenal",
        image: "img/partey.webp"
    },
    "martin ødegaard": {
        fullName: "Martin Ødegaard",
        position: "midtbane",
        description: "Norsk angrepende midtbane spiller. Nr 8 for Arsenal og min favoritt spiller",
        image: "img/odegaard.webp"
    },
    "jorginho": {
        fullName: "Jorginho",
        position: "midtbane",
        description: "Italiensk midtbane spiller. Nr 20 for Arsenal",
        image: "img/jorginho.webp"
    },
    "mikel merino": {
        fullName: "Mikel Merino",
        position: "midtbane",
        description: "Spansk midtbane spiller. Nr 23 for Arsenal",
        image: "img/merino.webp"
    },
    "declan rice": {
        fullName: "Declan Rice",
        position: "midtbane",
        description: "Engelsk defensiv midtbane spiller. Nr 41 for Arsenal",
        image: "img/rice.webp"
    },
    "kai havertz": {
        fullName: "Kai Havertz",
        position: "Angrepsspiller",
        description: "Tysk spiss/sngripende midtbane spiller. Nr 29 for Arsenal",
        image: "img/havertz.webp"
    },
    "bukayo saka": {
        fullName: "Bukayo Saka",
        position: "Angrepsspiller",
        description: "Engelsk høyre vinger. Nr 7 for Arsenal",
        image: "img/saka.webp"
    },
    "gabriel jesus": {
        fullName: "Gabriel Jesus",
        position: "Angrepsspiller",
        description: "Brasiliansk spiss. Nr 9 for Arsenal",
        image: "img/jesus.webp"
    },
    "gabriel martinelli": {
        fullName: "Gabriel Martinelli",
        position: "Angrepsspiller",
        description: "Brasiliansk venstre vinger. Nr 11 for Arsenal",
        image: "img/martinelli.webp"
    },
    "leandro trossard": {
        fullName: "Leandro Trossard",
        position: "Angrepsspiller",
        description: "Belgisk venstre vinger. Nr 19 for Arsenal",
        image: "img/trossard.webp"
    },
    "raheem sterling": {
        fullName: "Raheem Sterling",
        position: "Angrepsspiller",
        description: "Engelsk vinger. Nr 30 for Arsenal",
        image: "img/sterling.webp"
    },
}

function checkName() {
    const input = document.getElementById("nameInput").value.toLowerCase().trim()
    const resultDiv = document.getElementById("result")
    const errorMessage = document.getElementById("errorMessage")

    let found = false
    for (const key in knownNames) {
        const person = knownNames[key]
        if (person.fullName.toLowerCase().includes(input)) {
            document.getElementById("fullName").textContent = person.fullName
            document.getElementById("position").textContent = person.position
            document.getElementById("description").textContent = person.description
            document.getElementById("image").src = person.image
            document.getElementById("image").classList.remove("hidden")

            resultDiv.classList.remove("hidden")
            errorMessage.classList.add("hidden")
            found = true
            break
        }
    }

    if (!found) {
        resultDiv.classList.add("hidden")
        errorMessage.classList.remove("hidden")
    }
}

document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        checkName()
    }
})