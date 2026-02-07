import { ApiError } from './errors';
import type {
    ErrorModel,
    GetLessonOutput,
    ID,
    Language,
    Model,
    PostLessonInput,
} from './types';


export class LangGenApiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = (process.env.EXPO_PUBLIC_LANG_GEN_API_URL || '').replace(/\/$/, '');
    this.apiKey = process.env.EXPO_PUBLIC_LANG_GEN_API_KEY || '';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');
    const isProblemJson = contentType?.includes('application/problem+json');

    if (!response.ok) {
      let error: ErrorModel;

      if (isProblemJson || isJson) {
        error = await response.json();
      } else {
        error = {
          status: response.status,
          title: response.statusText,
          detail: await response.text().catch(() => 'Unknown error'),
        };
      }

      throw new ApiError(response.status, response.statusText, error);
    }

    if (isJson) {
      return response.json();
    }

    return {} as T;
  }

  async createLesson(input: PostLessonInput): Promise<ID> {
    return this.request<ID>('/api/lessons/', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  }

  async getLesson(id: string): Promise<GetLessonOutput> {
    return this.request<GetLessonOutput>(
      `/api/lessons/${encodeURIComponent(id)}`
    );
  }


  async getLanguages(): Promise<Language[]> {
    const result = await this.request<Language[] | null>(
      '/api/resources/languages'
    );
    return result || [];
  }

  async getModels(): Promise<Model[]> {
    const result = await this.request<Model[] | null>('/api/resources/models');
    return result || [];
  }
}