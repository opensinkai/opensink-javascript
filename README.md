# OpenSink JavaScript SDK

The official JavaScript/TypeScript client for the [OpenSink](https://opensink.com) REST API. OpenSink is a control and observation platform for AI agents in production — manage sessions, configurations, human-in-the-loop input requests, and structured agent outputs.

## Installation

```bash
npm install opensink
# or
yarn add opensink
```

## Quick Start

```typescript
import Opensink from 'opensink';

const client = new Opensink({
  apiKey: 'your-api-key',
  url: 'https://api.opensink.com',
});
```

## Resources

### Sinks

Named containers for storing structured agent outputs.

```typescript
// Create a sink
const { data: sink } = await client.sinks.create({
  name: 'research-results',
  description: 'Summaries from research agent',
});

// List sinks
const { data: { items } } = await client.sinks.list();

// Get a sink
const { data: sink } = await client.sinks.get('sink-id');
```

### Sink Items

Structured records written to sinks. Supports full-text search and bulk creation.

```typescript
// Create an item
const { data: item } = await client.sinkItems.create({
  sink_id: 'sink-id',
  title: 'Q1 Summary',
  body: 'Revenue grew 15% quarter over quarter.',
  type: 'summary',
  url: 'https://example.com/report',
  fields: { quarter: 'Q1', growth: 15 },
});

// Bulk create items
const { data } = await client.sinkItems.createMany([
  { sink_id: 'sink-id', title: 'Item 1' },
  { sink_id: 'sink-id', title: 'Item 2' },
]);

// List items
const { data: { items } } = await client.sinkItems.list();
```

### Agents

```typescript
// Register an agent
const { data: agent } = await client.agents.create({
  name: 'research-agent',
  description: 'Gathers and summarizes research',
});

// List agents
const { data: { items } } = await client.agents.list();
```

### Agent Configurations

Versioned, inspectable settings that define agent behavior without hardcoding logic.

```typescript
// Create a configuration
const { data: config } = await client.agentConfigurations.create({
  agent_id: 'agent-id',
  variant: 'default',
  schema: { type: 'object', properties: { model: { type: 'string' } } },
  value: { model: 'gpt-4o' },
});

// Get the active configuration for an agent
const { data: active } = await client.agentConfigurations.getActiveForAgent('agent-id');

// List configuration variants
const { data: { items } } = await client.agentConfigurations.listVariants('agent-id');

// List configurations with filters
const { data: { items } } = await client.agentConfigurations.listConfigs({
  agent_id: 'agent-id',
  variant: 'default',
});
```

### Agent Sessions

Durable execution records that let agents pause, crash, and resume without losing context.

```typescript
// Start a session
const { data: session } = await client.agentSessions.create({
  agent_id: 'agent-id',
  status: 'running',
  state: { step: 'init' },
  metadata: { triggered_by: 'cron' },
});

// Update session state
const { data: updated } = await client.agentSessions.update('session-id', {
  state: { step: 'processing', progress: 50 },
});

// Mark session as completed
await client.agentSessions.update('session-id', { status: 'completed' });
```

### Agent Session Input Requests

Enable human-in-the-loop workflows by letting agents pause and request input.

```typescript
// Create an input request
const { data: request } = await client.agentSessionInputRequests.create({
  session_id: 'session-id',
  agent_id: 'agent-id',
  key: 'approval',
  title: 'Approve purchase',
  message: 'Agent wants to purchase 100 units. Approve?',
  schema: { type: 'object', properties: { approved: { type: 'boolean' } } },
});

// List pending requests
const { data: { items } } = await client.agentSessionInputRequests.listRequests({
  session_id: 'session-id',
  status: 'pending',
});

// Resolve a request
const { data: resolved } = await client.agentSessionInputRequests.resolve(
  'request-id',
  { approved: true },
);
```

### Agent Session Activities

A log of events within a session for debugging and auditing.

```typescript
// Log an activity
const { data: activity } = await client.agentSessionActivities.create({
  session_id: 'session-id',
  agent_id: 'agent-id',
  type: 'message',
  source: 'agent',
  message: 'Started processing batch',
});

// List activities with filters
const { data: { items } } = await client.agentSessionActivities.listActivities({
  session_id: 'session-id',
  type: 'message',
  source: 'agent',
});
```

## Pagination

List endpoints return paginated results using trail-based pagination:

```typescript
// First page
const { data: page1 } = await client.sinkItems.list({ $limit: 20 });

// Next page
if (page1.trail) {
  const { data: page2 } = await client.sinkItems.list({ $limit: 20, $trail: page1.trail });
}
```

## Documentation

For full API documentation, visit [docs.opensink.com](https://docs.opensink.com).

## License

[MIT](LICENSE)
