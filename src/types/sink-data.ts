export enum SinkColor {
  NEUTRAL = 'neutral',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  RED = 'red',
  PURPLE = 'purple',
  PINK = 'pink',
}

export default interface SinkData {
  id: string;
  name: string;
  description?: string;
  color: SinkColor;
  is_public: boolean;
  public_slug?: string;
  secret: string;
  workspace_id: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
}
