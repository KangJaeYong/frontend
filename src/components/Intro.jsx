import React from "react";
import "../App.css";
import PDFViewer from "./PDFViewer";

function Intro() {

  const handlePrint = () => {
    const pdfUrl = "/intro.pdf";
    const printWindow = window.open(pdfUrl);
    printWindow.onload = () => printWindow.print();
  };

  return (
    <div className="container">
      <h1>자기소개서</h1>

      <div className="pdf-buttons">
        <a href="/intro.pdf" download className="btn-outline">다운로드</a>
        <button onClick={handlePrint} className="btn-outline">출력하기</button>
      </div>

      <PDFViewer url="/intro.pdf" />
    </div>
  );
}

export default Intro;
