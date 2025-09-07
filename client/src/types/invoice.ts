export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface PaymentDetails {
  bankName?: string;
  accountNumber?: string;
  routingNumber?: string;
  paypalEmail?: string;
  upiId?: string;
  bkashNumber?: string;
  nagadNumber?: string;
  paymentLink?: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  fromCompany: string;
  fromAddress: string;
  fromEmail: string;
  fromLogo?: string;
  toCompany: string;
  toAddress: string;
  toEmail: string;
  items: InvoiceItem[];
  taxRate: number;
  discountRate: number;
  shippingFee: number;
  notes: string;
  paymentMethods: string[];
  paymentDetails: PaymentDetails;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  createdAt: string;
  updatedAt: string;
}

export interface InvoiceCalculations {
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingFee: number;
  total: number;
}
