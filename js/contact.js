const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
const errorMsg = document.getElementById('errorMsg');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';

  const payload = {
    name: document.getElementById('f-name').value.trim(),
    phone: document.getElementById('f-phone').value.trim(),
    email: document.getElementById('f-email').value.trim(),
    interest: document.getElementById('f-interest').value,
    message: document.getElementById('f-message').value.trim(),
  };

  if (!payload.name || !payload.phone) {
    errorMsg.textContent = 'Please fill in your name and phone number.';
    errorMsg.style.display = 'block';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (res.ok && data.success) {
      successMsg.style.display = 'block';
      form.reset();
    } else {
      errorMsg.textContent = data.error || 'Something went wrong. Please call us directly.';
      errorMsg.style.display = 'block';
    }
  } catch (err) {
    errorMsg.textContent = 'Could not send your enquiry. Please check your connection or call us directly.';
    errorMsg.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Enquiry';
  }
});
