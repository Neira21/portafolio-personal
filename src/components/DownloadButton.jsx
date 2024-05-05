const DownloadButton = () => {
  const handleDownload = () => {
    // Se obtiene la ruta del archivo PDF dentro de la carpeta public
    const pdfPath = '/pdfs/CV-Alvaro-Neira-Riveros-Web-Developer.pdf';
    
    // Se crea un enlace <a> invisible para descargar el archivo
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'CV-Alvaro-Neira-Riveros-Web-Developer.pdf';
    
    // Se agrega el enlace al DOM y se simula un clic para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    
    // Se elimina el enlace del DOM después de la descarga
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Descargar CV</button>
  );
};

export default DownloadButton;
