function s1() {
    document.getElementById("input").value += "1";
}
function s2() {
    document.getElementById("input").value += "2";
}
function s3() {
    document.getElementById("input").value += "3";
} 
function s4() {
    document.getElementById("input").value += "4";
}
function s5() {
    document.getElementById("input").value += "5";
}
function s6() {
    document.getElementById("input").value += "6";
}
function s7() {
    document.getElementById("input").value += "7";
}   
function s8() {
    document.getElementById("input").value += "8";
}
function s9() { 
    document.getElementById("input").value += "9";
}
function s0() {
    document.getElementById("input").value += "0";
}
function temizle() {
    document.getElementById("input").value = "";
}          

let sayi1 = null;
let islem = null;

function topla () {
    sayi1 = document.getElementById("input").value;
    islem = "+";
    document.getElementById("input").value = "";
}
function cikar () {
    sayi1 = document.getElementById("input").value;
    islem = "-";
    document.getElementById("input").value = "";
}
function carp() {
    sayi1 = document.getElementById("input").value;
    islem = "*";
    document.getElementById("input").value = "";
}
function bol() {
    sayi1 = document.getElementById("input").value;
    islem = "/";
    document.getElementById("input").value = "";
}

function hesapla() {
    let sayi2 = document.getElementById("input").value;
    let sonuc = 0;

    if (islem === "+") {
        sonuc = parseFloat(sayi1) + parseFloat(sayi2);
        document.getElementById("input").value = sonuc;
    } else if (islem === "-") {
        sonuc = parseFloat(sayi1) - parseFloat(sayi2);
        document.getElementById("input").value = sonuc;
    } else if (islem === "*") {
        sonuc = parseFloat(sayi1) * parseFloat(sayi2);
        document.getElementById("input").value = sonuc;
    } else if (islem === "/") {
        if (parseFloat(sayi2) === 0) {
            document.getElementById("input").value = "Hata: Sıfıra bölme!";
        } else {
            sonuc = parseFloat(sayi1) / parseFloat(sayi2);
            document.getElementById("input").value = sonuc;
        }
    }
    islem = null; // İşlemi sıfırla

}