// Countdown Timer untuk Jerome Polin Collaboration (mundur ke 30 Juni 2025)
const targetDate = new Date("2025-06-30T23:59:59").getTime();

function updateCountdown() {
  const difference = Math.max(targetDate - Date.now(), 0);

  const values = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };

  Object.keys(values).forEach(function (id) {
    const element = document.getElementById(id);
    if (element) element.textContent = values[id];
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Validasi form kontak
  const contactForm = document.querySelector(".contact-form");
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form langsung terkirim

    const nameInput = contactForm.querySelector("input[name='name']");
    const emailInput = contactForm.querySelector("input[name='email']");
    const messageInput = contactForm.querySelector("textarea[name='message']");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Hapus pesan error sebelumnya
    contactForm.querySelectorAll(".error-msg").forEach((el) => el.remove());

    let hasError = false;

    if (name === "") {
      showError(nameInput, "Nama tidak boleh kosong.");
      hasError = true;
    }

    if (email === "") {
      showError(emailInput, "Email tidak boleh kosong.");
      hasError = true;
    } else if (!validateEmail(email)) {
      showError(emailInput, "Format email tidak valid. Contoh: user@email.com");
      hasError = true;
    }

    if (message === "") {
      showError(messageInput, "Pesan tidak boleh kosong.");
      hasError = true;
    }

    // Jika tidak ada error, lanjutkan kirim (simulasi)
    if (!hasError) {
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = "Mengirim...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert("Pesan Anda telah terkirim dan akan segera dibalas oleh tim Yellow Fit Kitchen.");
        contactForm.reset();
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }, 1500);
    }
  });

  function showError(inputElement, message) {
    const error = document.createElement("small");
    error.className = "error-msg text-danger d-block mt-1";
    error.innerText = message;
    inputElement.parentElement.appendChild(error);
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
