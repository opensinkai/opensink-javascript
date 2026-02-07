# OpenSink JavaScript SDK

The official JavaScript/TypeScript client for the [OpenSink](https://opensink.com) REST API.

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
});

// Create a sink item
const { data: item } = await client.sinkItems.create({
  sink_id: 'sink-id',
  title: 'My first item',
  body: 'Hello from the OpenSink SDK',
});

// List agents
const { data: { items } } = await client.agents.list();
```

## Available Resources

- `client.sinks` — Named containers for agent outputs
- `client.sinkItems` — Structured records written to sinks
- `client.agents` — Registered AI agents
- `client.agentConfigurations` — Versioned agent settings
- `client.agentSessions` — Durable execution records
- `client.agentSessionInputRequests` — Human-in-the-loop input requests
- `client.agentSessionActivities` — Session event logs

## Documentation

For full usage details, see the [JavaScript Client guide](https://docs.opensink.com/javascript-client).

For API reference, visit [docs.opensink.com](https://docs.opensink.com/api-reference/introduction).

## License

[MIT](LICENSE)
