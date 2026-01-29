import { CommunicationChannel } from "@/constant/airtable";

export type AirtableRequestBody = {
  name: string;
  organization: string;
  communicationChannel: CommunicationChannel;
  contactDetails: string;
};
