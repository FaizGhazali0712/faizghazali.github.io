const foods = ['Nasi Goreng', 'Pasta Ayam', 'Sate Tikus'];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
}
const person = { name: 'Fulan', origin:'Bekasi', birthyear: 2009 };
for (const property in person) {
    console.log(`${property} bernilai ${person[property]}`);
}
const names = ['bebek', 'Ayam', 'Telor', 'Tempe'];
for (const item of names) {
    console.log(item);
}
let ib = 0;
while (ib < 5) {
    console.log(`Angka ke-${ib} adalah ${ib}.`);
    ib++;
}
// let il = 0;
// while (il < 5) {
//     console.log(`Angka ke-${il} adalah ${il}.`);
// }
let s = 0;

do {
    console.log(`Angka ke-${s} adalah ${s}`);
    s++;
} while (s < 5);
let a = 0;
for (; a < 5; a++) {
    console.log(a);
}
let b = 1;
for (; b <= 6; b++) {
    console.log(b);
}
let c = 0;
do {
    console.log(`Angka ke-${c} adalah ${c}.`);
    c++;
} while (c < 5);
for (let g = 0; g < 10; g++) {
    if (g === 5) {
        break;
    }
    console.log(g);
}
const number = 1;
switch(number) {
    case 1:

}
for (let h = 0; h < 10; h++) {
    if (h === 5) {
        continue;
    }
    console.log(h);
}


//soal 1 
let j = 1;
do {
    console.log(j);
    j++;
} while (j < 4)
//soal 2
let l = 0;
while (l < 3) {
    console.log(l);
    l++;
}
//soal 3
for ( let q = 0; q < 5; q++) {
    if (q === 2) continue;
    console.log(q);
}
//soal 4
for (let y = 1; y <= 3; y++) {
    for (let u = 1; u <= 2; u++) {
        console.log(y, u);
    }
}
//soal 5
for (let r = 0; r < 5; r++) {
    if (r === 3) break;
    console.log(r);
}
// soal cerita 1
let ember = 1;
while (ember < 10) {
    
console.log(`Ember Ke-${ember} telah diisi`);
ember++;
}
//soal cerita 2
let angka = 1;
do {
    console.log(`Angka ke-${angka}`);
    angka++;
} while (angka < 101);
//soal cerita 3

for (let ahmadMenyelak = 1; ahmadMenyelak < 13; ahmadMenyelak++ ) {
    if (ahmadMenyelak === 8) {
        continue;
    }
    console.log(ahmadMenyelak);
}
