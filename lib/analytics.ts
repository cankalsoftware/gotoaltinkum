'use client';

/**
 * Utility for dispatching custom Google Analytics (GA4) events.
 * Enables tracking of outbound partner link clicks (Day Trip operators, Hotel pages, WhatsApp inquiries).
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', eventName, {
        ...eventParams,
        timestamp: new Date().toISOString(),
      });
      // Console log in development for immediate developer verification
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[GA4 Event] ${eventName}:`, eventParams);
      }
    } catch (err) {
      console.warn('Google Analytics event dispatch warning:', err);
    }
  }
}

export function trackOutboundClick(
  category: 'day_trip' | 'hotel' | 'restaurant' | 'beach_maps' | 'whatsapp' | 'partner' | 'currency_xe' | string,
  label: string,
  targetUrl: string
) {
  trackEvent('outbound_click', {
    event_category: category,
    event_label: label,
    destination_url: targetUrl,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
  });
}
