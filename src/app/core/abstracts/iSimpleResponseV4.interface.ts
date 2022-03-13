export interface ISimpleResponseV4<T> {
  result: T;
  succeeded: boolean;
  error?: {
    code?: number;
    category?: string;
    type?: string;
    parameterName?: string;
    value?: string;
    message: string;
  };
}
