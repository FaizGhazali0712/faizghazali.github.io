// Arrays
const array = [1, 2];
console.log(typeof array);
const users = new Array();
const numbers = new Array(5);
const users1 = new Array();
console.log(users);

// using Array.from synthax
const pondok = Array.from('abudzar');
console.log(pondok);

// continued of Array.from
const users2 = new Array('Ahmad', 'Ali', 'Bani', 'Khalid');
const customer = Array.from(users2);
console.log(customer);

// using array literal
const array1 = [];
const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits);

// access element array
const myArray = [42, 55, 30];
console.log(myArray[1]);

// Array value Manipulation = by using indexing 
const myArray1 = [1, 2, 3, 4, 5];
myArray1[1] = 10;
console.log(myArray1);

// Array value Manipulation = by PUSH
const myArray2 = [1, 2, 3, 4, 5];
myArray2.push(6);
console.log(myArray2);

// how to DELETING element and Array Data
const myArray3 = ['Android', 'Data Science', 'Web'];
delete myArray3[1]; 
console.log(myArray3);

// continued of how to DELETING element and Array Data 
const myArray4 = ['Android', 'Data Science', 'Web'];
myArray4.splice(1, 2);
console.log(myArray4);

// continued of how to DELETING element and Array Data part 3
const myArray5 = ['Android', 'Data Science', 'Web'];
myArray5.shift(); //get shifted out LOL!
console.log(myArray5);

// continued of how to DELETING element and Array Data part 4
const myArray6 = ['Ashim', 'Yaqub', 'Hafsh'];
myArray6.pop(); //get popped out LOL!
console.log(myArray6);

// how to see inside of the array
const introduction = ['Assamualaikum', 'Fulan'];
const [greeting, name] = introduction;
console.log(greeting);

// Array Methodes
// 1. Reverse
const eskulAbudzar = [
    'Futsal',
    'Berkuda',
    'Memanah',
    'Berenang'
];
eskulAbudzar.reverse();
console.log(eskulAbudzar);
// without Reverse
const eskulAbudzar1 = [
    'Futsal',
    'Berkuda',
    'Memanah',
    'Berenang'
];
console.log(eskulAbudzar1);
// 2. Sort
const sekolah = [
    'TK Abudzar',
    'SD Islam Abudzar',
    'PKBM Abudzar',
    'Pondok Tahfidz Plus Abudzar'
];
sekolah.sort();
console.log(sekolah);
// Array pop()

const Cars = ["BMW", "Nissan", "Mercedes - Benz", "SAAB"];
Cars.pop();
console.log(Cars);








// soal 1
const numbers1 = [2, 4, 6, 8];
numbers1[3] = 10;
console.log(numbers1);

// soal 2
const daftarMakanan = ['Pizza', 'Burger', 'Sate', 'Bakso'];
daftarMakanan.push('Nasi Goreng');
daftarMakanan.sort();
console.log(daftarMakanan);

// soal 3
const KataBijak = new Array('Belajar', 'Mandiri', 'dan', 'Percaya', 'Diri');
const CetakKata = Array.from(KataBijak);
console.log(CetakKata);

// soal 4
const temanSholihin = [
    'Tony',
    'Turki',
    'Taqi',
    'Thoriq'
];
console.log(temanSholihin);

// soal 5
const warnaBudi = ['merah', 'biru', 'kuning', 'hijau'];
warnaBudi.splice(1, 2);
warnaBudi.shift();
console.log(warnaBudi);
