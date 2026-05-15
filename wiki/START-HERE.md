# Attorney Guide — How to Use This Vault

**Case:** Eli Carder custody — Case No. 21-DR-1773, Franklin County
**Dataset:** ~15,755 text messages, August 2022 – May 2026
**This vault:** Attorney strategy tool. Not a court exhibit.

---

## What You're Looking At

This vault contains the results of a systematic behavioral analysis of every text message between Eli (father) and Melissa (mother) over nearly four years. The analysis identified 380 documented incidents organized into 15 behavioral categories.

The goal is to give you and Eli a research-ready system so you can find evidence fast, build court arguments from documented patterns, and avoid paying attorney hours to dig through raw messages.

---

## The Folder Structure — Plain English

### `incidents/` — The Evidence Database
**Start here when you need specifics.**

380 individual incident files, one per documented behavioral event. Organized into 15 subfolders by behavior type. Each file contains:
- What happened (date, which messages, direction)
- Why it was flagged (analyst summary)
- Severity level (Sev-1 = notable, Sev-2 = significant, Sev-3 = severe)
- Links to related patterns and behavioral arcs

Naming: `YYYY-MM-DD_SignalID.md` — sort by date to see chronology.

**15 incident subfolders:**

| Folder  | What It Covers                                                                                |
| ------- | --------------------------------------------------------------------------------------------- |
| `RF-01` | Parental alienation — coaching Olivia, Abby attack vector, inadequate-father narrative        |
| `RF-02` | Access denial — phone blocking, required-intermediary control, visit refusals, relocation     |
| `RF-03` | Weaponized scheduling — logistics used to deny access or shift burden                         |
| `RF-04` | DARVO / emotional manipulation — blame reversal, contempt attacks, guilt delivery via Olivia  |
| `RF-05` | Legal threats and intimidation — 26 documented threats across 4 years                         |
| `RF-06` | Financial coercion — billing on refused visits, money leverage                                |
| `RF-07` | Boundary violations — message flooding, response demands, continuing after "stop"             |
| `RF-08` | Child triangulation / coaching — Olivia used as messenger, intelligence channel, loyalty test |
| `RF-09` | Gaslighting — reality distortion, false narratives, event rewrites                            |
| `RF-10` | Refusal to co-parent — simulated cooperation, information blackout                            |
| `RF-11` | Child involvement — parentifying Olivia with adult conflict, exposing her to court matters    |
| `RF-12` | Strategic communication — "for the record" framing, manufactured paper trail                  |
| `RF-13` | Escalation patterns — episode cycles, holiday windows, Melissa as consistent initiator        |
| `RF-14` | Substance and safety — Percocet admission, Gary DV background, homicide investigation         |
| `RF-15` | False allegations — incest framing, predator narrative, projection pairs                      |

### `patterns/` — The 15 Behavior Categories
One page per behavioral category. Explains the pattern, lists all signals and arcs, and shows how the behavior evolved over time. Use these when building arguments about sustained patterns rather than individual incidents.

### `arcs/` — Long-Running Behavioral Threads
An "arc" is a behavior that recurred and evolved over multiple batches and months. These are the backbone of pattern arguments. The most important arcs:

- **[[arcs/ARC-RF02-002|ARC-RF02-002]]** — Required Intermediary (40 incidents, full dataset)
- **[[arcs/ARC-RF04-001|ARC-RF04-001]]** — DARVO Pattern (88 incidents, full dataset)
- **[[arcs/ARC-RF01-001|ARC-RF01-001]]** — Alienation Narrative (30 incidents)
- **[[arcs/ARC-RF05-001|ARC-RF05-001]]** — Legal Threat Campaign (25 incidents)
- **[[arcs/ARC-RF15-001|ARC-RF15-001]]** — False Allegation Pattern (16 incidents)

### `entities/` — People in This Case
Behavioral profiles of Eli, Melissa, Olivia, Abby, and Gary. Use when you need to characterize anyone's role or history quickly.

### `events/` — Key Compound Events
Four pivotal documented events that serve as structural anchors for arguments:

- **[[events/ROW-6819-coaching-admission|ROW-6819 Coaching Admission]]** — Melissa explicitly admitted scripting Olivia's conversations (Aug 2024)
- **[[events/feb-2026-incident-rewrite|Feb 2026 Incident Rewrite]]** — Real event amplified to alcoholism accusation in 5 steps
- **[[events/nov-2025-police-report|Nov 2025 Police Report]]** — Eli filed; Melissa's DARVO response documented
- **[[events/phase-c-visit-refusal-cascade|Phase C Visit-Refusal Cascade]]** — Six consecutive months of access denial, Sep 2025–Apr 2026

### `docs/` — Document Indexes
Index pages for all physical documents in the case. Each page lists the file, what it is, and how it connects to the analysis.

- **[[docs/legal-documents|Legal Documents]]** — Shared Parenting Decree, Joint SPP, case filings, dissolution decree, parenting class cert
- **[[docs/call-recordings|Call Recordings]]** — 10 recordings covering Oct–Dec 2025 (the active Phase C period)
- **[[docs/gary-hale-records|Gary Hale Records]]** — criminal case PDF, DV arrest history, photos
- **[[docs/financial-records|Financial Records]]** — childcare receipts, payment history, support worksheet
- **[[docs/public-records-and-evidence|Public Records & Evidence]]** — police report, Franklin County Auditor, Melissa's salary, Eli's Google timeline

All actual files live in `attachments/` at the vault root — organized by category with clean names.

### `analysis/` — Big Picture
- **[[analysis/executive-summary|Executive Summary]]** — Full case narrative, all patterns, all findings
- **[[analysis/phase2-pattern-synthesis|Phase 2 Pattern Synthesis]]** — Coercive-control architecture, evidence quality tiers, anticipated defenses, Ohio R.C. 3109.04 map, top 15 exhibits
- **[[analysis/attorney-prep-abby-household|Attorney Prep: Abby, Household & February Incident]]** — The Eli/Abby relationship origin, household composition, affair vulnerability and handling, Feb 2026 incident full account
- **[[analysis/cp3-human-review|CP3 Human Review]]** — 47 of 54 items reviewed; 7 pending (5 HIGH PRIORITY for attorney)

### `timeline/` — Chronological View
- **[[timeline/chronological-index|Timeline]]** — Every key event in date order

---

## How to Search in Obsidian

**By tag:** Click a tag in any incident file to see all incidents with that tag.
- `#Sev3` — highest priority incidents
- `#Sev2` — significant incidents
- `#PhaseC` — the final 7 months (Sep 2025–Apr 2026) — most relevant to current proceedings
- `#RF01`, `#RF02`, etc. — filter by behavior category
- `#ARCRF02002` — all incidents in a specific arc

**Graph view:** Shows the connection web between incidents, arcs, patterns, and entities. Useful for visually demonstrating how patterns interconnect.

**Search bar (Ctrl/Cmd+Shift+F):** Full-text search across all 380 incidents. Search for ROW numbers, dates, or specific language.

---

## Quick Reference: Filing-Ready Evidence

### For a Motion to Compel Parenting Plan Compliance / Contempt
→ [[docs/spp-violations/INDEX|SPP Violations Master Index]] — every violated provision mapped to documented incidents
→ [[docs/spp-violations/section-III-A-parenting-time|§III.A Parenting Time]] — 104 access-denial signals; exact SPP language
→ [[docs/spp-violations/section-III-D-communication|§III.D Communication]] — 91 phone-blocking + intermediary signals
→ [[incidents/RF-02/|RF-02 incidents]] — 104 documented access denial events
→ [[arcs/ARC-RF02-002|Required Intermediary Arc]] — Olivia herself enforcing the rule by Feb 2025
→ [[events/phase-c-visit-refusal-cascade|Phase C Cascade]] — 7 months of consecutive refusals

### For a Motion Regarding Parental Alienation
→ [[incidents/RF-01/|RF-01 incidents]] — 31 documented alienation signals
→ [[events/ROW-6819-coaching-admission|Coaching Admission]] — explicit in Melissa's own words
→ [[incidents/RF-08/|RF-08 incidents]] — Olivia used as instrument

### For Court Interview / Case Review Prep
→ [[analysis/executive-summary|Executive Summary]] — read first
→ [[analysis/phase2-pattern-synthesis|Phase 2 Pattern Synthesis]] — evidence tiers, defenses, legal framework
→ [[analysis/attorney-prep-abby-household|Attorney Prep: Abby & Feb Incident]] — household and relationship briefing
→ [[entities/eli|Eli's profile]] — his documented de-escalatory posture
→ [[entities/olivia|Olivia's profile]] — the child's position in this conflict

### For Credibility / False Narrative Arguments
→ [[events/feb-2026-incident-rewrite|Feb 2026 Incident Rewrite]] — documented amplification chain
→ [[incidents/RF-15/|RF-15 incidents]] — 16 false allegation signals
→ [[incidents/RF-09/|RF-09 incidents]] — 11 gaslighting signals
→ [[arcs/ARC-RF15-002|Projection Arc]] — Melissa accusing Eli of her own behaviors

### For Safety / Fitness Arguments
→ [[incidents/RF-14/|RF-14 incidents]] — 21 substance and safety signals
→ [[arcs/ARC-RF14-002|ARC-RF14-002]] — Gary overnight, DV background, homicide investigation
→ [[entities/gary|Gary's profile]]

---

## The Three Non-Negotiable Pieces of Evidence

These three items should be in every filing and every court briefing:

**1. The Coaching Admission (ROW-6819, Aug 21, 2024)**
Melissa's own words: *"I've told her to have conversations and I also give her things to tell you about. I remind her of some of the things she's told me."* Every "Olivia said she doesn't want to" relay after this date must be read through this admission.
→ [[events/ROW-6819-coaching-admission|See full event page]]

**2. The Required-Intermediary System (64+ signals, full dataset)**
All Eli-Olivia contact routes through Melissa — phone, scheduling, emotional reporting, safety. Olivia herself enforcing the rule by Feb 2025. Still active at dataset close.
→ [[arcs/ARC-RF02-002|See arc page]]

**3. The February 2026 Incident Rewrite**
A real event (raised voice) was amplified by Melissa across five documented steps to an alcoholism accusation. This became the justification for the 7-month visit-refusal cascade. The amplification is traceable because the real event was acknowledged.
→ [[events/feb-2026-incident-rewrite|See event page]]

---

## Severity Legend

| Level | Meaning | Action |
|-------|---------|--------|
| **Sev-3** 🔴 | Severe — standalone court-filing weight | Lead evidence |
| **Sev-2** ⚠️ | Significant — pattern contribution + arguable standalone | Supporting evidence |
| **Sev-1** | Notable — pattern contribution | Background / volume |

---

*Last updated: May 2026. Dataset: Aug 2022 – May 2026. 380 primary incidents across 15 behavioral categories.*
