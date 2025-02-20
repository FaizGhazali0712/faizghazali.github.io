// Spread Operator on Object
const obj1 = { name: 'Pondok Tahfidz'};
const obj2 = {
    lastName: 'Plus Abu Dzar',
    address: 'Eco Village Serpong'
};
const newObj = { ...obj1, ...obj2};
console.log(newObj);

// Continued of Spread Operator on Object
const originalObj = {
    name: 'Muhammad Shiddiq',
    age: 19
};
const copiedObj = { ...originalObj };
console.log(copiedObj);


// Spread Operator on Array
const array1 = ['Kendarran roda empat'];
const array2 = [
    'Mobil',
    'Mercedes Benz'
];
const newArray = [...array1, ...array2];
console.log(newArray);

// Continued of Spread Operator on Array
const fruits = [
    'apple',
    'banana',
    'cherry',
    'watermelon'
];
const copy = [...fruits];
console.log(copy);


// Rest Parameter
function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
}
myFunc('one', 'two', 'three');

// MY EYES BURNING BECAUSE THIS REST PARAMETER
function myFunc(number, ...manyMoreArgs) {
    console.log('number', number);
    console.log('manyMoreArgs', manyMoreArgs);
}
myFunc('one', 'two', 'three');

// Rest Parameter on Array
function myFunc(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
}

myFunc('one','two','three');


// continued of rest paramter on array
const favourites = [
    'Nasi Goreng',
    'Mie Kuah',
    'Ayam Bakar',
    'Gado gado',
    'Bakso'
];
const [first, second, ...rest] = favourites;
console.log(first);
console.log(second);
console.log(rest);



// soal 1
function daftarSiswa(namaGuru, ...namaSiswa) {
    console.log('Pak Guru:', namaGuru);
    console.log('Daftar Siswa:', namaSiswa);
}
daftarSiswa('Pak Harley', 'Abah', 'Alex', 'Joni', 'Riska', 'Hasan');

// soal 2
let grupA = ['Budi', 'Rina', 'Sari'];
let grupB = ['Joko', 'Dewi'];
const semuaSiswa = [...grupA, ...grupB];
console.log(semuaSiswa);

// soal 3
let siswa = { nama:'Eka', umur: 15};
let kelas = { kelas: '9B'};
let gabung = { ...siswa, ...kelas};
console.log(gabung);

// soal 4
const santri = [
    {
        nama: 'Fulan',
        email: 'fulan@abudzar.com',
        joinYear: 2020,
    },
];
function addsantri(nama, email, joinYear) {
    console.log('Santri Baru:', nama, email, joinYear);
    const newSantri = 
    [
        nama + 'Nama: Zaid',
        email + 'Email: Zaid@abudzar.com',
        joinYear + 'Join Year: 2020'
    ];

    santri.push(newSantri);
};
console.log(santri);

