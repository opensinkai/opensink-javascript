import { AxiosInstance, AxiosResponse } from 'axios';
import AgentSessionActivity, { AgentSessionActivityType, AgentSessionActivitySource } from '../../types/agent-session-activity-data';
import APIResource, { PaginatedResponse } from '../shared/api-resource';

type CreateActivityData = {
  session_id: string;
  agent_id: string;
  type: AgentSessionActivityType;
  source: AgentSessionActivitySource;
  related_entity_id?: string;
  message?: string;
  payload?: Record<string, unknown>;
};

interface ListParams {
  session_id?: string;
  agent_id?: string;
  type?: AgentSessionActivityType;
  source?: AgentSessionActivitySource;
  $limit?: number;
  $trail?: string;
}

export default class AgentSessionActivitiesResource extends APIResource<AgentSessionActivity, CreateActivityData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agent-session-activities');
  }

  async listActivities(params?: ListParams): Promise<AxiosResponse<PaginatedResponse<AgentSessionActivity>>> {
    return this.axios.get<PaginatedResponse<AgentSessionActivity>>(this.path, { params });
  }
}
