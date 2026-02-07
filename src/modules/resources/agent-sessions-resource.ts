import { AxiosInstance } from 'axios';
import AgentSession, { AgentSessionData } from '../../types/agent-session-data';
import APIResource from '../shared/api-resource';

export default class AgentSessionsResource extends APIResource<AgentSession, AgentSessionData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agent-sessions');
  }
}
