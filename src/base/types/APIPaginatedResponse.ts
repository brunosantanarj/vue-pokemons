export type APIPaginatedResponse<T> = {
  count: number
  next: string
  previous: any
  results: T
}
