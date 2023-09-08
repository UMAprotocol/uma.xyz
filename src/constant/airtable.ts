export const communicationChannels = ["discord", "email", "telegram", "other"];

export type CommunicationChannels = typeof communicationChannels;

export type CommunicationChannel = CommunicationChannels[number];
