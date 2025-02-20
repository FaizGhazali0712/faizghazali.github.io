// Making a map with use object map constructor
const map = new Map();
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['t-shirt', 700]
]);
console.log(productMap);

// saving value in map
const map2 = new Map();
map2.set('name', 'Farrel');
console.log(map2);

// continued of map
const map3 = new Map();
map3.set(1, 'number one');
console.log(map3);

// accessing value in map
const map4 = new Map();
map4.set('name', 'Badminton');
console.log(map4.get('name'));
// deleting value in map
const map5 = new Map();
map5.set('name', 'aras');
map5.set('last name', 'opraza');
map5.delete('last name');
console.log(map5);

// SET
// making set
const set = new Set();
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

// saving value in set
const set2 = new Set();
set2.add(1);    
set2.add(2);

// continued of saving value in set
const set3 = new Set(); 
set3.add(1);
set3.add('Apple');
set3.add(1);
set3.add('Apple');
console.log(set3);

// accessing value in set
const set4 = new Set();
set4.add(1);
set4.add(2);
for (const number of set4) {
    console.log(number);
}
const set5 = new Set();
set5.add(1);
set5.add(2);
set5.forEach((set5) => console.log(set5));

// deleting value in set
const set6 = new Set();
set6.add(1);
set6.add(2);
set6.delete(1);
console.log(set6);




// soal 1
const penyimpananNama = new Map();
penyimpananNama.set('Budi', 75);
penyimpananNama.set('Andi', 85);
penyimpananNama.set('Candi', 95);
console.log(penyimpananNama);

// soal 2
const daftarNama = new Set();
daftarNama.add('Zaid');
daftarNama.add('Budi');
daftarNama.add('Ubaidah');
daftarNama.add('Kholid');
console.log(daftarNama);

// soal 3
const nilaiSiswa = new Map();
nilaiSiswa.set('Adi', 90);
nilaiSiswa.set('Bakr', 80);
nilaiSiswa.set('Chaerul', 85);
nilaiSiswa.set('Dodi', 95);
console.log(nilaiSiswa);

// soal 4
const barangJuki = new Map();
barangJuki.set(0o1, 'pulpen');
barangJuki.set(0o2, 'penggaris');
barangJuki.set(0o3, 'buku');
barangJuki.delete(0o2);
console.log(barangJuki);