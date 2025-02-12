export interface User {
  name: string | null | undefined;
  email: string | null | undefined;
  avatar?: string | undefined;
}

// Default user state for initialization
export const defaultUser: User = {
  name: null,
  email: null,
  avatar: undefined,
}

// Type guard to check if user is logged in
export function isLoggedIn(user: User): boolean {
  return Boolean(user.name && user.email);
}

// Helper to get avatar fallback initials
export function getAvatarFallback(name: string | null | undefined): string {
  if (!name) return '';
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
}