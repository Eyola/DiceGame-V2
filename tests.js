<<<<<<< HEAD
const test = 1000000;

let table = [0,0,0,0,0,0];

for (let i = 0; i < test; i++) {
    result = Math.floor(Math.random() * (7 - 1) + 1);
    if (result == 1) {
    table[0] += 1;
    }
    if (result == 2) {
    table[1] += 1;
    }
    else if (result == 3) {
    table[2] += 1;
    } 
    else if (result == 4) {
    table[3] += 1;
    }
    else if (result == 5) {
    table[4] += 1;
    }
    else if (result == 6) {
    table[5] += 1;
    }                                        
}

table.forEach(element => {
    console.log(element / 10000); 
});
=======
const test = 100000;

let table = [0,0,0,0,0,0];

for (let i = 0; i < test; i++) {
    result = Math.floor(Math.random() * (7 - 1) + 1);
    if (result == 1) {
    table[0] += 1;
    }
    if (result == 2) {
    table[1] += 1;
    }
    else if (result == 3) {
    table[2] += 1;
    } 
    else if (result == 4) {
    table[3] += 1;
    }
    else if (result == 5) {
    table[4] += 1;
    }
    else if (result == 6) {
    table[5] += 1;
    }                                        
}

table.forEach(element => {
    console.log(element / 1000); 
});
>>>>>>> 6fe15fe3b1d27a77490aaa83ab542a94b9cb88e9
