export interface $$Types {
  get: (url: string, params?: any) => void
  post: (url: string, params: any) => void
}

export interface FetchRes<T> {
  error_code: number
  message: string
  data: T
}