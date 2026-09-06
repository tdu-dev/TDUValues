// Generated from Master_Document_V_3.xlsx - sheet "Reference Baseline V.6"
// Loaded as a classic script before questions.js. Globals: AXES, AXIS_META, BANDS.

// Final per-axis scores are normalized to the -10..+10 scale these bands assume.
// bands[0] is the most positive end; bands[4] the most negative.
const BANDS = [
  { index: 1, min:  6, max:  10 },
  { index: 2, min:  2, max:   6 },
  { index: 3, min: -2, max:   2 },
  { index: 4, min: -6, max:  -2 },
  { index: 5, min: -10, max: -6 },
];

const AXES = [
  "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4",
  "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4",
];

const AXIS_META = {
  A1: {
    group: "A",
    groupLabel: "SOCIETY IS...",
    name: "CULTIVATION",
    poles: { raw: "Assembly or Atrophy", high: "Assembly", low: "Atrophy" },
    bands: ["AUTHORING", "SHAPING", "INTEGRATING", "ACCOMPANYING", "CONSTRAINING"],
  },
  A2: {
    group: "A",
    groupLabel: "SOCIETY IS...",
    name: "PRODUCTION",
    poles: { raw: "Run by Systems or Great Men", high: "Run by Systems", low: "Great Men" },
    bands: ["SYSTEMS", "INSTITUTIONS", "ORGANIZATIONS", "GROUPS", "INDIVIDUALS"],
  },
  A3: {
    group: "A",
    groupLabel: "SOCIETY IS...",
    name: "FUNCTION",
    poles: { raw: "Predictable or Unpredictable", high: "Predictable", low: "Unpredictable" },
    bands: ["MECHANISTIC", "CYBERNETIC", "POLYCENTRIC", "EMERGENT", "INEXPLICABLE"],
  },
  A4: {
    group: "A",
    groupLabel: "SOCIETY IS...",
    name: "DIRECTION",
    poles: { raw: "Rising or Falling", high: "Rising", low: "Falling" },
    bands: ["ASCENDING", "PROGRESSING", "ENDURING", "REGRESSING", "DECLINING"],
  },
  B1: {
    group: "B",
    groupLabel: "WE SHOULD BE...",
    name: "DREAMING",
    poles: { raw: "Contingent or Inherent", high: "Contingent", low: "Inherent" },
    bands: ["CONSTRUCTED", "CONTROLLED", "CONTESTED", "CONVENTIONAL", "CONVERGENT"],
  },
  B2: {
    group: "B",
    groupLabel: "WE SHOULD BE...",
    name: "BEHAVING",
    poles: { raw: "Explicitly or Implicitly", high: "Explicitly", low: "Implicitly" },
    bands: ["CODIFIED", "SIGNALED", "SITUATIONAL", "CUSTOMARY", "TACIT"],
  },
  B3: {
    group: "B",
    groupLabel: "WE SHOULD BE...",
    name: "STRIVING",
    poles: { raw: "Accumulation or Leisure", high: "Accumulation", low: "Leisure" },
    bands: ["MOBILIZE", "ESCALATE", "OPTIMIZE", "DECOMPRESS", "MINIMIZE"],
  },
  B4: {
    group: "B",
    groupLabel: "WE SHOULD BE...",
    name: "RISKING",
    poles: { raw: "Accelerate or Reinstate", high: "Accelerate", low: "Reinstate" },
    bands: ["UNLEASH", "ENCOURAGE", "MANAGE", "RESTRICT", "SUPPRESS"],
  },
  C1: {
    group: "C",
    groupLabel: "MY MOVEMENT SHOULD BE...",
    name: "COHERING",
    poles: { raw: "Expansive or Exclusive", high: "Expansive", low: "Exclusive" },
    bands: ["DIVERSITY", "INTEGRATION", "ASSIMILATION", "UNIFORMITY", "PURITY"],
  },
  C2: {
    group: "C",
    groupLabel: "MY MOVEMENT SHOULD BE...",
    name: "RECRUITING",
    poles: { raw: "Incentivize or Inculcate", high: "Incentivize", low: "Inculcate" },
    bands: ["OFFERING", "ENGAGING", "CONVINCING", "CONVERTING", "INSTILLING"],
  },
  C3: {
    group: "C",
    groupLabel: "MY MOVEMENT SHOULD BE...",
    name: "PURSUING",
    poles: { raw: "Aiming Low or High", high: "Aiming Low", low: "High" },
    bands: ["MINIMALISM", "INCREMENTALISM", "OPPORTUNISM", "EXPANSIONISM", "MAXIMALISM"],
  },
  C4: {
    group: "C",
    groupLabel: "MY MOVEMENT SHOULD BE...",
    name: "REVIEWING",
    poles: { raw: "Process-oriented or Principle-oriented", high: "Process-oriented", low: "Principle-oriented" },
    bands: ["REFERENDUM", "PROVISIONAL LAW", "CONSTITUTION", "CANON", "SCRIPTURE"],
  },
  D1: {
    group: "D",
    groupLabel: "LEADERS SHOULD BE...",
    name: "MANDATE",
    poles: { raw: "Servants or Rulers", high: "Servants", low: "Rulers" },
    bands: ["SERVING", "COLLABORATING", "CONSULTING", "TEACHING", "RULING"],
  },
  D2: {
    group: "D",
    groupLabel: "LEADERS SHOULD BE...",
    name: "PROGRAM",
    poles: { raw: "Converting or Administering", high: "Converting", low: "Administering" },
    bands: ["EVANGELIST", "SHEPHERD", "TEACHER", "STEWARD", "ENGINEER"],
  },
  D3: {
    group: "D",
    groupLabel: "LEADERS SHOULD BE...",
    name: "TIME",
    poles: { raw: "Present or Future oriented", high: "Present", low: "Future oriented" },
    bands: ["DAYS", "MONTHS", "YEARS", "DECADES", "CENTURIES"],
  },
  D4: {
    group: "D",
    groupLabel: "LEADERS SHOULD BE...",
    name: "SPACE",
    poles: { raw: "Locally or Globally focused", high: "Locally", low: "Globally focused" },
    bands: ["LOCAL", "SECTIONAL", "NATIONAL", "CIVILIZATIONAL", "UNIVERSAL"],
  },
};

// Band containing a normalized (-10..10) score. Returns 1-5.
function bandFor(score) {
  for (const b of BANDS) if (score >= b.min && score <= b.max) return b.index;
  return score > 0 ? 1 : 5;
}

// Band label for an axis, e.g. bandLabel("A1", 7.2) === "AUTHORING"
function bandLabel(axis, score) {
  return AXIS_META[axis].bands[bandFor(score) - 1];
}
