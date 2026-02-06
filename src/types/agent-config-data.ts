export default interface AgentConfig<T = Record<string, unknown>> {
  id: string;
  agent_id: string;
  variant: string;
  version: number;
  variant_version: number;
  schema_version: number;
  schema: Record<string, unknown>;
  value: T;
  created_at: string;
  updated_at: string;
}
