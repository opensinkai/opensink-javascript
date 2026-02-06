export default interface Agent {
  id: string;
  workspace_id: string;
  name: string;
  description?: string;
  config_id?: string;
  created_at: string;
  updated_at: string;
}
