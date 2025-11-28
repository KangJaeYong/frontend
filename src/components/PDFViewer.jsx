import React, { useEffect, useState } from "react";
import { getDocument } from "pdfjs-dist";

import "pdfjs-dist/build/pdf.worker.entry";

function PDFViewer({ url }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    (async () => {
      const pdf = await getDocument(url).promise;
      const pageCount = pdf.numPages;

      const renderedPages = [];

      for (let i = 1; i <= pageCount; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.2 });

        // Canvas 생성
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        renderedPages.push(canvas.toDataURL());
      }

      setPages(renderedPages);
    })();
  }, [url]);

  return (
    <div>
      {pages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`page-${idx + 1}`}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "40px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
          }}
        />
      ))}
    </div>
  );
}

export default PDFViewer;
