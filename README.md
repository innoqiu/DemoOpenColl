# DemoOpenColl

DemoOpenColl is a small OpenCollab example project. The team is writing a
literature review subsection on:

**Using AI to Proxy Communication**

The repository is intentionally simple: a few research notes, a draft section,
and an OpenCollab task matrix stored in `opencollab/Task_Status.json`.

## Start

Install once:

```bash
npm install
```

Start the local visual board:

```bash
npm run dev
```

Open:

[http://localhost:5173](http://localhost:5173)

## Use With An Agent

Open this repository in Codex, Claude Code, or another local repo-aware agent.
The repo includes the agent entry files:

- `AGENTS.md` for Codex-style project instructions.
- `CLAUDE.md` for Claude Code memory.
- `.claude/commands/ocb.md` for Claude Code's `/ocb` wrapper.
- `opencollab/AGENT.md` and `opencollab/PROTOCOL_COMMANDS.md` for the canonical protocol.

Then type protocol commands inside the agent chat:

```text
/ocb init
/ocb pull
/ocb push
/ocb mtg title="Draft boundary review" task=AIPC-11,AIPC-12
```

`/ocb` is not a native shell command. The agent reads the OpenCollab protocol,
updates `opencollab/Task_Status.json`, checks conflicts, and uses Git to
synchronize with GitHub.

## Demo Scenario

Four collaborators maintain a literature review:

- Mira: scope, definitions, and taxonomy.
- Noah: source search and evidence matrix.
- Lin: synthesis and draft background.
- Priya: section outline, integration, and final merge.

The interesting coordination points are:

- The source matrix and synthesis text need a boundary sync.
- Two writers touch `draft/literature-review.md`.
- The final draft should not claim mechanisms that are absent from the evidence matrix.

## Project Files

- `docs/project-brief.md`: assignment and scope.
- `docs/lit-review/search-strategy.md`: source-search protocol.
- `docs/lit-review/definitions.md`: key terms.
- `docs/lit-review/breakdown-taxonomy.md`: taxonomy of communication breakdowns.
- `docs/lit-review/proxy-mechanisms.md`: synthesis of AI proxy mechanisms.
- `docs/lit-review/section-outline.md`: section structure.
- `data/literature-matrix.csv`: lightweight source matrix.
- `draft/literature-review.md`: current writing surface.
- `opencollab/Task_Status.json`: shared OpenCollab state.

## Validate

```bash
npm run verify
npm run build
```
