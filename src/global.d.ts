// global.d.ts
export {};

declare global {
  interface Window {
    Cookiebot?: {
      consent?: {
        marketing: boolean;
        necessary: boolean;
        preferences: boolean;
        statistics: boolean;
      };
      runScripts?: (consentTypes: string) => void;
      withdrawConsent?: () => void;
      renew?: () => void;
      show?: () => void;
    };
  }
}
