import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type InquiryId = bigint;
export interface Inquiry {
    name: string;
    businessType: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    /**
     * / Retrieves all inquiries (admin only)
     */
    getAllContacts(password: string): Promise<Array<Inquiry>>;
    /**
     * / Retrieves a specific inquiry by ID (admin only)
     */
    getInquiryById(password: string, inquiryId: InquiryId): Promise<Inquiry>;
    /**
     * / Submits a new inquiry
     */
    submitContactForm(name: string, phone: string, email: string, businessType: string, message: string): Promise<InquiryId>;
}
