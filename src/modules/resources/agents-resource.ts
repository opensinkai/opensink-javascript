import { AxiosInstance } from 'axios';
import Agent from '../../types/agent-data';
import APIResource from '../shared/api-resource';

type CreateAgentData = Pick<Agent, 'name'> & Partial<Pick<Agent, 'description'>>;

export default class AgentsResource extends APIResource<Agent, CreateAgentData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/agents');
  }
}
