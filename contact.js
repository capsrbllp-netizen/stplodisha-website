const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  const { name, phone, email, interest, message } = req.body || {};

  if (!name || !phone) {
    res.status(400).json({ success: false, error: 'Name and phone number are required.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Siba Toughened Website" <${process.env.GMAIL_USER}>`,
      to: 'sibatoughened@gmail.com',
      replyTo: email || undefined,
      subject: `New Website Enquiry — ${name}`,
      text: `New enquiry received from the Siba Toughened website:

Name: ${name}
Phone: ${phone}
Email: ${email || '-'}
Interested In: ${interest || '-'}
Message: ${message || '-'}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    res.status(500).json({ success: false, error: 'Could not send enquiry right now. Please call us directly.' });
  }
};
