import { AxiosInstance } from 'axios';
import AgentSessionData, { CreateAgentSessionData, UpdateAgentSessionData } from '../../types/agent-session-data';
import APIResource from '../shared/api-resource';

export default class AgentSessionsResource extends APIResource<
  AgentSessionData,
  CreateAgentSessionData,
  UpdateAgentSessionData
> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agent-sessions');
  }
}
