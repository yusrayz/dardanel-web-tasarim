document.getElementById("inceleBtn").addEventListener("click", function(){

    alert("Ürünler sayfasına yönlendiriliyorsunuz.");

});
function mesajGonder() {
    alert("Mesajınız başarıyla gönderildi!");
}

function urunBilgi() {
    alert("Bu ürün hakkında detaylı bilgi yakında eklenecektir.");
}

function formKontrol() {

    let isim = document.querySelector("input[type='text']").value;

    if (isim === "") {
        alert("Lütfen adınızı giriniz.");
        return false;
    }

    alert("Form başarıyla gönderildi.");
    return true;
}