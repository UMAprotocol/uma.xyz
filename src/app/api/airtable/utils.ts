import { CommunicationChannel } from "@/constant/airtable";

export const INTEGRATIONS = {
  osnap: {
    integration: "oSnap",
    referral: "oSnap Landing Page",
  },
} as const;

export type IntegrationId = keyof typeof INTEGRATIONS;
export type AirtableRequestBody = {
  name: string;
  organization: string;
  communicationChannel: CommunicationChannel;
  contactDetails: string;
  integration: IntegrationId;
};
