import type { ErrorModel } from './types';

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public error: ErrorModel,
    message?: string
  ) {
    super(message || error.detail || error.title || `API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}