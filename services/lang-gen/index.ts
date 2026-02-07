
import { LangGenApiClient } from './client';
export { ApiError } from './errors';
export type {
    ErrorDetail,
    ErrorModel,
    GetLessonOutput,
    ID,
    Language,
    Lesson,
    LessonStatus,
    Model,
    PostLessonInput,
    Question,
    Section
} from './types';
export { LangGenApiClient };

export const apiClient = new LangGenApiClient();
