// contoh 1
// const temperaturInCelcius = 90;
// const temperaturInFahrenheit = 9 / 5 * temperaturInCelcius + 32;
// console.log('Hasil Konversi:', temperaturInFahrenheit);
// contoh 2
// let temperaturInCelcius;
// let temperaturInFahrenheit;
// temperaturInCelcius = 50;
// temperaturInFahrenheit = 9 / 5 * temperaturInCelcius + 32;
// console.log('Hasil Konversi:', temperaturInFahrenheit);

// temperaturInCelcius = 70;
// temperaturInFahrenheit = 9 / 5 * temperaturInCelcius + 32;
// console.log('Hasil Konversi;', temperaturInFahrenheit);

// temperaturInCelcius = 100;
// temperaturInFahrenheit = 9 / 5 * temperaturInCelcius + 32;
// console.log('Hasil Konversi', temperaturInFahrenheit);

// contoh function pertama 
function sapa() {
    console.log("Halo, Selamat Belajar Javascript");
} sapa(); // Memanggil Fungsi
// contoh identifier
function greetWorld() {
    console.log('Hello Morons!');
} greetWorld();
// function convertCelciusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = 9 / 5 * temperature + 32;
//     console.log('Hasil Konversi:', temperatureInFahrenheit);
// } 
// const temperatureInCelcius = 90;
// // hanya menampilkan nilai function
// console.log(convertCelciusToFahrenheit);
// // akan menjalankan isi function
// convertCelciusToFahrenheit(temperatureInCelcius);

// function jahannnnam
function hitungPersegi (panjang, lebar) {
    let luas = panjang * lebar;
    console.log("Luas Persegi:" + luas);

}
hitungPersegi(5, 4);
//function jahannnam no.2
function contohLokal() {
    let pesan = "Ini adalah pesan dari langit";
    console.log(pesan);
}
contohLokal();

//fucntion jahannnam no.3
function tampilkanPesan(pesan) {
    console.log(pesan);
}
tampilkanPesan("Selamat Datang DI Neraka!");
//function 4
function convertCelciusToFahrenheit(suhu){
    const temperatureInFahrenheit = 9 / 5 * suhu + 32;
    console.log('Hasil Konversi: ', temperatureInFahrenheit);
}
// Argument
const temperatureInCelcius = 90;
convertCelciusToFahrenheit(temperatureInCelcius);
convertCelciusToFahrenheit(100);

//nilai default parameter
function perkenalan(nama){
    nama = nama || "Anonim";
    console.log("Halo,"+ nama);

}
perkenalan();
perkenalan("Faiz");  
//return value
function tambah(a, b) {
    return a + b;
}
let hasil = tambah(3, 4);
console.log(hasil);
console.log(tambah(10, 20));
//return value 2
const result = console.log('Javascript itu KEREN!');
console.log(result);




function sumNumbers(a, b){
    const result = a + b;
    return result;
}
const Hasil = sumNumbers(2, 4);
console.log('2 + 4:', Hasil);

function hitungLuasLingkaran(jarijari) {
    return 3.14 * jarijari * jarijari;

} console.log(hitungLuasLingkaran(7));
 
// Alih-alih komentar
function penjumlahan(a, b) {
    return a + b; //fungsi menggambarkan operasi penjumlahan
} console.log(penjumlahan(2, 3)); // hasilnya: 5



// soal 1
function tambah(a = 5, b = 10) {
    return a + b;

} tambah();

//soal 2
function greeting(Name){
     Name = Name || "Tamu";
    console.log("Halo," + Name);
}
greeting();
greeting(); 

function hitungBayarParkir(ab, ba){
    return ab + ba;
}
let jumlahPembayaran = hitungBayarParkir(3000, 2000);
console.log(jumlahPembayaran);
console.log(hitungBayarParkir(3000, 2000));


//soal 3
function cekKelulusan(nilai) {
    let NilaiAkhir = 95;
    if (NilaiAkhir >= 75) {
        console.log("Lulus!");

    } else {
        console.log("Tidak Lulus");
    }
} const NilaiAkhir = 65;
 console.log(cekKelulusan);
 cekKelulusan()


//soal 4
function cekMedali() {
    let NilaiMedali = 61;
    if (NilaiMedali >= 90) {
        console.log("Medali Emas!");
    } else if (NilaiMedali >= 75 - 89) {
        console.log("Medali Perak!");
    } else if (NilaiMedali >= 60 - 74) {
        console.log("Medali Perunggu!");
    } else {
        console.log("Kasihan tidak dapat medali.");
    }       
}   const Medali = 90;
console.log(cekMedali);
cekMedali(Medali);
