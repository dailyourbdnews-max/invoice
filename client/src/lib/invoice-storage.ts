import { Invoice } from "@/types/invoice";

const STORAGE_KEY = "invoices";

export class InvoiceStorage {
  static getAll(): Invoice[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error loading invoices:", error);
      return [];
    }
  }

  static save(invoice: Invoice): void {
    try {
      const invoices = this.getAll();
      const existingIndex = invoices.findIndex(inv => inv.id === invoice.id);
      
      if (existingIndex >= 0) {
        invoices[existingIndex] = { ...invoice, updatedAt: new Date().toISOString() };
      } else {
        invoices.unshift({ ...invoice, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
    } catch (error) {
      console.error("Error saving invoice:", error);
      throw new Error("Failed to save invoice");
    }
  }

  static getById(id: string): Invoice | null {
    const invoices = this.getAll();
    return invoices.find(inv => inv.id === id) || null;
  }

  static delete(id: string): void {
    try {
      const invoices = this.getAll();
      const filtered = invoices.filter(inv => inv.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error("Error deleting invoice:", error);
      throw new Error("Failed to delete invoice");
    }
  }

  static clear(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing invoices:", error);
      throw new Error("Failed to clear invoices");
    }
  }

  static generateInvoiceNumber(): string {
    const invoices = this.getAll();
    const prefix = "INV-";
    const numbers = invoices
      .map(inv => inv.invoiceNumber)
      .filter(num => num.startsWith(prefix))
      .map(num => parseInt(num.substring(prefix.length)))
      .filter(num => !isNaN(num));
    
    const maxNumber = numbers.length > 0 ? Math.max(...numbers) : 0;
    return `${prefix}${(maxNumber + 1).toString().padStart(3, '0')}`;
  }
}
