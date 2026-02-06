import axios, { AxiosInstance } from 'axios';
import SinksResource from './modules/resources/sinks-resource';
import SinkItemsResource from './modules/resources/sink-items-resource';
import AgentsResource from './modules/resources/agents-resource';
import AgentConfigurationsResource from './modules/resources/agent-configurations-resource';
import AgentSessionsResource from './modules/resources/agent-sessions-resource';
import AgentSessionInputRequestsResource from './modules/resources/agent-session-input-requests-resource';
import AgentSessionActivitiesResource from './modules/resources/agent-session-activities-resource';

export type OpenSinkConstructorOptions = {
  apiKey: string;
  url?: string;
};

export default class Opensink {
  axios: AxiosInstance;

  sinks: SinksResource;

  sinkItems: SinkItemsResource;

  agents: AgentsResource;

  agentConfigurations: AgentConfigurationsResource;

  agentSessions: AgentSessionsResource;

  agentSessionInputRequests: AgentSessionInputRequestsResource;

  agentSessionActivities: AgentSessionActivitiesResource;

  constructor(options: OpenSinkConstructorOptions) {
    this.axios = axios.create({
      baseURL: `${options.url}/api/v1`,
      headers: {
        'Authorization': `Bearer ${options.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    this.sinks = new SinksResource(this.axios);

    this.sinkItems = new SinkItemsResource(this.axios);

    this.agents = new AgentsResource(this.axios);

    this.agentConfigurations = new AgentConfigurationsResource(this.axios);

    this.agentSessions = new AgentSessionsResource(this.axios);

    this.agentSessionInputRequests = new AgentSessionInputRequestsResource(this.axios);

    this.agentSessionActivities = new AgentSessionActivitiesResource(this.axios);
  }
}
