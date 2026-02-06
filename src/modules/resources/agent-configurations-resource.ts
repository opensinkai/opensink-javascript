import { AxiosInstance, AxiosResponse } from 'axios';
import AgentConfig from '../../types/agent-config-data';
import APIResource, { PaginatedResponse } from '../shared/api-resource';

type CreateConfigData = {
  agent_id: string;
  variant?: string;
  schema_version?: number;
  schema?: Record<string, unknown>;
  value?: Record<string, unknown>;
};

interface ListParams {
  agent_id?: string;
  variant?: string;
  $limit?: number;
  $trail?: string;
}

export default class AgentConfigurationsResource extends APIResource<AgentConfig, CreateConfigData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agent-configurations');
  }

  async listConfigs(params?: ListParams): Promise<AxiosResponse<PaginatedResponse<AgentConfig>>> {
    return this.axios.get<PaginatedResponse<AgentConfig>>(this.path, { params });
  }

  async listVariants(agentId?: string): Promise<AxiosResponse<PaginatedResponse<AgentConfig>>> {
    return this.axios.get<PaginatedResponse<AgentConfig>>(`${this.path}/variants`, {
      params: agentId ? { agent_id: agentId } : undefined,
    });
  }

  async getActiveForAgent<T = Record<string, unknown>>(agentId: string): Promise<AxiosResponse<AgentConfig<T>>> {
    return this.axios.get<AgentConfig<T>>(`${this.path}/agent/${agentId}`);
  }
}
