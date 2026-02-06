export type AgentSessionInputRequestStatus = 'pending' | 'resolved';

export default interface AgentSessionInputRequest {
  id: string;
  session_id: string;
  agent_id: string;
  workspace_id: string;
  key: string;
  title: string;
  message: string;
  schema: Record<string, unknown>;
  response: Record<string, unknown> | null;
  status: AgentSessionInputRequestStatus;
  created_at: string;
  resolved_at?: string;
}
