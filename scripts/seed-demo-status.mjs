import fs from "node:fs";

const now = "2026-06-28T11:35:00.000Z";

const status = {
  schemaVersion: "0.5.0",
  workspace: {
    name: "AI Proxy Communication Literature Review",
    repo: "innoqiu/DemoOpenColl",
    branch: "main",
    locked: true,
    statusFile: "opencollab/Task_Status.json",
    currentActorId: "mira",
    updatedAt: now
  },
  commands: {
    def: "/ocb def --repo <owner/repo> --workspace <name> --actor <id> --signature <text> --color <hex>",
    init: "/ocb init --task <brief> --source <cloud-doc-url>",
    run: "/ocb run  # compatibility alias for /ocb init during the demo period",
    pull: "/ocb pull",
    push: "/ocb push",
    mtg: "/ocb mtg --title <meeting> --task <taskId> --notes <text>"
  },
  protocol: {
    cloudDocument: "https://github.com/innoqiu/DemoOpenColl/blob/main/opencollab/TTask_Status.json",
    commandProtocol: "opencollab/PROTOCOL_COMMANDS.md",
    interdependenceFramework: "opencollab/INTERDEPENDENCE_CONFLICT_FRAMEWORK.md",
    promptLibrary: "opencollab/PROMPTS.md",
    agentEntryFiles: ["AGENTS.md", "CLAUDE.md", ".claude/commands/ocb.md"],
    initSummary: "Create task interfaces for a shared literature review and expose writing/evidence boundaries."
  },
  taskBrief: {
    path: "opencollab/TTask_Status.json",
    cloudDocument: "https://github.com/innoqiu/DemoOpenColl/blob/main/opencollab/TTask_Status.json",
    firstReadOrder: [
      "AGENTS.md",
      "CLAUDE.md",
      "opencollab/PROTOCOL_COMMANDS.md",
      "opencollab/TTask_Status.json",
      "opencollab/Task_Status.json",
      "opencollab/Task_Status.schema.json",
      "opencollab/INTERDEPENDENCE_CONFLICT_FRAMEWORK.md",
      "opencollab/PROMPTS.md",
      "opencollab/AGENT.md",
      "README.md"
    ],
    lastReviewedAt: now
  },
  members: [
    member("mira", "Mira Scope Lead", "MI", "#65b8a6"),
    member("noah", "Noah Evidence Lead", "NO", "#d6a85b"),
    member("lin", "Lin Synthesis Writer", "LI", "#6fa8dc"),
    member("priya", "Priya Integration Editor", "PR", "#d98291")
  ],
  categories: [
    { id: "scope", label: "Scope", color: "#65b8a6" },
    { id: "evidence", label: "Evidence", color: "#d6a85b" },
    { id: "synthesis", label: "Synthesis", color: "#6fa8dc" },
    { id: "writing", label: "Writing", color: "#d98291" },
    { id: "integration", label: "Integration", color: "#9aa0ad" }
  ],
  tasks: [
    task("AIPC-01", "Project brief and review question", "scope", "done", "mira", 2, 2, 100, "Define the review subsection, audience, and claim boundaries.", ["docs/project-brief.md"], ["paper topic", "course scope"], ["review question", "definition guardrail"], ["All synthesis tasks should preserve this scope unless a meeting changes it."]),
    task("AIPC-02", "Core definitions note", "scope", "active", "mira", 3, 2, 70, "Clarify proxy communication, communication boundary, and delegated voice.", ["docs/lit-review/definitions.md"], ["project brief", "seed readings"], ["definition note"], ["Draft writers should use these terms consistently."]),
    task("AIPC-03", "Search strategy", "evidence", "done", "noah", 5, 2, 100, "Define search strings, inclusion criteria, and exclusion criteria.", ["docs/lit-review/search-strategy.md"], ["review question"], ["search protocol"], ["Evidence claims should come from this search frame."]),
    task("AIPC-04", "Annotated literature matrix", "evidence", "active", "noah", 6, 2, 55, "Collect sources and code communication surfaces, mechanisms, and evidence status.", ["data/literature-matrix.csv"], ["search strategy", "source PDFs"], ["coded literature matrix"], ["Synthesis should not cite mechanisms missing from this matrix."]),
    task("AIPC-05", "Case coding memo", "evidence", "claimed", "noah", 7, 2, 0, "Write a short memo explaining ambiguous source coding decisions.", ["docs/lit-review/case-coding-memo.md"], ["literature matrix"], ["coding rationale memo"], ["Needed before final citation consistency pass."]),
    task("AIPC-06", "Communication breakdown taxonomy", "scope", "active", "mira", 3, 5, 50, "Organize breakdowns such as compression loss, voice drift, timing mismatch, and responsibility blur.", ["docs/lit-review/breakdown-taxonomy.md"], ["definition note", "source examples"], ["breakdown taxonomy"], ["Risk synthesis must use the same category names."]),
    task("AIPC-07", "Proxy mechanism synthesis", "synthesis", "active", "lin", 5, 5, 45, "Synthesize summarizing, filtering, rephrasing, delegating, and coordinating as proxy mechanisms.", ["docs/lit-review/proxy-mechanisms.md"], ["literature matrix", "definition note"], ["mechanism synthesis"], ["Claims must trace to coded evidence before they move into the draft."]),
    task("AIPC-08", "Risks and ethics synthesis", "synthesis", "undo", null, 7, 5, 0, "Summarize accountability, nuance loss, voice drift, and hidden labor risks.", ["docs/lit-review/ethics-risks.md"], ["breakdown taxonomy", "mechanism synthesis"], ["risk synthesis"], ["Should not duplicate the taxonomy; it should interpret implications."]),
    task("AIPC-09", "Mechanism comparison table", "synthesis", "active", "lin", 9, 5, 35, "Create a compact table linking mechanisms to communication surfaces, evidence, and risks.", ["docs/lit-review/mechanism-table.md"], ["literature matrix", "mechanism synthesis"], ["comparison table"], ["The final draft can cite this table as the bridge from evidence to prose."]),
    task("AIPC-10", "Section outline", "writing", "done", "priya", 10, 5, 100, "Define the section order and integration checkpoints.", ["docs/lit-review/section-outline.md"], ["project brief", "definition note"], ["section outline"], ["Draft sections should follow this order unless the team changes it."]),
    task("AIPC-11", "Draft background paragraphs", "writing", "active", "lin", 4, 8, 40, "Write opening paragraphs that distinguish proxy communication from ordinary AI writing assistance.", ["draft/literature-review.md"], ["section outline", "definition note"], ["background draft"], ["Shares the same draft file with Priya's proxy subsection."]),
    task("AIPC-12", "Draft proxy communication subsection", "writing", "active", "priya", 6, 8, 30, "Write the main subsection explaining mechanisms and why boundary visibility matters.", ["draft/literature-review.md"], ["mechanism synthesis", "comparison table"], ["AI proxy communication draft"], ["Should wait for mechanism evidence before making strong claims."]),
    task("AIPC-13", "Citation consistency pass", "integration", "undo", null, 8, 8, 0, "Check that draft claims, citations, and matrix evidence match.", ["docs/lit-review/citation-check.md"], ["draft section", "literature matrix", "case coding memo"], ["citation consistency notes"], ["Run after the draft and matrix stabilize."]),
    task("AIPC-14", "Boundary review and final merge", "integration", "claimed", "priya", 10, 8, 0, "Review definitions, evidence, and draft wording before final merge.", ["docs/lit-review/boundary-review.md"], ["draft section", "citation pass", "risk synthesis"], ["merge readiness notes"], ["Unresolved conflicts should become meeting agenda items."])
  ],
  links: [
    link("ln-01", "AIPC-01", "AIPC-02", "dependency", "Definitions depend on the review question and scope."),
    link("ln-02", "AIPC-01", "AIPC-03", "dependency", "The search strategy depends on the agreed review scope."),
    link("ln-03", "AIPC-03", "AIPC-04", "dependency", "The literature matrix depends on the search strategy."),
    link("ln-04", "AIPC-04", "AIPC-05", "dependency", "The coding memo depends on ambiguous rows in the matrix."),
    link("ln-05", "AIPC-02", "AIPC-06", "dependency", "The breakdown taxonomy depends on stable definitions."),
    link("ln-06", "AIPC-02", "AIPC-07", "dependency", "The mechanism synthesis depends on the definition of proxy communication."),
    link("ln-07", "AIPC-04", "AIPC-07", "dependency", "The mechanism synthesis depends on coded evidence in the matrix."),
    link("ln-08", "AIPC-06", "AIPC-08", "dependency", "Risk synthesis depends on the breakdown taxonomy."),
    link("ln-09", "AIPC-07", "AIPC-08", "dependency", "Risk synthesis should interpret the mechanisms rather than introduce a separate frame."),
    link("ln-10", "AIPC-04", "AIPC-09", "dependency", "The comparison table depends on matrix evidence."),
    link("ln-11", "AIPC-07", "AIPC-09", "dependency", "The comparison table depends on the current mechanism synthesis."),
    link("ln-12", "AIPC-10", "AIPC-11", "dependency", "The background draft follows the section outline."),
    link("ln-13", "AIPC-10", "AIPC-12", "dependency", "The main subsection follows the section outline."),
    link("ln-14", "AIPC-07", "AIPC-12", "dependency", "The main subsection depends on the mechanism synthesis."),
    link("ln-15", "AIPC-09", "AIPC-12", "dependency", "The subsection should use the comparison table as evidence bridge."),
    link("ln-16", "AIPC-04", "AIPC-13", "dependency", "Citation consistency depends on the evidence matrix."),
    link("ln-17", "AIPC-11", "AIPC-13", "dependency", "Citation checking depends on a stable background draft."),
    link("ln-18", "AIPC-12", "AIPC-13", "dependency", "Citation checking depends on a stable proxy subsection."),
    link("ln-19", "AIPC-13", "AIPC-14", "dependency", "Final merge depends on citation consistency notes."),
    link("ln-20", "AIPC-04", "AIPC-07", "boundary", "Noah and Lin must align source coding with mechanism claims before the synthesis hardens."),
    link("ln-21", "AIPC-02", "AIPC-11", "boundary", "Mira and Lin must keep definitions consistent between the note and background paragraphs."),
    link("ln-22", "AIPC-11", "AIPC-12", "sync", "Lin and Priya are both editing the same draft file and need a short writing-boundary sync.")
  ],
  timeline: [
    {
      id: "tl-aipc-001",
      type: "meeting",
      actorId: "mira",
      taskIds: ["AIPC-01", "AIPC-02", "AIPC-03"],
      title: "Kickoff: AI proxy communication review",
      details: "Team agreed to define proxy communication narrowly and keep all claims traceable to the evidence matrix.",
      createdAt: now,
      adds: ["TTask_Status.json", "Task_Status.json", "project brief"]
    },
    {
      id: "tl-aipc-002",
      type: "update",
      actorId: "noah",
      taskIds: ["AIPC-03", "AIPC-04"],
      title: "Search strategy and source matrix started",
      details: "Search strategy is ready and the first four sources are entered in the matrix.",
      createdAt: now,
      adds: ["docs/lit-review/search-strategy.md", "data/literature-matrix.csv"]
    },
    {
      id: "tl-aipc-003",
      type: "update",
      actorId: "lin",
      taskIds: ["AIPC-07", "AIPC-11"],
      title: "Mechanism synthesis and draft background started",
      details: "Lin began the synthesis note and the opening draft, creating an active boundary with the source matrix and Priya's draft section.",
      createdAt: now,
      adds: ["docs/lit-review/proxy-mechanisms.md", "draft/literature-review.md"]
    }
  ],
  meetings: [
    {
      id: "mtg-aipc-001",
      title: "Kickoff: AI proxy communication review",
      taskIds: ["AIPC-01", "AIPC-02", "AIPC-03"],
      notes: "Use a narrow definition of proxy communication and require evidence links for mechanism claims.",
      createdAt: now
    }
  ],
  conflicts: [
    {
      id: "shared-file-AIPC-11-AIPC-12",
      type: "shared-file",
      severity: "high",
      taskIds: ["AIPC-11", "AIPC-12"],
      memberIds: ["lin", "priya"],
      title: "Two writers are editing the same draft file",
      message: "AIPC-11 and AIPC-12 both touch draft/literature-review.md while active. LI and PR should agree section boundaries before the next push.",
      detectedAt: now,
      resolved: false
    },
    {
      id: "boundary-AIPC-04-AIPC-07",
      type: "boundary-sync",
      severity: "medium",
      taskIds: ["AIPC-04", "AIPC-07"],
      memberIds: ["noah", "lin"],
      title: "Evidence and synthesis need alignment",
      message: "AIPC-04 and AIPC-07 are both active. NO and LI should confirm that every mechanism claim has matrix support.",
      detectedAt: now,
      resolved: false
    },
    {
      id: "boundary-AIPC-02-AIPC-11",
      type: "boundary-sync",
      severity: "medium",
      taskIds: ["AIPC-02", "AIPC-11"],
      memberIds: ["mira", "lin"],
      title: "Definition wording may drift in the draft",
      message: "AIPC-02 and AIPC-11 are both active. MI and LI should align the definition before background wording is finalized.",
      detectedAt: now,
      resolved: false
    }
  ],
  view: {
    board: { cols: 14, rows: 12 },
    taskIdPrefix: "AIPC",
    progressSteps: 24
  }
};

fs.writeFileSync("opencollab/Task_Status.json", `${JSON.stringify(status, null, 2)}\n`);

function member(id, displayName, signature, color) {
  return { id, displayName, signature, color, role: "human", active: true };
}

function task(id, title, category, state, claimantId, x, y, progress, summary, touches, inputs, outputs, boundaryNotes) {
  return {
    id,
    title,
    category,
    state,
    claimantId,
    grid: { x, y, w: 1, h: 1 },
    summary,
    touches,
    interfaces: { inputs, outputs, boundaryNotes },
    updatedAt: now,
    progress
  };
}

function link(id, source, target, kind, info) {
  return { id, source, target, kind, info, createdBy: "agent", createdAt: now };
}
