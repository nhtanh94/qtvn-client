export interface ISimpleResponse<T> {
  data: T;
  isSuccess?: boolean;
  message?: string;
  exception?: object;
  dataCount?: number;
  result: T;
  error?: any;
  params?: any;
  succeeded?: boolean;
}
