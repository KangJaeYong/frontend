import React from "react";
import "../App.css";
import PDFViewer from "./PDFViewer";

function Resume() {

  const handlePrint = () => {
    const pdfUrl = "/resume.pdf";
    const printWindow = window.open(pdfUrl);
    printWindow.onload = () => printWindow.print();
  };

  return (
    <div className="container">
      <h1>이력서</h1>

      <div className="pdf-buttons">
        <a href="/resume.pdf" download className="btn-outline">다운로드</a>
        <button onClick={handlePrint} className="btn-outline">출력하기</button>
      </div>

      {/* PDF 뷰어 */}
      <PDFViewer url="/resume.pdf" />
    </div>
  );
}

export default Resume;
