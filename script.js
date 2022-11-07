// 1 amocana
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
    }

console.log (user.studentstatus)

// 2 amocana

let names = ["nini", "mariami","ani", "salome","giorgi", "gvantsa"]

for (let i = 0; i < names.length; i++ ) {
    console.log (names[0])
}

let names = ["nini", "mariami","ani", "salome","giorgi", "gvantsa"]

let i = 0
while(i < names.length){
    console.log (names[0]);
    i++;
}

let names = ["nini", "mariami","ani", "salome","giorgi", "gvantsa"]

for(let items of names){
    console.log(items)
}

// 3 amocana

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for( let i=0; i<numbers.length; i++){
    if(numbers[i]>5){
        console.log(numbers[i])
    }
}

// 4 amocana

let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (user.age < 18 && user1.studentstatus === "active") {
    console.log("hello");
} else if (user.name === "levan") {
    console.log("hello levan");
} else if (user.studentstatus === "active" && user1.age < 25) {
    console.log("hello world");
} else {
    console.log("error");
}

// 5 amocana
let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]

for (let i = 0; i < array.length; i++) {
for (let x = 0; x < array[i].length; x++) {
    if (array[i][x] > 0) {
     console.log(array[i][x]);
        }
    }
};

// 6 amocana
let array1 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

//ლუწი რიცხვები
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) {
        console.log(array1[i]);
    }
};

//კენტი რიცხვები
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 1) {
        console.log(array1[i]);
    }
};
// 7 amocana







// 11 amocana
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        break;
    } else {
        console.log(numbers[i]);
    };
}
