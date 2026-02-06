import { AxiosInstance, AxiosResponse } from 'axios';
import AgentSessionInputRequest, { AgentSessionInputRequestStatus } from '../../types/agent-session-input-request-data';
import APIResource, { PaginatedResponse } from '../shared/api-resource';

type CreateInputRequestData = {
  session_id: string;
  agent_id: string;
  key: string;
  title: string;
  message: string;
  schema: Record<string, unknown>;
};

interface ListParams {
  session_id?: string;
  agent_id?: string;
  status?: AgentSessionInputRequestStatus;
  $limit?: number;
  $trail?: string;
}

export default class AgentSessionInputRequestsResource extends APIResource<AgentSessionInputRequest, CreateInputRequestData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agent-session-input-requests');
  }

  async listRequests(params?: ListParams): Promise<AxiosResponse<PaginatedResponse<AgentSessionInputRequest>>> {
    return this.axios.get<PaginatedResponse<AgentSessionInputRequest>>(this.path, { params });
  }

  async resolve(id: string, response: Record<string, unknown>): Promise<AxiosResponse<AgentSessionInputRequest>> {
    return this.axios.post<AgentSessionInputRequest>(`${this.path}/${id}/resolve`, { response });
  }
}
