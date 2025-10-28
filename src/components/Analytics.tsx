import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export default function Analytics() {
  useEffect(() => {
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

    if (typeof window.gtag === 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag('js', new Date().toISOString());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }

    trackPageView();

    const handleCTAClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (link?.href?.includes('wa.me')) {
        trackEvent('whatsapp_click', {
          button_location: link.getAttribute('data-location') || 'unknown',
        });
      }

      if (link?.href?.includes('#catalogo') || target.textContent?.includes('Comprar')) {
        trackEvent('catalog_interaction', {
          action: 'view_product',
        });
      }
    };

    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleCTAClick);
    };
  }, []);

  const trackPageView = () => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  };

  const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  return null;
}
