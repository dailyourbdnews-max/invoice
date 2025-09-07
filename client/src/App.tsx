import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import InvoiceGenerator from "@/pages/invoice-generator";
import ContactUs from "@/pages/contact-us";
import InvoicingGuide from "@/pages/invoicing-guide";
import HelpCenter from "@/pages/help-center";
import TermsOfService from "@/pages/terms-of-service";
import PrivacyPolicy from "@/pages/privacy-policy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={InvoiceGenerator} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/invoicing-guide" component={InvoicingGuide} />
      <Route path="/help-center" component={HelpCenter} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
