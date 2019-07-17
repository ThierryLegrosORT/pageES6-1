// // Stocké sur un serveur distant
// const user = {
//     name: "Coco",
//     email: "moi@test.com",
//     role: "admin",
//     age: 38,
// };

// // ------------------------- //
// function getUser(userName) {
//     // console.log(userName, user.name); // Tests
//     // Connexion à un serveur
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (user.name.toLowerCase() === userName.trim().toLowerCase()) {
//                 resolve(user);
//             } else {
//                 reject("Il y a eut un probleme à la connexion BDD");
//             }
//         }, 3000);
//     });
// }

// const u1 = getUser("Michael");
// const u2 = getUser("Coco");

// u1.then(function(data) {
//         console.log(data)
//     })
//     .catch(function(e) {
//         console.error(e)
//     });

// u2.then(function(data) {
//         console.log(data)
//     })
//     .catch(function(e) {
//         console.error(e)
//     });

// // AMELIORATION DU CODE PRECEDENT
// function getUser(userName) {
//     // console.log(userName, user.name); // Tests
//     // Connexion à un serveur
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (user.name.toLowerCase() === userName.trim().toLowerCase()) {
//                 resolve(user);
//             } else {
//                 reject("Il y a eut un probleme à la connexion BDD");
//             }
//         }, 3000);
//     });
// }

// getUser("Michael")
//     .then(data => console.log(data))
//     .catch(e => console.error(e));

// getUser("Coco")
//     .then(data => console.log(data))
//     .catch(e => console.error(e));

// // EXEMPLES //

// // function sayHello(){
// //     console.log("coucou les coco");
// // }

// // const sayHello = function(){
// //     console.log("coucou les coco");
// // }

// // const sayHello = (name) => console.log(`Salut ${name} !`);
// // sayHello("Coco");
// // sayHello("Jaco");
// // sayHello("Pedro");
// // sayHello();



// // GESTION D'UNE PROMESSE
// // const p = new Promise(function(resolve, reject) {
// //     if (true) resolve("Promesse tenue");
// //     else reject("Promesse non tenue");
// // });

// // p.then(function() {
// //         console.log("OK");
// //     })
// //     .catch(function() {
// //         console.error("Erreur !");
// //     });

// const { promisify } = require("util");
// const { readdir } = require("fs");
// const readdirPromise = promisify(readdir);

// readdir(
//     "-", // Arg1
//     (err, files) => { // Arg2
//         if (err) return;
//         console.log(files);
//     });

// readdirPromise
//     .then(files => console.log(files))
//     .catch(e => console.error(e));

// // HTTP //
// const http = require("http");
// const PORT = 15151;

// const server = http.createServer((req, res) => {
//     res.write("<h1>Salut !</h1>")
//     res.write("<p>petit paragraphe</p>")
//     res.end();
// });

// server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// EXPRESS
const express = require('express');
const app = express();

const PORT = 15151;

const tabs = [
  { label: 'Accueil', link: '/', active: true },
  { label: 'Présentation', link: '/presentation', active: false },
  { label: 'Services', link: '/services', active: false },
  { label: 'Contact', link: '/contact', active: false },
];

const html = `<header>
    <nav>
      <ul style="color:red">
      ${tabs.map(({ label, link, active }) =>`
        <li class="${active ? 'active' : ''}">
        <a href="${link}">${label}</a>
        </li>
      `).join('')}
      </ul>
    </nav>
    <style>
    html {
      scroll-behavior: smooth;
    }
    body {
      padding: 0;
      margin: 0;
    }
    nav {
      position: fixed;
      top: 0;
      background: black;
      width: 100%;
      height: 40px;
    }
    nav ul {
      display: flex;
      justify-content: space-around;
    }
    nav li a {
      color: white;
    }
  </style>
  <header>
    <nav>
      <ul style="color:red">
      ${tabs.map(({ label, link, active }) => `<li class="${active ? 'active' : ''}">
        <a href="${link}">${label}</a>
        </li>`).join('')}
      </ul>
    </nav>
  </header>
  </header>`;

app.listen(PORT);

app.get('/', (req, res) => {
  res.send(`${html}<h1>Bienvenue sur le site</h1>`);
});

app.get('/presentation', (req, res) => {
  res.send(`${html}<h1>Notre histoire</h1>`);
});

app.get('/services', (req, res) => {
  res.send(`${html}<h1>Nos prestations</h1>`);
});

app.get('/contact', (req, res) => {
  res.send(`${html}<h1>Nous contacter</h1>`);
});