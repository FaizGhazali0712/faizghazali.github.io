//function expression example 1
const greetWorld = function () {
    console.log('Hello, World!');
} 
greetWorld();
// function expression example 2
const convertCeleciusToFahrenheit = function (temperature) {
    const result = (9/5) * temperature + 32;
    return result;
}; 
const temperatureInFahrenheit = convertCeleciusToFahrenheit(90);
console.log('Hasil Konversi:', temperatureInFahrenheit);
// first-calss citizen example
function multiply(a, b) {
    return a * b;
}
function calculate(operation, numA, numB) {
    return operation(numA, numB);
}
const hasil = calculate(multiply, 2, 4);
console.log(hasil);
// first class citizen example again
function multipler(x) {
    return function (num) {
        return x * num;
    };
}
const double = multipler(2);
const triple = multipler(3);
console.log(double(10));
console.log(triple(11));
// WE NEED CALLBACK NOW!
function salam(nama, callback) {
    console.log("Halo, " + nama);
    callback();
}
function selamatTinggal() {
    console.log("Sampai Jumpa!");
}
salam("Andi", selamatTinggal);
// GET TIMEOUT NOOB!!!!!!!
setTimeout(function() {
    console.log("This message will appear after 60 seconds");
}, 60000);
// rematch!
// Declaration first!
console.log(sapa("Andi!"));
function sapa(nama) {
    return "Halo, " + nama;
}
// Now your turn Expression!

// const sapa = function(nama) {
//     return "Halo, " + nama;
// };
// console.log(sapa("Budi!"));


// soal 1
const buatPesanan = function(namaPelanggan) {
    return "Pesanan atas nama Andi: " + namaPelanggan;
};
console.log(buatPesanan("Nasi Goreng"));

// soal 2
console.log(hitungDiskonDeklarasi('90000'));
function hitungDiskonDeklarasi(harga, diskon) {
    return "Harga setelah diskon (deklarasi): " + harga, diskon;

};
const hitungDiskonEkspresi = function(harga, diskon) {
    return "Harga setelah diskon (ekspresi): " + harga, diskon;

};
console.log(hitungDiskonEkspresi('90000'));

// soal 3
function prosesPesanan(namaPelanggan, callback) {
    console.log("Pesanan untuk Dika sedang diproses... " + namaPelanggan);
    callback();
}
function PesananSelesai() {
    console.log("Pesanan telah selesai disiapkan!");
}
prosesPesanan("", PesananSelesai);