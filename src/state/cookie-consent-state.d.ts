import type {CookieConsentRecord} from "chums-types";

export interface CookieConsentState {
    status: 'idle' | 'loading' | 'saving' | 'rejected';
    record: CookieConsentRecord | null;
    dismissed: boolean;
}
