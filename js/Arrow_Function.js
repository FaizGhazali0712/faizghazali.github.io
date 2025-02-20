//before  arrow function
let temperatureInFahrenheit = null;
// Deklarasi function dengan regular function
const convertCelciusToFahrenheitUsingRegularFunction = function (temperature) {
    const result = (9/5) * temperature + 32;
    return result;
};
temperatureInFahrenheit = convertCelciusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// after arrow function
// Deklarasi function dengan arrow function
const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};
temperatureInFahrenheit = convertCelciusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// arrow function verssi ringkas
const convertCelciusToFahrenheitInConciseSyntax = 
    (temperature) => (9 / 5) * temperature + 32;
temperatureInFahrenheit = convertCelciusToFahrenheitInConciseSyntax(90);
console.log('Hasil Konversi:', temperatureInFahrenheit);

// fungsi biasa
function tambah(a, b) {
    return a + b;
}
console.log(tambah(3, 4));
// // fungsi arrow
// const tambah = (a, b) => a + b;
// console.log(tambah(3, 4));
// fungsi arrow multi-baris
const kali = (a, b) => {
    let hasil = a * b;
    return hasil;
};
console.log(kali(5, 3));
// fungsi arrow tanpa parameter
const sapa = () => "Halo, selamat datang!";
console.log(sapa());
// fungsi arroww dengan satu parameter
const cetakNama = nama => `Halo, ${nama}!`;
console.log(cetakNama("Tono"));



// soal 1
const salam = nama => `Halo, ${nama}!`;
console.log(salam("Faiz"));
// saoal 2
const tambahBangun = (panjang, lebar) => {
    let result = panjang * lebar;
    return result;
};
console.log(tambahBangun(4, 5));
//soal 3
const hitungDiskon = (harga) => {
    if (harga > 100000) {
        return harga - (harga * 0.20);
    } else {
        return harga;
    }
};
console.log(hitungDiskon(110000)); 
console.log(hitungDiskon(90000));
// soal 4
const cetakKata = () => "Halo, Dunia!";
console.log(cetakKata());
