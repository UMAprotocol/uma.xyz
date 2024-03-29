export const defaultApr = process.env.NEXT_PUBLIC_DEFAULT_APR ?? "30.1";
export const overrideApr: string | undefined = process.env.NEXT_PUBLIC_OVERRIDE_APR;
export const totalValueSecured = process.env.NEXT_PUBLIC_TVS ?? "0";
export const oevLostFallback = process.env.NEXT_PUBLIC_OEV_LOST ?? "0";
export const GA_TAG = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG;
