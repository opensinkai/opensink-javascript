import { AxiosInstance, AxiosResponse } from 'axios';
import SinkItemData from '../../types/sink-item-data';
import APIResource from '../shared/api-resource';

type CreateSinkItemData = Omit<SinkItemData, 'id' | 'created_at' | 'updated_at' | 'workspace_id'>;

interface BulkCreateResponse {
  created: SinkItemData[];
  failed: { item: CreateSinkItemData; error: string }[];
  invalid: { item: CreateSinkItemData; errors: string[] }[];
}

export interface ListSinkItemsParams {
  sink_id?: string;
  q?: string;
  $limit?: number;
  $trail?: string;
}

export default class SinkItemsResource extends APIResource<SinkItemData, CreateSinkItemData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/sink-items');
  }

  async createMany(data: CreateSinkItemData[]): Promise<AxiosResponse<BulkCreateResponse>> {
    return this.axios.post(`${this.path}/many`, { items: data });
  }
}
