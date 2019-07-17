// Stocké sur un serveur distant
const user = {
    name: "Coco",
    email: "moi@test.com",
    role: "admin",
    age: 38,
};

// ------------------------- //
function getUser(userName) {
    // console.log(userName, user.name); // Tests
    // Connexion à un serveur
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (user.name.toLowerCase() === userName.trim().toLowerCase()) {
                resolve(user);
            } else {
                reject("Il y a eut un probleme à la connexion BDD");
            }
        }, 3000);
    });
}

const u1 = getUser("Michael");
const u2 = getUser("Coco");

u1.then(function(data) {
        console.log(data)
    })
    .catch(function(e) {
        console.error(e)
    });

u2.then(function(data) {
        console.log(data)
    })
    .catch(function(e) {
        console.error(e)
    });



// GESTION D'UNE PROMESSE
// const p = new Promise(function(resolve, reject) {
//     if (true) resolve("Promesse tenue");
//     else reject("Promesse non tenue");
// });

// p.then(function() {
//         console.log("OK");
//     })
//     .catch(function() {
//         console.error("Erreur !");
//     });