import React from 'react';
import '../css/main.css';

const Boxes = ({ src }) => {
  const handleDownload = async (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'image.jpg'); // You can set the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <>
      <div className="textbox"></div>
      <div className="boxes">
        <img src={src} alt="error" />
        <a href="/" onClick={handleDownload}>Download</a>
      </div>
    </>
  );
};

export default Boxes;
