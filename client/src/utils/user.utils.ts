
export function isValidUserName(name: string): boolean {
  return name.trim().length >= 2;
}

export function saveUserName(name: string): void {
  localStorage.setItem("userName", name.trim());
}

export function getUserName(): string | null {
  return localStorage.getItem("userName");
}

export function clearUserName(): void {
  localStorage.removeItem("userName");
}