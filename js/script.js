
let isKelilingVisible = false;
function hideOrShow(){
    if(isKelilingVisible == false){
        isKelilingVisible = true;
        document.getElementById('luas-section').style.display = 'none';
        document.getElementById('keliling-section').style.display = 'block';
         } else {
        isKelilingVisible = false;
        document.getElementById('luas-section').style.display = 'block';
        document.getElementById('keliling-section').style.display = 'none';
        }
    }

/* Rumus Luas Segitiga */
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitungLuas = document.getElementById('hitungLuas')
const outputLuas = document.getElementById('outputLuas')
hitungLuasSegitiga.addEventListener ('click', function(){
a = parseFloat(alas.value);
t = parseFloat(tinggi.value); 
l = 0.5*a*t
if (isNaN(a) || isNaN(t)) {
    alert("Masukkan nilai alas dan tinggi dengan benar!");
    return;
}
outputLuas.innerHTML = `Luas Segitiga adalah ${l}`
})

/* Rumus Keliling Segitiga */
const sisiA = document.getElementById('sisiA')
const sisiB = document.getElementById('sisiB')
const sisiC = document.getElementById('sisiC')
const hitungKeliling = document.getElementById('hitungKeliling')
const outputKeliling = document.getElementById('outputKeliling')
hitungKelilingSegitiga.addEventListener('click', function(){
a = parseFloat(sisiA.value);
b = parseFloat(sisiB.value); 
c = parseFloat(sisiC.value); 
k = a+b+c;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Masukkan semua nilai sisi dengan benar!");
    return;
}
outputKeliling.innerHTML = `Keliling segitiga adalah ${k}`
})

/* Reset */
function reset(){
    document.getElementById("myForm").reset();
}

