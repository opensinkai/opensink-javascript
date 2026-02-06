import { AxiosInstance } from 'axios';
import AgentSession, { AgentSessionStatus } from '../../types/agent-session-data';
import APIResource from '../shared/api-resource';

type CreateSessionData = {
  agent_id: string;
  status?: AgentSessionStatus;
  state?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
};

export default class AgentSessionsResource extends APIResource<AgentSession, CreateSessionData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agent-sessions');
  }
}
