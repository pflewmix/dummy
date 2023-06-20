const systems = ["Nintendo GameCube", "Sony Playstation", 
    "Sony Playstation 2", "Gameboy Advance", "Xbox"];


const upperSystems = systems.map((toUpper) => toUpper.toUpperCase());

console.log(upperSystems);


const filtered = systems.filter((sny) => sny.startsWith("S"));

console.log(filtered);

for (let i = 0; i < systems.length; i++) {
    console.log(systems[i]);
}

let myFavoriteSystems = "My favorite systems are ";

for (let i = 0; i < systems.length; i++) {
    if (i === systems.length - 1) {
        myFavoriteSystems += `and ${systems[i]}. `;
    } else {
        myFavoriteSystems += `${systems[i]}, `;
    }
}

console.log(myFavoriteSystems);