const dataNilaiKu = [
    { namaMK: "Statistika", nilai: 80, sks: 2 },
    { namaMK: "Pemrograman Web", nilai: 90, sks: 3 },
    { namaMK: "Basis Data", nilai: 85, sks: 3 },
    { namaMK: "Algoritma dan Struktur Data", nilai: 75, sks: 2 },
    { namaMK: "Sistem Operasi", nilai: 70, sks: 2 },
    { namaMK: "Jaringan Komputer", nilai: 95, sks: 3 },
];


function hitungRataRata(dataArray) {
    let totalNilai = 0;
    let totalSKS = 0;

    dataArray.forEach(item => {
        totalNilai += item.nilai * item.sks;
        totalSKS += item.sks;
    });

    return totalSKS > 0 ? totalNilai / totalSKS : 0;
};

function konversiGrade(nilai) {
    if (nilai >= 85) return "A";
    else if (nilai >= 75) return "B";
    else if (nilai >= 60) return "C";
    return "D";
};

console.log("--- Rincian Grade Mata Kuliah ---");

dataNilaiKu.forEach(item => {
    let huruf = konversiGrade(item.nilai); 
    console.log(`${item.namaMK}: ${item.nilai} (Grade ${huruf})`);
});