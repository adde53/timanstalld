import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "declined" | null;

function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (stored === "accepted" || stored === "declined") {
    return stored;
  }
  return null;
}

function setConsentStatus(status: "accepted" | "declined") {
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [consentStatus, setConsentStatusState] = useState<ConsentStatus>(null);

  useEffect(() => {
    const status = getConsentStatus();
    setConsentStatusState(status);
    // Only show banner if user hasn't made a choice yet
    if (status === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus("accepted");
    setConsentStatusState("accepted");
    setVisible(false);
    // Here you could initialize analytics/tracking cookies
    console.log("Cookies accepted - analytics can be initialized");
  };

  const handleDecline = () => {
    setConsentStatus("declined");
    setConsentStatusState("declined");
    setVisible(false);
    // Ensure no tracking cookies are set
    console.log("Cookies declined - no analytics will be loaded");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container-page">
        <div className="bg-card border border-border rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                Vi använder cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                Denna webbplats använder cookies för att förbättra din upplevelse. 
                Vi använder endast nödvändiga cookies om du inte godkänner.{" "}
                <Link 
                  to="/gdpr" 
                  className="text-primary hover:underline underline-offset-2"
                >
                  Läs mer om vår cookie-policy
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 sm:flex-none"
              >
                Endast nödvändiga
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 sm:flex-none"
              >
                Acceptera alla
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export helper to check consent status elsewhere in the app
export function hasAnalyticsConsent(): boolean {
  return getConsentStatus() === "accepted";
}
