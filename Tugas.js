let usia = 18;

if (usia >= 18) {
  console.log("Kamu sudah besar.");
} else {
  console.log("Kamu masih kecil.");
}

let nilaiPBO = 85;
let nilaiRPL = 78;

if (nilaiPBO >= 70) {
  console.log("Kamu lulus ujian PBO.");
  
  if (nilaiRPL >= 70) {
    console.log("Kamu juga lulus ujian RPL.");
  } else {
    console.log("Kamu tidak lulus ujian RPL.");
  }
} else {
  console.log("Kamu tidak lulus ujian PBO.");
}

console.log("Selesai.");

//switch case
let bulan = "Februari";

switch (bulan) {
  case "Januari":
    console.log("Bulan ini adalah Januari.");
    break;
  case "Februari":
    console.log("Bulan ini adalah Februari.");
    break;
  case "Maret":
    console.log("Bulan ini adalah Maret.");
    break;
  case "April":
    console.log("Bulan ini adalah April.");
    break;
  case "Mei":
    console.log("Bulan ini adalah Mei.");
    break;
  case "Juni":
    console.log("Bulan ini adalah Juni.");
    break;
  case "Juli":
    console.log("Bulan ini adalah Juli.");
    break;
  case "Agustus":
    console.log("Bulan ini adalah Agustus.");
    break;
  case "September":
    console.log("Bulan ini adalah September.");
    break;
  case "Oktober":
    console.log("Bulan ini adalah Oktober.");
    break;
  case "November":
    console.log("Bulan ini adalah November.");
    break;
  case "Desember":
    console.log("Bulan ini adalah Desember.");
    break;
  default:
    console.log("Bulan tidak valid.");
    break;
}

//for statement
for (let i = 1; i <= 15; i++) {
    console.log("Logbook Mingguan ke-" + i);
}

//while, do while
let antrian = 1;

  while (antrian <= 5) {
    console.log("Antrian: " + antrian);
    antrian++;
}

let pesanan = 1;

do {
  console.log("Pesanan ke-" + pesanan);
  pesanan++;
} while (pesanan <= 5);

//function
function sapa(nama) {
    console.log("Halo, " + nama + " Bagaimana kabar mu?!");
  }
  
  sapa("Johnny"); 