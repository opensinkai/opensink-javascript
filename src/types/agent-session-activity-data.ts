export enum AgentSessionActivityType {
  SESSION_STARTED = 'session_started',
  SESSION_ENDED = 'session_ended',
  MESSAGE = 'message',
  INPUT_REQUEST_CREATED = 'input_request_created',
  INPUT_REQUEST_RESOLVED = 'input_request_resolved',
  SINK_ITEM_CREATED = 'sink_item_created',
  STATE_UPDATED = 'state_updated',
}

export enum AgentSessionActivitySource {
  SYSTEM = 'system',
  AGENT = 'agent',
  USER = 'user',
}

export interface AgentSessionActivityLink {
  href: string;
  text: string;
}

export default interface AgentSessionActivity {
  id: string;
  session_id: string;
  agent_id: string;
  workspace_id: string;
  type: AgentSessionActivityType;
  source: AgentSessionActivitySource;
  related_entity_id?: string | null;
  message?: string | null;
  payload?: Record<string, unknown> | null;
  links?: AgentSessionActivityLink[] | null;
  created_at: string;
  updated_at: string;
}
