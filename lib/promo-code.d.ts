export interface PromoCode {
    id: number;
    promo_code: string;
    description: string;
    active: boolean;
    requirements: unknown;
    actions: unknown;
    valid_from: string | null;
    valid_to: string | null;
    require_code_entry: boolean;
}
