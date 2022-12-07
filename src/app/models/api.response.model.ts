import { HttpStatusCode } from '@angular/common/http';

export interface ApiResponse<T> {
  success: boolean;
  error: ApiError;
  data: T;
}

export interface ApiError {
  message: string;
  errorData: any;
  httpErrorCode?: HttpStatusCode;
}
