export const defaultApr = process.env.NEXT_PUBLIC_DEFAULT_APR ?? "30.1";
export const overrideApr: string | undefined = process.env.NEXT_PUBLIC_OVERRIDE_APR;
export const totalValueSecured = parseInt(process.env.NEXT_PUBLIC_TVS ?? "83000000");
