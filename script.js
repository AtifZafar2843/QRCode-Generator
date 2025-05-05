document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const qrInput = document.getElementById('qrInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrResult = document.getElementById('qrResult');
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyBtn = document.getElementById('copyBtn');
    const errorMessage = document.getElementById('errorMessage');

    let qrcode = null;

    // Generate QR Code
    generateBtn.addEventListener('click', () => {
        const inputValue = qrInput.value.trim();
        
        // Input validation
        if (!inputValue) {
            showError('Please enter a URL or text');
            return;
        }

        // Clear previous QR code
        qrcodeDiv.innerHTML = '';
        hideError();

        // Generate new QR code
        qrcode = new QRCode(qrcodeDiv, {
            text: inputValue,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });

        // Show QR result section
        qrResult.classList.remove('hidden');
    });

    // Download QR Code
    downloadBtn.addEventListener('click', () => {
        const canvas = qrcodeDiv.querySelector('canvas');
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });

    // Copy Link
    copyBtn.addEventListener('click', () => {
        const inputValue = qrInput.value.trim();
        if (!inputValue) return;

        navigator.clipboard.writeText(inputValue)
            .then(() => {
                // Visual feedback for copy
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });

    // Helper functions
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    }

    function hideError() {
        errorMessage.classList.add('hidden');
    }

    // Clear error message when user starts typing
    qrInput.addEventListener('input', () => {
        hideError();
    });
}); 