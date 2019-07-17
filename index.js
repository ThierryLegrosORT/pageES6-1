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

// AMELIORATION DU CODE PRECEDENT
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

getUser("Michael")
    .then(data => console.log(data))
    .catch(e => console.error(e));

getUser("Coco")
    .then(data => console.log(data))
    .catch(e => console.error(e));

// EXEMPLES //

// function sayHello(){
//     console.log("coucou les coco");
// }

// const sayHello = function(){
//     console.log("coucou les coco");
// }

// const sayHello = (name) => console.log(`Salut ${name} !`);
// sayHello("Coco");
// sayHello("Jaco");
// sayHello("Pedro");
// sayHello();



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