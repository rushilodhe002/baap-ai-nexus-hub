import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "@/components/Chatbot";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Utilities from "./pages/Utilities";
import Services from "./pages/Services";
import Team from "./pages/Team";
import AIProducts from "./pages/AIProducts";
import AIUtilities from "./pages/AIUtilities";
import AIServices from "./pages/AIServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/ai-products" element={<AIProducts />} />
          <Route path="/ai-utilities" element={<AIUtilities />} />
          <Route path="/ai-services" element={<AIServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
