import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LonErsattning from "./pages/LonErsattning";
import SjukdomFranvaro from "./pages/SjukdomFranvaro";
import KontraktRattigheter from "./pages/KontraktRattigheter";
import Semester from "./pages/Semester";
import SkattUtbetalning from "./pages/SkattUtbetalning";
import PraktiskaSituationer from "./pages/PraktiskaSituationer";
import NotFound from "./pages/NotFound";
import ArbetsmiljoSakerhet from "./pages/ArbetsmiljoSakerhet";
import SchemalaggningPlanering from "./pages/SchemalaggningPlanering";
import PensionFormaner from "./pages/PensionFormaner";
import GDPRPage from "./pages/Gdpr";
import SjuklonForstaDagen from "./pages/SjuklonForstaDagen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lon-ersattning" element={<LonErsattning />} />
          <Route path="/sjukdom-franvaro" element={<SjukdomFranvaro />} />
          <Route path="/kontrakt-rattigheter" element={<KontraktRattigheter />} />
          <Route path="/semester" element={<Semester />} />
          <Route path="/skatt-utbetalning" element={<SkattUtbetalning />} />
          <Route path="/praktiska-situationer" element={<PraktiskaSituationer />} />
          <Route path="/arbetsmiljo-sakerhet" element={<ArbetsmiljoSakerhet />} />
          <Route path="/schemalaggning-planering" element={<SchemalaggningPlanering />} />
          <Route path="/pension-formaner" element={<PensionFormaner />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/sjuklon-forsta-dagen" element={<SjuklonForstaDagen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
