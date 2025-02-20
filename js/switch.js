const fruit = 'Mango';
// ini adalah contoh pertama
switch (fruit) {
    case 'Blackberry':
        console.log('I am a Blackberry');
    break;
    case 'Man':
        console.log('I am a Man');
    break;
    case 'Kiwi':
        console.log('I am a Kiwi');
    break;
    case 'Apricots':
        console.log('I am an Apricots');
    break;
    default:
        console.log('I am not a fruit. I am a gamer.');
}
// if and else compare to switch
const hari = new Date().getDay();
if (hari === 0) {
    console.log('Ahad');
} else if (hari === 1) {
    console.log('Senin');
} else if (hari === 2) {
    console.log('Selasa');
} else if (day === 3) {
    console.log('Rabu');
} else if (hari === 4) {
    console.log('Khamis');
} else if (hari === 5) {
    console.log('Jumat');
} else if (hari === 6) {
    console.log('Sabtu');
} else {
    console.log('Hari ini tidak benar');
}
// switch time 
const day = new Date().getDay();
switch (day) {
    case 0:
        console.log('Ahad');
    break;
    case 1:
        console.log('Senin');
    break;
    case 2:
        console.log('Selasa');
    break;
    case 3:
        console.log('Rabu');
    break;
    case 4:
        console.log('Khamis');
    break;
    case 5:
        console.log('Jumat');
    break;
    case 6:
        console.log('Sabtu');
    break;
    default:
        console.log('Hari ini tidak valid');

}
// ini adalah jika switch kelupaan memnggunakan break
const nomor = 2;
switch (nomor) {
    case 1:
        console.log('Ini 1');
    break;
    case 2:
        console.log('Ini 2');
    case 3:
        console.log('Ini 3');
    break;
    default:
        console.log('Ini default tolol!');
}
// case yang bisa belah
let buah = "apple";
switch (buah) {
    case "apple":
    case "banana":
        console.log("Ini adalah Buah!");
        break;
        case "carrot":
        console.log("Ini adalah SAYUR!!!");
        break;
        default:
            console.log("YNTKS");
        
}
// tipe pengaruh
let value = "10";
switch (value) {
    case 10:
        console.log("Angka 10");
    break;
    case "10":
        console.log("String 10");
    break;
}






// soal 1
let warnaLampu = "Hijau";
switch (warnaLampu) {
    case "Merah":
        console.log("Berhenti.");
    break;
    case "Kuning":
        console.log("Siap-Siap.");
    break;
    case "Hijau":
        console.log("JALAN!");
    break;
    default:
        console.log("Sori, gak kenal warna yang lo input.")

}

// soal 2
let Diskon = "Rp 250.000";
switch (Diskon) {
    case "Rp 95.000":
        console.log("Gak ada Diskon sorry")
    break;
    case "Rp 250.000":
        console.log("Diskon 10%");
    break;
    case "Rp 400.000":
        console.log("Diskon 20%");
    break;

}
// soal 3
let jadwal = "Ahad";
switch (jadwal) {
    case "Ahad":
        console.log("Libur");
    break;
    case "Senin":
        console.log("09:00-17:00");
    break;
    case "Selasa":
        console.log("09:00-17:00");
    break;
    case "Rabu":
        console.log("09:00-17:00");
    break;
    case "Khamis":
        console.log("09:00-17:00");
    break;
    case "Jumat":
        console.log("09:00-17:00");
    break;
    case "Sabtu":
        console.log("09:00-13:00");
    break;
    default:

}
//soal 4
let Menu = "4";
switch (Menu) {
    case "1":
        console.log("Ayam Goreng");
    break;
    case "2":
        console.log("Burger");
    break;
    case "3":
        console.log("Kentang Goreng");
    break;
    case "4":
        console.log("Minuman");
    break;
    default:
        console.log("Menu Tidak Tersedia / Habis")
}
// soal 5
let extraNilai = "3";
switch (extraNilai) {
    case "1":
        console.log("Matematika");
    break;
    case "2":
        console.log("Fisika");
    break;
    case "3":
        console.log("Biologi");
    break;
    case "4":
        console.log("Kimia");
    break;
    default:
        console.log("Mata Pelajaran Tidak Tersedia")
}


let trafficLight = "red";
let message = ""
 
switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}
 
console.log(message)