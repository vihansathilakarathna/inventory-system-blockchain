import React from "react";
import "./Reports.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Inventory from "../Inventory/Inventory";

export default function Reports() {
  const downloadPdf = () => {
    const input = document.getElementById('inventory-table');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('inventory-summary.pdf');
      })
      .catch((err) => {
        console.error('Error generating PDF:', err);
      });
  };

  return (
    <div>
      <p className="ai-title">Summary</p>
      <div className="reports" id="inventory-table">
        <p className="rep-tilte">Inventory Summary</p>
       
          <button className="report-btn"  onClick={downloadPdf}>Download Pdf</button>
          <Inventory showButtons={false}/>
      </div>
      
      <div className="reports" id="sales-summary">
        <p className="rep-tilte">Sales Summary</p>
        
          <button className="report-btn">Download Pdf</button>
        
      </div>
      <div className="reports">
        <p className="rep-tilte">Order Summary</p>
        
          <button className="report-btn">Download Pdf</button>
       
      </div>
    </div>
  );
}
