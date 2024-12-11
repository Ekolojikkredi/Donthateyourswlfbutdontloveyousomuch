// Menü Butonları Animasyonu
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.backgroundColor = "#357ABD";
    });
    
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.backgroundColor = "#4A90E2";
    });
});

// Veri Girişi Sonrasında Görsel Animasyon
const wasteEntryForm = document.getElementById("waste-entry-form");
wasteEntryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Animasyon efekti ekleme
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.disabled = true; // Butonu devre dışı bırak
    submitButton.style.backgroundColor = "#4DA98F"; // Buton rengi değişiyor
    submitButton.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.style.transform = "scale(1)";
        submitButton.style.backgroundColor = "#5CC1B4"; // Buton eski rengine dönüyor
        alert("Veri başarıyla kaydedildi!");
    }, 1500); // 1.5 saniye sonra butonu aktif hale getir
});
