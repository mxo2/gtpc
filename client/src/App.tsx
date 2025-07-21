import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Delegation from "@/pages/delegation";
import Training from "@/pages/training";
import Membership from "@/pages/membership";
import Contact from "@/pages/contact";
import Consultancy from "@/pages/consultancy";
import Gallery from "@/pages/gallery";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import CookiesPolicy from "@/pages/cookies-policy";
import Admin from "@/pages/admin";
import ISBBE from "@/pages/isbbe";
import CancellationRefund from "@/pages/cancellation-refund";
import ShippingDelivery from "@/pages/shipping-delivery";
import DataDeletion from "@/pages/data-deletion";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/delegation" component={Delegation} />
          <Route path="/training" component={Training} />
          <Route path="/consultancy" component={Consultancy} />
          <Route path="/isbbe" component={ISBBE} />
          <Route path="/membership" component={Membership} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/cookies-policy" component={CookiesPolicy} />
          <Route path="/cancellation-refund" component={CancellationRefund} />
          <Route path="/shipping-delivery" component={ShippingDelivery} />
          <Route path="/data-deletion" component={DataDeletion} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieBanner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
