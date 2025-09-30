import type {CookieConsentRecord} from "chums-types";
import type {CookieConsentInfo} from "chums-types/src/cookie-consent";

export interface CookieConsentState {
    status: 'idle' | 'loading' | 'saving' | 'rejected';
    record: CookieConsentRecord | null;
    dismissed: boolean;
    details: CookieConsentInfo|null;
}
