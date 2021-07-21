console.log("This is my application");
// 4 ways to declare variables

x = 3; // implicit
var y = 4; // function or globally scoped, can be redclared
var y = 10;

let z = 5; // block scoped, cannot redeclare z
// let z = 7; // cannot be done

const xyz = x + y + z; // block scoped, cannot redeclare or redefine
// xyz = 32; // cannot be done

let myGame = {
    developer: "From Software",
    game: "Dark souls",
    awards: 3,
    genre: "Action Role-playing",
    HardGame: true,
    DevTools: {
        Engine: "Unreal"
    }
};
console.log("Favourite Game:", myGame);
console.log("Developer:", myGame.developer);
console.log("DevTools:", myGame.DevTools);
console.log("Engine:", myGame.DevTools.Engine);

let age = 49;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);
let age2 = 51;
let result2 = age2 >= 50 ? "50 or over" : "Under 50";
console.log(result2);
