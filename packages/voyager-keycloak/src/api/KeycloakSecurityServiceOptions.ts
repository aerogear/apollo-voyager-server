export interface Logger {
  info(...args: any[]): void
}

export interface KeycloakSecurityServiceOptions {
  log: Logger
}
