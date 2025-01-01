import jsPDF from "jspdf";

export const generatePDF = (data) => {
  const doc = new jsPDF();
  doc.text("Training Plan", 20, 20);
  Object.entries(data).forEach(([key, value], index) => {
    doc.text(`${key}: ${value}`, 20, 30 + index * 10);
  });
  doc.save("training-plan.pdf");
};
