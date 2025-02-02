import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Convierte tus archivos de XML a PDF</h1>
      <p className="paragraph">
        ¿Cansado de descargar uno por uno tus archivos XML para convertirlos a PDF? Aquí te ayudamos a convertirlos todos o de uno en uno al instante.
      </p>
      <button className="button">Agregar archivos</button>

      {/* Nueva sección para previsualización */}
      <div className="preview-section">
        <button className="preview-button">Previsualizar PDF</button>
        <img
          className="pdf-image"
          src="https://via.placeholder.com/150x200.png?text=PDF"
          alt="Vista previa de un PDF genérico"
        />
      </div>
    </div>
  );
};

export default App;