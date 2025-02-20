// const user = {
//     name: 'Parjo',
//     'last name': 'Suparjo',
//     age: 25,
// // };
// console.log(user.name);
const sekolah = {
    name: 'Pondok Tahfidzh',
    'last name': 'Plus Abu Dzar',
    Alamat: 'Rumpin',
};
console.log(sekolah.alamat);
const biodata = {
    name: 'Ahmad',
    'last name': 'Bustomi',
    hobi: 'bermain sepakbola',
};
console.log(biodata['last name']);
const checkout = {
    'name': 'sepatu',
    'merk': 'Nike Air Jordan',
    jumlah: 30,
};
const { name, merk } = checkout;
console.log(name, merk);
// dengan object destructuring
const user1 = {
    id1: 24,
    email1: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};
const { id1, email1 } = user1;
console.log(id1, email1);
// tanpa object desstructuring
// const user = {
//     id: 24,
//     email: 'aras@dicoding.com',
//     name: 'Arsy',
//     nickname: 'Aras',
//     username: 'aras123',
//     password: 'secret',
// };
// const id = user.id;
// const email = user.email;
// console.log(id, email);
// super simple object destructuring
const user = { name: 'Yusuf'};
console.log(user.age);
//properti baru !!!
const account = {
    balance: 1000, //kere amat
    debt: 10, //astaghfirullah suka ngutang
};
account.balance = 2000; //masih kere
console.log(account.balance);
// properti lagi pula
const dataPenduduk = {
    'name': 'Thom',
    'last name': 'Haye',
    age: 28,
};
delete dataPenduduk.age;
console.log(dataPenduduk);
// properti dengan tanda siku LAGI!
const santri = {
    'name': 'Muhammad',
    'last name': 'Yusuf',
    age: 14,
};
delete santri['last name'];
console.log(santri);

// soal 1
const mobil = {
    merk: 'Nissan',
    tahun: '1989',
    warna: 'Oranye',

};
console.log(mobil);
// soal 2
const mobilMahal = {
    
    merk: 'BMW',
    tahun: '2009',
    warna: 'Merah',
    harga: '45000000',
};
console.log(mobilMahal);
// soal 3
const produk = {
    nama: 'Peci Original Rukyat',
    harga: '45000',
    stok: 40
};
produk.stok = 3;
console.log(produk.stok)
// soal 4
const game = {
    nama: "Minecraft",
    rating: 4.5,
    harga: 300000,

};
game.rating = 4.8;
console.log(game.rating);


// soal 5
const ProdukBaru = {
    nama: "SmartPhone",
    harga: 4000000,
    stock: 15,
}; 
console.log(ProdukBaru);
function beliProduk(produk, jumlah) {
    if (produk.stok >= jumlah) {
        produk.stok -= jumlah;
        console.log(`Stok berhasil dikurangi. Stok tersisa: ${produk.stok}`);
    } else {
        console.log("Stok habis.");
    }
};
beliProduk(ProdukBaru, 3);
