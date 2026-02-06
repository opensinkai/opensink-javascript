export type FieldValue = string | number | boolean | null;

export default interface SinkItem {
  id: string;
  sink_id: string;
  workspace_id: string;
  title: string;
  body?: string;
  type?: string;
  url?: string;
  fields?: Record<string, FieldValue>;
  occurred_at?: string;
  created_at: string;
  updated_at: string;
}
