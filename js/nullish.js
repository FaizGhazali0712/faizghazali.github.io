// ini adalah nullish
let username = "Faiz";
let displayName = username ?? "Guest";
console.log(displayName);
// ini adalah contoh nullish yang ke-2
let namaPengguna = "";
let displayNameWithOr = namaPengguna || "Guest";
let displayNameWithNullish = namaPengguna ?? "Guest";
console.log(displayNameWithOr);
console.log(displayNameWithNullish); 

//prioritas 
let result = null || (undefined ?? "Default");
console.log(result);

// let userInput = null;
// let isLoggedIn = true;

// let displayNAme = isLoggedIn && (userInput ?? "Guest");
// console.log(displayNAme);

//latihan
let isLoggedIn = true;
let sstatus = isLoggedIn ? "Active" : "InActive";
console.log(sstatus)

let _name = null;
let nickname = "John";
let user = _name ?? nickname;
console.log(user)

let value = 0;
let ressult = value || 100;
console.log(ressult);

let a = null;
let b = 5;
let c = a ?? b;
console.log(c);

let value1 = 0;
let resssult = value1 ?? 100;
console.log(resssult);

let x = false;
let y = x ?? "Default";
console.log(y);

let UnName = "username";
let NickName = "nickname";
let hasil = null || (undefined ?? "Anonymous");
console.log(hasil);
let hargaBarang = 0;
let hassil = hargaBarang ?? 100;
console.log(hassil);

let isTryLoggedIn = null;
let isAlreadyLoggedIN = true;
let Name = isAlreadyLoggedIN && (isAlreadyLoggedIN ?? "Guest");
console.log(Name);


