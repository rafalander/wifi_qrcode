const form = document.getElementById('wifiForm');
const qrcodeContainer = document.getElementById('qrcodeContainer');
const canvas = document.getElementById('qrcode');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const connection = document.getElementById("connection").value;
    const password = document.getElementById("password").value;
    const securityType = document.getElementById("securityType").value;

    const wifiData = `WIFI:T:${securityType};S:${connection};P:${password};;`;

    QRCode.toCanvas(canvas, wifiData, {
      color: {
        dark: '#000',
        light: '#fff'
      }
    }, function (error) {
      if (error) console.error(error);
      console.log('QR Code gerado!');
      
      // Atualiza o título com o nome da conexão
      document.getElementById('wifiNameDisplay').innerText = connection;
      
      // Mostra o QR Code e esconde o formulário
      form.style.display = 'none';
      qrcodeContainer.style.display = 'block';
    });
});

// Botão para baixar o QR Code
document.getElementById('downloadBtn').addEventListener('click', function() {
    const wifiName = document.getElementById('wifiNameDisplay').innerText;
    const link = document.createElement('a');
    link.download = `wifi-${wifiName}.png`;
    link.href = canvas.toDataURL();
    link.click();
});

// Botão para criar novo QR Code
document.getElementById('newQrBtn').addEventListener('click', function() {
    form.style.display = 'block';
    qrcodeContainer.style.display = 'none';
    form.reset();
});