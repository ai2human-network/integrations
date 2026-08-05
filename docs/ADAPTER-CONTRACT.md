# Adapter Contract

## Create

Input must include title, brief, category, deadline, proof requirements, acceptance criteria, funding mode, and idempotency key.

Output must include task ID, task URL, workflow state, funding state, and next action.

## Status

Adapters must distinguish claim, proof submission, verification, funding, settlement submission, and confirmed settlement.

## Authentication

Credentials come from environment or a secret manager. Examples use placeholders and never log API keys.

## Errors

Return structured, actionable errors. Do not retry non-idempotent operations without a stable idempotency key.
