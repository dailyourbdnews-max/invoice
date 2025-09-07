import { FileText } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="text-primary-foreground text-sm" />
              </div>
              <span className="text-xl font-bold text-gray-900">InvoicePro</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              InvoicePro provides an easy-to-use invoice generation tool that helps
              businesses create professional invoices quickly.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors" data-testid="link-social-youtube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors" data-testid="link-social-linkedin">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors" data-testid="link-social-facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors" data-testid="link-social-instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.243-1.197-3.684 0-1.441.449-2.735 1.197-3.684.749-.948 1.9-1.559 3.197-1.559 1.297 0 2.448.611 3.197 1.559.748.948 1.197 2.243 1.197 3.684 0 1.441-.449 2.735-1.197 3.684-.749.948-1.9 1.559-3.197 1.559zm7.138-.492c-.746 0-1.35-.604-1.35-1.35 0-.746.604-1.35 1.35-1.35.746 0 1.35.604 1.35 1.35 0 .746-.604 1.35-1.35 1.35z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/invoicing-guide" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm" data-testid="link-invoicing-guide">
                Invoicing Guide
              </Link>
              <Link href="/help-center" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm" data-testid="link-help-center">
                Help Center
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/terms-of-service" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm" data-testid="link-terms">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm" data-testid="link-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm" data-testid="link-home">
                Home
              </Link>
              <Link href="/contact-us" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm" data-testid="link-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 InvoicePro. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Go to Settings to activate Windows
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}