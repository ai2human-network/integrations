# AI2Human Integrations

Canonical catalog and release standards for connecting agent frameworks to AI2Human.

An integration is not complete when it can only create a task. It must preserve the full loop:

```text
agent constraint → classified task → funding gate → human proof → verification → settlement status
```

## Catalog

| Integration | Language | Maturity | Current source |
|---|---|---|---|
| AEON classified Skill Pack | JavaScript / Skills | Preview, deployed pilot | [richard7463/ai2human-aeon-skill-pack](https://github.com/richard7463/ai2human-aeon-skill-pack) |
| MCP TypeScript | TypeScript | Candidate | Staged for public extraction |
| MCP Python | Python | Candidate | Staged for public extraction |
| LangChain | Python | Candidate | Staged for public extraction |
| Coinbase AgentKit | Python | Candidate | Staged for public extraction |
| Bankr task router | JavaScript / Skill | Experimental | Staged for public extraction |

Machine-readable metadata: [`catalog/integrations.json`](catalog/integrations.json).

## Integration contract

Every adapter must:

1. classify the human action rather than defaulting to a campaign template;
2. declare `funded` or `test_no_payout` explicitly;
3. use an idempotency key for task creation;
4. return task ID, URL, workflow state, and funding state;
5. expose proof and verification status separately;
6. report settlement only with a durable receipt;
7. fail closed on authentication, funding, or schema errors.

See [release requirements](docs/RELEASE-REQUIREMENTS.md) and [adapter interface](docs/ADAPTER-CONTRACT.md).

Protocol-semantic changes belong in the [`protocol` AIP process](https://github.com/ai2human-network/protocol/tree/main/aips), not in an adapter-specific pull request.
