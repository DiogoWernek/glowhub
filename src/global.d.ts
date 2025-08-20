export {};

declare global {
  interface AppError {
    status: boolean;
    message: string;
  }
}