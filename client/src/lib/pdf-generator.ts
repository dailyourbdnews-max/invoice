import { Invoice, InvoiceCalculations } from "@/types/invoice";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function calculateInvoiceTotals(invoice: Invoice): InvoiceCalculations {
  const subtotal = invoice.items.reduce((sum, item) => sum + item.amount, 0);
  const taxAmount = (subtotal * invoice.taxRate) / 100;
  const discountAmount = (subtotal * invoice.discountRate) / 100;
  const total = subtotal + taxAmount - discountAmount;

  return {
    subtotal,
    taxAmount,
    discountAmount,
    total
  };
}

export async function generatePDF(invoice: Invoice): Promise<void> {
  try {
    // Get the invoice preview element
    const element = document.querySelector('.invoice-preview') as HTMLElement;
    if (!element) {
      throw new Error('Invoice preview not found');
    }

    // Generate canvas from the invoice preview
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 190; // A4 width minus margins
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 10; // Top margin

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add new pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight + 10;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Download the PDF
    pdf.save(`invoice-${invoice.invoiceNumber}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Fallback to print dialog
    window.print();
  }
}

export function generatePrintPDF(invoice: Invoice): void {
  // For print functionality, still use browser print
  window.print();
}

export function downloadInvoiceData(invoice: Invoice): void {
  const dataStr = JSON.stringify(invoice, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `invoice-${invoice.invoiceNumber}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}
