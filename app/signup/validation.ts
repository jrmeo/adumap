// Available domains

const acceptableDoms: string[] = ["adamson.edu.ph"];

// Splitting
export function isEmailValid(email: string): boolean {
  const [, domain] = email.split("@");
  return acceptableDoms.includes(domain);
}
