/**
 * Links into the Kitabu Yetu app, which is a separate deployment from this
 * marketing site. Override the host with NEXT_PUBLIC_APP_URL (see .env.example)
 * if the app moves or you need to point a preview build at staging.
 */
const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://kitabuyetu.co.ke"
).replace(/\/$/, "");

/**
 * The app's /register page reads ?product= and understands exactly two values,
 * defaulting to kitabu_yetu for anything else. Kept in sync with that contract.
 */
export type SignUpProduct = "kitabu_yetu" | "chama_reminder";

export const signUpUrl = (product?: SignUpProduct) =>
  product ? `${APP_URL}/register?product=${product}` : `${APP_URL}/register`;

export const signInUrl = () => `${APP_URL}/login`;
