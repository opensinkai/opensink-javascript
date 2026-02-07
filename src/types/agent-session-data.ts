export enum AgentSessionStatus {
  RUNNING = 'running',
  WAITING_FOR_INPUT = 'waiting_for_input',
  PROCESSING_INPUT = 'processing_input',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export default interface AgentSessionData {
  id: string;
  agent_id: string;
  workspace_id: string;
  status: AgentSessionStatus;
  state: Record<string, unknown>;
  metadata: Record<string, unknown>;
  error_message?: string;
  created_at: string;
  updated_at: string;
}

export type CreateAgentSessionData = Omit<
    AgentSessionData,
    'id' | 'created_at' | 'updated_at' | 'workspace_id' | 'state' | 'metadata'
  >
  & Partial<Pick<AgentSessionData, 'state' | 'metadata'>>;

export type UpdateAgentSessionData = Partial<Omit<CreateAgentSessionData, 'agent_id'>>;
