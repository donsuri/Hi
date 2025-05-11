function downloadLogo() {
    const logoContainer = document.querySelector('.logo-container');
    
    html2canvas(logoContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'pesticide-logo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
