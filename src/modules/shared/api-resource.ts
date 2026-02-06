import { AxiosInstance, AxiosResponse } from 'axios';

export interface PaginatedResponse<T> {
  items: T[];
  trail: string | null;
}

export default class APIResource<T, D = T> {
  constructor(readonly axios: AxiosInstance, readonly path: string) {}

  async create(data: D): Promise<AxiosResponse<T>> {
    return this.axios.post<T, AxiosResponse<T>, D>(this.path, data);
  }

  async list<P>(params?: P): Promise<AxiosResponse<PaginatedResponse<T>>> {
    return this.axios.get<PaginatedResponse<T>>(this.path, { params });
  }

  async get(id: string): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(`${this.path}/${id}`);
  }

  async update(id: string, data: Partial<D>): Promise<AxiosResponse<T>> {
    return this.axios.patch<T, AxiosResponse<T>, Partial<D>>(`${this.path}/${id}`, data);
  }

  async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete<void>(`${this.path}/${id}`);
  }
}
