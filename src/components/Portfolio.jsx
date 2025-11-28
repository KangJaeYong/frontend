import React from "react";
import "../App.css";
import PDFViewer from "./PDFViewer";

function Portfolio() {

  const handlePrint = () => {
    const pdfUrl = "/portfolio.pdf";
    const printWindow = window.open(pdfUrl);
    printWindow.onload = () => printWindow.print();
  };

  return (
    <div className="container">
      <h1>포트폴리오</h1>

      <div className="pdf-buttons">
        <a href="/portfolio.pdf" download className="btn-outline">다운로드</a>
        <button onClick={handlePrint} className="btn-outline">출력하기</button>
      </div>

      <PDFViewer url="/portfolio.pdf" />
    </div>
  );
}

export default Portfolio;
