function generateQRCode() {
    const inputText = document.getElementById('inputText').value;
    const qrCodeDiv = document.getElementById('qrCode');
  
    // Clear previous QR code
    qrCodeDiv.innerHTML = '';
  
    // Check if there is input text
    if (!inputText) {
      alert('Please enter text or URL.');
      return;
    }
  
    // Generate QR code
    const qr = new QRCode(document.getElementById('qrCode'), {
      text: inputText,
      width: 200,
      height: 200,
    });
  }
  