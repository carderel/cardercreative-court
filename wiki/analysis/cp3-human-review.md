# CP3 Human Review — 54 Items Pending

**What are CP3 items?**
CP3 items are analysis flags that the automated pipeline generated but could not confirm without human input. They require either Eli's personal recollection, attorney judgment about evidentiary use, or review of media files not available to the
pipeline. Each item is linked to a specific message or message cluster in the raw dataset.

**How to use this document:**
Work top to bottom within each section. For each item, check the box when reviewed and add a note if needed. HIGH priority items appear first in the dedicated section below, then again (marked) within their RF section.

**Full source data:** `raw/rf-passes/` contains the complete pass outputs. The CP3 extraction file is at `/tmp/cp3_complete.json`. RF-13 addenda source is at `raw/calibration/addenda-RF-13.json`.

**Total: 54 items** — 20 RF-01, 29 RF-04, 4 RF-05, 1 RF-13.
**Review status (May 2026): 49 of 54 reviewed.**
**Remaining: 5 items** — all HIGH PRIORITY (attorney review required: RF04-027, 029, 030, 031, 033).

---

## HIGH PRIORITY — Attorney Must Review First

These items involve active legal threats, escalation to physical-harm allegations, image evidence requiring review, or conduct that directly feeds the Phase C visit-refusal cascade. Review before any other section.

---

### CP3-RF04-027 — HIGH PRIORITY
- [ ] Reviewed
**Messages:** ROW-14203, B-027 cluster (approx. Jul–Aug 2025)
**Summary:** Major Phase B escalation across multiple incidents. On Jul 19, a full-custody threat cluster was activated by Melissa's ER hospitalization — Eli keeping Olivia appropriately was reframed as inadequate parenting, with explicit custody
filing threats followed by "There's no threats / just stating my plan of action" as DARVO denial. On Aug 14, new extreme allegations appear: "You didn't even want her," a doctor invoked as implied harm evidence ("My Dr told me I shouldn't have her
around you"), and a child counselor used as third-party validator of Olivia's fear of Eli. On Aug 25-28, the Labor Day visit refusal that initiates the Phase C visit-refusal cascade begins. Also in this cluster: unprovoked alcoholism insinuation
(beer-spend framing), "dumbass" at its 8th confirmed instance, "shit father" second dataset instance, and relocation signal ("may move soon").
**Action required:** ATTORNEY MUST REVIEW — this is the batch where the Phase C visit-refusal cascade begins (Aug 26-28 Labor Day). Confirm: did any court or parenting-plan obligation govern the Labor Day weekend? Was any police report filed at this
point? The doctor-and-counselor references should be followed up: were any formal reports made?

---

### CP3-RF04-028 — HIGH PRIORITY
- [x] Reviewed — image characterized, see incident page
**Messages:** B-028 cluster (Phase B/C boundary, approx. Aug–Oct 2025)
**Summary:** Three distinct high-priority developments. First, Aug 28-30: Melissa retroactively rewrites the visit gap as a safety judgment, establishing the "safe environment" framing she will use to justify ongoing gatekeeping. Second, Sep 2:
Melissa sends a screenshot from Olivia's phone showing Eli's texts apologizing for accidentally bumping Olivia in the stomach during play — Olivia responded "we good" and the exchange was warm and affectionate throughout. Melissa forwarded this to
Eli asking "Why are you smacking her?" **False allegation confirmed.** Broken thumb context: Olivia had an avulsion fracture diagnosed Aug 31 that occurred during Melissa's care (Labor Day visit was refused — Olivia was with Melissa all week).
Melissa sent the smacking allegation Sep 2, then sent the broken thumb medical record Sep 3 with "I feel really bad." Injury on Melissa's watch; Eli implicated. Third, Sep 17: most advanced legal threat in the dataset — past-completed attorney
consultation with "agreement ready to sign."
**Image files (corrected):**
- `_2586.jpeg` — the smacking screenshot (Olivia's phone, Eli's texts to her; pipeline reference to `_2588` was a numbering error)
- `_2587.jpeg` — Nationwide Children's Hospital appt confirmation for Olivia, Sep 5, 2025 3:40 PM (hand doctor follow-up for broken thumb)
- `_2588.jpeg` — Melissa sends broken thumb medical record to Eli + "I feel really bad"
**Action remaining:** ATTORNEY MUST REVIEW the Sep 17 "agreement ready to sign" — was any agreement ever presented, served, or filed? What were its terms?
→ Full characterization: [[../incidents/RF-04/2025-09-02_RF04-B028-002|RF04-B028-002]]

---

### CP3-RF04-029 — HIGH PRIORITY
- [ ] Reviewed
**Messages:** ROW-14839 (approx. Nov 24, 2025)
**Summary:** Nov 24 mega-cluster with three compounding elements. First explicit on-record allegation that Abby makes negative characterizations directly to Olivia: "Abby calling her a bad sister and you a bad dad." Family displacement relay: "Alice
took it over makes her feel unwelcome." Third consecutive visit refusal context (Nov 18, Nov 21, Nov 24 — the refusal cascade is now in week three). These elements combine RF-04, RF-01, RF-11, and RF-02.
**Action required:** ATTORNEY MUST REVIEW full text of ROW-14839. Confirm: was a police report filed after any of the Nov 18/21/24 refusals? Cross-ref RF-01 and RF-11. Note: Abby-as-direct-harm-actor (as opposed to obstacle) is a new vector here — if
the GAL interviews Olivia, this allegation may surface.

---

### CP3-RF04-030 — HIGH PRIORITY
- [ ] Reviewed
**Messages:** ROW-14850, ROW-14851-14852 (approx. Nov 25, 2025)
**Summary:** Nov 25 contempt threat as DARVO inversion. Melissa threatens contempt against Eli for alleged non-visitation — this is a direct inversion of her own documented three-week visit-refusal cascade (Nov 18/21/24). The stated legal basis: "You
didn't remedy your home to be safe" recycles the B-028 "safe environment" framing. ROW-14850 states "I just called the lawyer," indicating active legal consultation. Separately, ROW-14841-14848 contains contempt threats over a $30 childcare dispute —
notable for legal-threat disproportionality.
**Action required:** ATTORNEY MUST REVIEW together with CP3-RF04-028 (Sep 17 "agreement ready to sign") as the legal-threat escalation arc. These two items together show a continuous attorney-consultation-to-contempt-filing trajectory spanning
Sep–Nov 2025. Cross-ref RF-05.

---

### CP3-RF04-031 — HIGH PRIORITY (text-flagged)
- [ ] Reviewed
**Messages:** ROW-15099, ROW-15106, ROW-15108, ROW-15498 (Feb 15-16, 2026 incident; Mar 28, 2026 follow-up)
**Summary:** Eli admitted raising his voice during an argument with Abby (ROW-15099, ROW-15106). That admitted fact becomes the scaffold for a six-week amplification trajectory: raised voice → "verbal abuse" → Olivia "traumatized" → Olivia states
"pause the weekends" (ROW-15108, used as visit-refusal authority) → "drinking problem?" insinuation → "You clearly have a drinking problem" explicit accusation six weeks later (ROW-15498, Mar 28). Olivia's stated "pause the weekends" preference is
used as Melissa's access-denial justification.
**Action required:** ATTORNEY MUST REVIEW — the admitted raised voice is the only factual anchor in this amplification chain. Attorney should prepare to distinguish the admitted conduct from the amplification. Cross-ref RF-11 (Olivia deployed as
trauma witness and visit-refusal authority) and RF-02 (child relay as gatekeeping mechanism). Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-033 — HIGH PRIORITY (text-flagged)
- [ ] Reviewed
**Messages:** ROW-15588, ROW-15592 (Apr 12, 2026)
**Summary:** Two distinct elements. First, ROW-15588: "Why do you keep trying to make Olivia think I'm abusing her?" — the "keep trying" formulation asserts a pattern of conduct by Eli as a factual claim that could be deployed in custody proceedings.
Second, ROW-15592: Melissa's characterization of "screaming for no reason" about the Feb 15 incident is now attributed to a peer-parent (Naomi's father), meaning this narrative may be circulating through Olivia's school community. This is the latest
deployment in the Feb 15 amplification trajectory: raised voice (Feb 15) → verbal abuse → traumatized → pause weekends → drinking problem (Mar 28) → screaming for no reason / peer-parent network (Apr 12).
**Action required:** ATTORNEY MUST REVIEW — verify there is no prior instance of Eli asking about abuse (vs. welfare checks) before the "keep trying" characterization appears. The Naomi/peer-parent network reach means the narrative may have witnesses
outside the text record. Eli's responses (ROW-15593, ROW-15596) are measured and factual — document the communication quality contrast.

---

## RF-01 — Parental Alienation (20 items)

---

### CP3-RF01-B002-001
- [x] Reviewed
**Messages:** (no specific row — arc-level flag)
**Summary:** ARC-RF01-001 promoted to ACTIVE. The Halloween 2022 conflict establishes the first extended written documentation of the "new family abandonment" narrative. Two Sev-2 signals. The Abby attack vector is confirmed active from this batch.
Eli's physical arrival at Melissa's neighborhood on Halloween night directly contradicts the written narrative Melissa constructed claiming Eli refused to come.
**Action required:** Confirm: does Eli recall arriving at or near Melissa's neighborhood on Halloween 2022? If yes, this directly counters the written abandonment narrative from the same date. Cross-ref: `attorney-prep-abby-household.md`.
Yes.  I did and its confirmed in the texts: 
2022-10-31 22:53:44	Sent By Eli to Melissa	SMS	She still in her costume?
2022-10-31 22:54:03	Sent By Eli to Melissa	SMS	About ten or 15  mins away
2022-10-31 23:08:25	Sent By Eli to Melissa	SMS	Alright well came over.  Drive through the and didn't see you guys.  
---

### CP3-RF01-B006-001
- [x] Reviewed
**Messages:** ROW-1884
**Summary:** Written admission of in-front-of-Olivia disparagement. Melissa states: "I shouldn't have called you a dumbass in front of her but you're such a shit dad that it slipped out." This is documentary proof of Melissa disparaging Eli in
Olivia's presence, with the explicit justification that Eli's parenting warranted it. Combined with the "horrible father" / "not a good father" language across B-002 through B-006, this admission supports the inference that Olivia is routinely
exposed to negative characterizations of her father.
**Action required:** ROW-1884 is the anchor exhibit for in-child's-presence disparagement — attorney should confirm this for use in RF-01 argument. Confirm: does Eli recall any occasion when Olivia repeated similar language to him?
Yes.  Clearly its in the text exchanges but I've had to tell Melissa on phone calls not to talk like that in front of Olivia.
---

### CP3-RF01-B007-001 — Apr 21–28, 2023
- [x] Reviewed
**Messages:** ROW-2373, ROW-2379, ROW-2396–2409
**Summary:** Three compounding elements from a single week. Melissa wrote "that bitch can shut her fucking whore mouth" about Abby (ROW-2373). In the same cluster, Olivia's "adamant" refusal to see Eli if Abby is present is relayed (ROW-2399), with
Melissa claiming it was "her plan all on her own" (ROW-2408). Critically, ROW-2409 shows Olivia accepts Milo but not Abby specifically — targeted rejection of one person is inconsistent with a child-driven preference and consistent with coached
aversion. The "her plan all on her own" deflection is a documented coaching-pattern marker.
**Action required:** Confirm: does Eli recall this period of Olivia refusing visits contingent on Abby's presence? Was this the first time Olivia raised Abby as a condition? Cross-ref: `attorney-prep-abby-household.md`.
I've never heard Olivia say that she doesn't want Abby around.
---

### CP3-RF01-B008-001 — Jul 14, 2023
- [x] Reviewed
**Messages:** ROW-2924, ROW-2935, ROW-2936, ROW-2940
**Summary:** Melissa wrote "You're a shit dad" (ROW-2940) on Olivia's birthday. On the same date: "We all know it's Abby that's not letting you go because she is insecure and immature" (ROW-2935) — the first written statement explicitly attributing
Eli's absence to Abby's control rather than Eli's own choices. ROW-2936 instructs Eli to "dump her and date an honest person that will support your relationship with your daughter." The "We all know" phrasing implies this narrative is being
communicated socially, potentially within Olivia's hearing, and especially significant given the birthday context.
**Action required:** Confirm: did Eli miss Olivia's birthday dinner in 2023? What were the actual circumstances? The "We all know" framing should be explored — who else was present, and could Olivia have overheard this characterization on her
birthday? Cross-ref: `attorney-prep-abby-household.md`.
That was Olivia's baptism and they wanted me to go with them out to eat afterwards and given the circumstances I didn't think that was appropriate and said so.  Here is the full exchange, sent means I sent it and received means Melissa sent it.
2023-07-14 23:11:31	Received	SMS	Can't even eat dinner with your daughter on her bday as she's begging you 
2023-07-14 23:35:41	Sent	SMS	It's not appropriate for us to be hanging out like a family.  How come I couldn't take her myself?
2023-07-14 23:38:07	Received	SMS	First of all you didn't ask to take her on your urn. You've never asked to do anything with her. We made plans cause that's what a good parent does. Don't act like I wouldn't let you 
2023-07-14 23:38:44	Received	SMS	You just said you couldn't then walked away
2023-07-14 23:39:34	Received	SMS	Actually said you couldn't then muttered something that might've been hang on them walked away and got in your car 
2023-07-14 23:39:35	Sent	SMS	You guys went and got in the car.
2023-07-14 23:39:53	Received	SMS	No weren't 
2023-07-14 23:40:04	Received	SMS	We asked you while you were putting your camera away 
2023-07-14 23:40:11	Received	SMS	Then you went and got in your car.  
2023-07-14 23:40:35	Received	SMS	We didn't get in ours until well after you were in yours
2023-07-14 23:42:35	Received	SMS	Third we're not hanging out like a family. We are supporting our daughter and making her happy on her birthday 
2023-07-14 23:43:16	Received	SMS	We all know it's Abby that's not letting you go because she is insecure and immature 
2023-07-14 23:43:54	Received	SMS	You should dump her and date an honest person that will support your relationship with your daughter 
2023-07-14 23:48:54	Received	SMS	Olivia and I are going to dinner. She asked if you could come. I told her I was fine with it 
2023-07-14 23:49:02	Sent	SMS	I am not getting into that with you. That is a whole other thing.  
2023-07-14 23:49:36	Received	SMS	There's nothing to get into 
2023-07-14 23:49:47	Received	SMS	You're a shit dad
2023-07-15 01:19:01	Received	SMS	We were not in our car. We were standing up by Andrea and you were packing your cameras gear up. 
2023-07-15 01:19:25	Received	SMS	Andrea felt really bad for olivia and asked if it would make Olivia feel better if Josiah came with us 
2023-07-15 01:23:05	Sent	SMS	When I got done and looked up you were gone
2023-07-15 01:26:21	Received	SMS	You muttered something then walked off and went into your car 
2023-07-15 01:26:31	Received	SMS	Then we tried to call you and you wouldn't answer 
2023-07-15 01:26:46	Received	SMS	So you admit you went to your car 
2023-07-15 01:28:33	Sent	SMS	I said let me put my bag away.
2023-07-15 01:30:52	Received	SMS	That's not what you said. You got in your car and sat in there 
2023-07-15 01:31:00	Received	SMS	That's not putting your bag away 
2023-07-15 01:31:05	Received	SMS	Your lies don't work with me 
2023-07-15 01:31:08	Received	SMS	I know better 
---

### CP3-RF01-B009-001 — Jul 31, 2023
- [x] Reviewed
**Messages:** ROW-3151
**Summary:** Melissa explicitly admits in writing that she is the primary driver of Olivia's calls to Eli: "I normally ask her if she wants to call you in the am. I'm the reason she calls you most days. She didn't want to today. She's still mad at
you." This is the mechanical admission that explains the phone-refusal patterns in B-007 and B-008: when Melissa is in conflict with Eli, she stops initiating Olivia's calls, and call frequency drops. The "she's still mad at you" framing shows
Melissa mediating — and amplifying — Olivia's emotional state as a message to Eli.
**Action required:** Confirm: does Eli recall noticing a pattern where calls from Olivia dropped during periods of conflict with Melissa? This admission is a key exhibit for the gatekeeping argument — attorney should flag for RF-02 cross-use.
Yes and No.  Melissa monitors the calls between Olivia and I and will interject herself into them during my call with Olivia. So if it serves her purpose and Melissa wants to grill me then yes she will allow Olivia to call but I cannot accurately make the statement that I Melissa does but I believe she does.
---

### CP3-RF01-B010-001 — Sep 26, 2023
- [x] Reviewed
**Messages:** ROW-3629
**Summary:** Melissa wrote: "I really hope you weren't just making yourself available because there were young girls there" — suggesting Eli's attendance at Olivia's cheerleading practices was motivated by predatory interest in other children rather
than Olivia. This retroactively poisons six to eight weeks of Eli's most engaged recent parenting. If communicated to Olivia, it reframes her father's presence at her activities as predatory rather than paternal. This is part of an escalating
false-allegation pattern that includes ROW-3388 (same batch: "banging your niece...while your daughter and wife are upstairs asleep") — the "young girls" allegation is qualitatively more serious because it involves behavior in Olivia's presence.
**Action required:** Confirm: does Eli recall attending cheer practices during this period? Approximately how many practices? Was there any other adult or parent who observed his attendance? This allegation's severity warrants flagging for RF-15
cross-reference. Cross-ref: `attorney-prep-abby-household.md`.
Yes I attended multiple practices 5 or more but I don't have an exact number and I did not talk to other parents.  I dropped her off and sometimes would sit out there but sometimes just sit in my car and work.  
---

### CP3-RF01-B012-001 — Dec 2, 2023
- [x] Reviewed
**Messages:** ROW-4073–4074
**Summary:** (No text description available in source data — message content requires direct review.)
**Action required:** Confirm: read ROW-4073–4074 directly from the raw dataset. Characterize the content and determine RF-01 relevance. Add note here after review.
This is Melissa talking about an event I took Abby, Milo and Olivia to in canal winchester, it was a christmas event and melissa is speaking for Olivia.
2023-12-02 19:34:32	Received	SMS	Olivia is upset that Abby led you guys out of the thing last night. She said she didn't get to ice skate 
2023-12-02 19:34:55	Received	SMS	She said you just follow Abby around and Abby led you to the car 
2023-12-02 19:41:01	Sent	SMS	They didn't have skates for her. There were people queud for them and no idea how long her size would have taken
2023-12-02 19:41:40	Received	SMS	She didn't get to see Santa either 
2023-12-02 19:54:57	Sent	SMS	Yes she did
2023-12-02 19:55:12	Sent	SMS	I have a picture of her with Santa
2023-12-02 19:58:41	Received	SMS	Now she said she did 
---

### CP3-RF01-B012-002 — Dec 24, 2023
- [x] Reviewed
**Messages:** ROW-4185
**Summary:** (No text description available in source data — message content requires direct review.)
**Action required:** Confirm: read ROW-4185 directly from the raw dataset. Note this is a Christmas Eve message — temporal context (holiday cluster, confirmed elevated volatility) is relevant. Characterize content and determine RF-01 relevance.
Olivia was sick and I'm not sure what the context of the rest of that was.  I believe at that time Melissa wouldn't allow Olivia to come to my house because I had a cat.  So everything had to be done outside of the house.
---

### CP3-RF01-B013-001 — Mar 17, 2024
- [x] Reviewed
**Messages:** ROW-4794
**Summary:** (No text description available in source data — message content requires direct review.)
**Action required:** Confirm: read ROW-4794 directly from the raw dataset. Characterize content and determine RF-01 relevance. Add note here after review.
There is nothing on the 17th but on the 18th there is this:
2024-03-18 01:22:31	Received	SMS	She was upset that you were getting off the phone. 
2024-03-18 01:23:00	Received	SMS	Could you not here it in her voice and by telling you that you were only on the phone for two minutes 
2024-03-18 01:24:38	Received	SMS	She tells me about how it hurts her that you don't have time for her 
2024-03-18 01:27:26	Received	SMS	She was telling you that she wanted to talk to you and that she was upset that you wanted to get off the phone. You hurt her feelings not me. Nice try trying to turn it around on me because once again your selfish self fucked up.  
2024-03-18 01:28:08	Received	SMS	I simply said that she could be up another 20 minutes cause I'm going into work later tomorrow
2024-03-18 01:37:10	Sent	SMS	I am out of the bathroom if she wants to call 
2024-03-18 01:38:15	Received	SMS	She's calling but you aren't answering 
2024-03-18 01:38:28	Received	SMS	Quit playing with her feelings 
2024-03-18 01:39:31	Received	SMS	Now you've upset her cause you said she could call and then didn't answer our phone calls 
2024-03-18 01:39:36	Received	SMS	Such a worthless dick 
2024-03-18 01:42:31	Sent	SMS	I have my phone in my hand!!!
2024-03-18 01:43:27	Received	SMS	Then why the fuck didn't you answer 

Which is Melissa speaking for Olivia.

---

### CP3-RF01-B015-001 — May 14, 2024
- [x] Reviewed — see wiki/entities/abby.md for full account
**Messages:** ROW-5309–5316
**Summary:** Full rape narrative construction delivered in the co-parenting channel. Melissa alleges: (1) Eli deliberately intoxicated Abby with tequila; (2) was found "standing over her with her left breast out" while Milo cried unattended upstairs;
(3) Abby may have been "fighting" because "she still thought you were attacking her"; (4) Eli may be a repeat rapist who selected Abby knowing she had prior sexual trauma and "told her not to tell anyone that she had been raped before." This is the
most extreme written false allegation in the 15,000-message record. Eli does not appear to respond substantively in this batch.
**Action required:** ATTORNEY MUST REVIEW — primary RF-15 anchor exhibit. The complete falsity of each specific allegation should be confirmed with Eli and documented for cross-examination preparation. Cross-ref: `attorney-prep-abby-household.md`.
This is covered in the section about Abby.  In this document: /Users/flackfizer/Documents/Projects/Court Documentation/Attorney Wiki/wiki/entities/abby.md
---

### CP3-RF01-B016-001 — Jun 30, 2024
- [x] Reviewed — see wiki/entities/abby.md for full account
**Messages:** ROW-5862
**Summary:** Most sexually explicit incest characterization of the Eli/Abby relationship in the record: "doesn't know that she shouldn't fuck her uncle." Delivered alongside comprehensive dismissal of Eli's parenting judgment: "I'm not taking
parenting advice from someone who raised a kid that has no morals..." Triggered by Eli's reasonable concern about Olivia's hospital visit. Notably, Abby is characterized as "makes false allegations" in this same cluster — weeks after Melissa herself
made the rape narrative allegations (B-015, ROW-5309–5316).
**Action required:** Confirm: does Eli recall what prompted this exchange — was this specifically about a hospital visit for Olivia? The irony of Melissa accusing Abby of making false allegations within weeks of the rape narrative should be prepared
as a credibility argument. Cross-ref: `attorney-prep-abby-household.md`.
This is covered in the section about Abby.  In this document: /Users/flackfizer/Documents/Projects/Court Documentation/Attorney Wiki/wiki/entities/abby.md
---

### CP3-RF01-B017-001 — Aug 4, 2024
- [x] Reviewed
**Messages:** ROW-6282–6524
**Summary:** The most sustained single-day inadequate-father cluster in the record. Triggered by a scheduling conflict. Contains: written intent to file for sole custody and show these messages to a lawyer (ROW-6290, ROW-6312); five distinct
inadequate-father iterations; Olivia's sadness/disappointment used as leverage; the "2.5 hours" framing in its fourth iteration across the record; cat-allergy characterization for court (ROW-6345–6346); "walk out of her life like nothing" abandonment
narrative (ROW-6514–6516); and a baby/pregnancy reference (ROW-6436). Notably, Eli does not engage with the character attacks, responding only to practical scheduling and offering alternatives. Melissa resolves the underlying issue independently
(Roger watches Olivia) after the extended attack.
**Action required:** Confirm: what was the original scheduling conflict? Does Eli recall the cat-allergy reference — was there any prior attorney communication about this? The sole-custody filing threat (ROW-6290/6312) should be cross-referenced with
the timeline of actual legal filings.
Melissa had requested I watch Olivia as a favor (this was Melissa's time) and I originally said I could do it.  Then I had a work issue come up that required me to meet with a client directly at their office at the same time so I had to change plans, which put it back on Melissa.

---

### CP3-RF01-B018-001 — Aug 19–20, 2024
- [x] Reviewed
**Messages:** ROW-6783–6831
**Summary:** Two critical admissions in a single cluster. ROW-6819 is the first direct written admission of Melissa scripting Olivia's conversations with Eli: "I've told her to have conversations and I also give her things to tell you about. I remind
her of some of the things she's told me." This is the mechanical proof that Olivia's "organic" sharing with Eli is curated and prompted by Melissa. ROW-6795 frames Olivia's openness with Melissa (which is itself a product of Melissa's coaching) as
evidence of Melissa's superior parenting. ROW-6827 explicitly positions Melissa as necessary conduit: "You're reaching out to me saying you want to talk to her."
**Action required:** ROW-6819 is a key exhibit for the child-coaching argument. Confirm: does Eli recall this exchange? Has he noticed Olivia sometimes seeming to relay topics or framings that mirror things Melissa has raised in text? The "12
minutes" school-visit quantification in this cluster should also be verified — attorney should check school records for visit frequency.

---

### CP3-RF01-B019-001 — Sep 14, 2024
- [x] Reviewed
**Messages:** ROW-7161–7170
**Summary:** Physical harm allegations relayed via Olivia, arriving within days of Alice's birth. ROW-7164: Olivia reportedly states Eli "choked her and she couldn't breathe for a bit" — the most serious physical allegation in the record.
ROW-7165–7166: Olivia's reported worry that Eli will harm Alice similarly. ROW-7168: Melissa's personal DV allegation, "you used to physically harm me." The choking allegation does not appear anywhere in prior batches and has no corroborating
evidence in the record. The timing — within days of Alice's birth, when Eli's fitness to parent the newborn is newly relevant — is significant.
**Action required:** ATTORNEY MUST REVIEW — the choking allegation is a serious false accusation with potential child-protection implications. Eli should be prepared to address it directly. The timing relative to Alice's birth should be noted as
strategic. Cross-ref ROW-7364 (Oct 2 restatement of same allegation). Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF01-B019-002 — Oct 2, 2024
- [x] Reviewed — verbatim attorney exhibit; text confirmed in pipeline
**Messages:** ROW-7461
**Summary:** Explicit acknowledgment that Melissa's ongoing inadequacy campaign is a deliberate custody strategy. Melissa wrote: "You weren't present and involved in anything until I recently pointed out all the things you don't do that would easily
give me full custody." She explicitly characterizes her own narrative construction as a vehicle toward sole custody, and attributes any improvement in Eli's engagement to fear of losing custody rather than genuine care. This is the clearest on-record
admission that the inadequate-father pattern is strategic rather than organic.
**Action required:** ROW-7461 should be confirmed as an attorney exhibit — it is the explicit admission connecting the inadequacy campaign to custody strategy. Cross-reference with ROW-6290/6312 (B-017 sole-custody filing threats), ROW-5303/5308
(B-015 court-evidence framing), and the cat-allergy attorney letter.

---

### CP3-RF01-B019-003 — Oct 2, 2024
- [x] Reviewed — verbatim attorney exhibit; text confirmed in pipeline; 3-admission compound documented
**Messages:** ROW-7478
**Summary:** Third written admission of controlling Olivia's calls to Eli. ROW-7478: "I used to ask her if she wanted to call you in the mornings to keep communication going." Prior admissions: ROW-3151 ("I'm the reason she calls you most days. I
normally ask her if she wants to call you in the am") and ROW-3353–3355 ("That's why you are called most mornings. Because I ask."). In this instance Melissa frames her control of Olivia's calls as a benevolent contribution to co-parenting. ROW-7479
extends this to school communications: "I used to remind you of her mail days at primrose and even wrote a note on your behalf one day" — framed as goodwill.
**Action required:** Three written admissions of gatekeeping Olivia's communication access. Attorney should prepare these as a compound exhibit showing the controlling mechanism — Melissa positions control as generosity while using its withdrawal as
a punitive tool.

---

### CP3-RF01-B022-001 — Jan 15, 2025
- [x] Reviewed — verbatim attorney exhibit; text confirmed in pipeline
**Messages:** ROW-7726
**Summary:** First "sperm donor" characterization in the record. Melissa wrote: "You are completely useless as a father. I stand by that. I'm not sorry for saying that nor will I ever be until you become an actual father and not a sperm donor cause
that's mostly what you are at this point. You have no fatherly instincts as it comes to your own daughter." This escalates the inadequate-father framing from bad parenting to negation of paternal identity.
**Action required:** Verbatim attorney review item — confirm exact text against ROW-7726. Note this as the arc escalation point where "inadequate father" shifts to "not a father." Cross-ref ARC-RF01-001.

---

### CP3-RF01-B022-002 — Feb 4, 2025
- [x] Reviewed
**Messages:** ROW-7752
**Summary:** Melissa relayed: "Last night as we are going to bed she asked why you used to visit everyday and now you barely do." This is an abandonment-arc question delivered in Olivia's voice. Given the confirmed coaching admission at ROW-6819
(Melissa scripts Olivia's conversations with Eli), the structural suspicion that this question was prompted or shaped by Melissa should be noted.
**Action required:** Confirm: does Eli have an explanation for the frequency change in visits around this period? The contrast between Eli's prior visit frequency and the current pattern should be documented with objective scheduling records where
available. The juxtaposition with ROW-6819 should be prepared as a coaching-pattern argument.
I did visit Olivia a lot but had to cut back because Melissa refused to let Olivia come to my house due to the cat issue again, I had to go there but it was not sustainable financially or practically.  
---

### CP3-RF01-B026-001 — Jun 13, 2025
- [x] Reviewed — verbatim attorney exhibit; text confirmed in pipeline; Olivia-voice sexual framing documented in abby.md
**Messages:** ROW-7877
**Summary:** Melissa wrote: "It's more fucked up to see your dad dating your cousin. That's more confusing. That's my dad and my cousin why are they making out." This is the first use of Olivia's imagined first-person voice to deliver the incest
framing of the Eli/Abby relationship — Melissa attributes to Olivia the perspective that watching her dad date her cousin is confusing and inappropriate. Contextually significant: this attack was deployed while Eli was asserting Melissa's compliance
with the 9-month partner introduction rule.
**Action required:** Verbatim attorney review item — confirm exact text against ROW-7877. The use of Olivia's voice to deliver sexual framing is a distinct escalation from prior instances. Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF01-B028-001 — Aug 27–28, 2025
- [x] Reviewed
**Messages:** ROW-8139, ROW-8177
**Summary:** Two extensive Olivia-voiced complaint relays. ROW-8139: "She said all you do is follow Abby around and not let them do anything then leave" — inadequate-father framing in Olivia's reported speech. ROW-8177 is the most extensive complaint
relay in the record: "She has trouble sleeping there, Milo and her fight too much, you dont have food she likes, she doesn't feel like she has space since her room is now Alice's room and covered in baby stuff, you only let her go in certain parts of
the house and it's boring there. She just doesn't like it." The specificity and framing of these complaints mirrors Melissa's own prior attack vectors and should be read against the coaching admission at ROW-6819.
**Action required:** Both items are verbatim attorney review items. Confirm with Eli: does the description in ROW-8177 match the actual physical state of his home? Are the specific complaints (food, room, space limits) accurate? The specific details
can be verified or refuted — attorney should prepare a point-by-point response to each complaint for the GAL interview. Cross-ref: `attorney-prep-abby-household.md`.
Olivia has a room in my house.  She now has to share it with her sister's stuff because its a small house.  Olivia still has her own bed and space and when she is here it is her room.  I don't let Olivia or any of the kids in the basement, that's my office space and has tools and other things kids don't need to be around or should not mess with.  Its best just to keep them out.
She had trouble sleeping at my house at that time because she still sleeps in the same bed with her mother.  The food issue is because Olivia is used to eating out all the time.  We make meals for everyone and try to make stuff everyone can eat but Olivia refusesto eat anything we make.  She wants me to be a short order cook and cook what she wants or take her out to eat.
---

## RF-04 — Emotional Manipulation / DARVO (29 items)

Items CP3-RF04-027 through CP3-RF04-030 and CP3-RF04-031/033 (HIGH PRIORITY) are reproduced in full above. They are listed here with references only.

---

### CP3-RF04-002
- [x] Reviewed
**Messages:** ROW-791 (approx. Nov 12, 2022)
**Summary:** ARC-RF04-002 promoted from WATCHING to ACTIVE on its third signal (ROW-791). Arc-level calibration flag — no new message content; confirms pattern threshold crossed.
**Action required:** Confirm: does this date and arc promotion match Eli's recollection of when Melissa's emotional manipulation pattern became noticeable?
Melissa's emotional manipulation has been happening since 2020.  
---

### CP3-RF04-003
- [x] Reviewed
**Messages:** ROW-937–938 (approx. late 2022)
**Summary:** First false sexual predation allegation in the record. ROW-937–938 represents the qualitative start of the Abby-as-obstacle escalation and is identified as the primary Phase A RF-15 anchor.
**Action required:** Confirm: read ROW-937–938 against raw data to verify exact content. Characterize the specific allegation for cross-reference with RF-15 analysis. Cross-ref: `attorney-prep-abby-household.md`.
This was me trying to see what plans Olivia had for Thanksgiving and I asked "Are you doing anything with you re fily tomorrow " They typo 're fily' should have been family.  She responded with 
2022-11-23 21:06:03	Received	SMS	Why? You hoping to bang another one?  
2022-11-23 21:06:55	Received	SMS	I mean this is the anniversary of you meeting her when she was 7 getting ready to turn 8 and you 30. Happy anniversary 
---

### CP3-RF04-004
- [x] Reviewed
**Messages:** ROW-1287 (approx. Dec 28, 2022)
**Summary:** Second uncle/dad predation framing in the record. Pattern confirmed recurring when Milo is mentioned in a medical context.
**Action required:** Confirm: review ROW-1287 exact text. Document the content-correlation (Milo medical context → predation framing) for the pattern argument. Cross-ref: `attorney-prep-abby-household.md`.
Oliva had surgery that day at 11:30 Melissa.  They had to be there at 9:30.  I couldn't be there at 9:30 but was able to make it shortly after they got checked after dropping Milo and Abby off after Milo's dr appointment.
2022-12-28 15:06:48	Received	SMS	We have to be at surgery center at 9:30. Surgery at 11:30 
2022-12-28 15:09:56	Sent	SMS	Where is the surgery center?  This works out.  Milo has a specialist apt at 7:45 supposed to go until 9 or so.  Gives me time to run them back and be there shortly by 10.  
2022-12-28 15:15:30	Received	SMS	Nobody gives a shit what you're doing 
2022-12-28 15:16:22	Received	SMS	This appointment was made months ago and should take priority over milos anyhow since she is your kid and he's not and hers is surgery 
2022-12-28 15:16:46	Received	SMS	Abby could reschedule, take a taxi, Uber, Lyft or bus or get off her lazy ass and get a license 
2022-12-28 15:18:05	Received	SMS	Milo need to go to a specialist cause he has an uncle/dad. That would be traumatic 
2022-12-29 15:34:01	Received	SMS	112.50 + 87.5 = 200
2022-12-29 19:25:34	Received	SMS	2:15 acetaminophen 
2022-12-29 19:26:09	Received	SMS	She has her prime sports drink and a watermelon popsicle. 
2022-12-29 19:26:15	Received	SMS	Didn't throw up yet 
---

### CP3-RF04-005
- [x] Reviewed
**Messages:** (no specific row — compound event COMP-RF04-004)
**Summary:** Feb 15 car accident/scammer compound event combining RF-04, RF-09, RF-01, and RF-05. "Are you dumb?" reaches its fourth confirmed instance. Illness-skepticism sub-pattern reaches four confirmed instances.
**Action required:** Confirm: does Eli recall a car accident or scammer incident around Feb 15 (year context needed from batch assignment)? Confirm the illness-skepticism pattern — was Eli genuinely ill on these occasions?
I did get in a car accident around that time.  Melissa accused me of trying to scam the driver of the car insinuating I was going to commit insurance fraud.
---

### CP3-RF04-006
- [x] Reviewed — "she was 7" cross-batch pattern documented; attorney to confirm exact text
**Messages:** ROW-2167, ROW-2173 (Mar 31, B-006)
**Summary:** Third uncle/niece predation framing confirmed across three batches (B-003, B-004, B-006). The repeated "she was 7" factual framing across multiple instances confirms premeditation — this is not an impulsive statement but a prepared
narrative. Compound event COMP-RF04-006.
**Action required:** Confirm: review ROW-2167/2173 exact text. The cross-batch consistency of the "she was 7" framing is significant for the premeditation argument — attorney should verify this exact phrase appears identically in all three instances.
Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-007
- [x] Reviewed — child-relay mechanism introduction noted; RF01-B007 incident page updated
**Messages:** ROW-2373 (Apr 22, B-007)
**Summary:** "That bitch can shut her fucking whore mouth" — Abby attack representing the framework escalation peak for Phase A. ARC-RF04-002 signals 4-5 introduce the new child-relay-as-Abby-exclusion-lever mechanism. Compound event COMP-RF04-007.
**Action required:** Confirm: note the introduction of the child-relay mechanism in this batch — Olivia's stated preferences being used to exclude Abby. Cross-ref CP3-RF01-B007-001 (same date cluster). Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-008
- [x] Reviewed — four-category compound noted; RF01-B008 incident page updated with baptism context
**Messages:** ROW-2924–2951 (Jul 14–15, B-008)
**Summary:** Birthday compound event. "Abby is insecure and immature" causal attribution plus instruction to "dump her" plus "you're a shit dad" plus gaslighting sequence ("your lies don't work with me / I know better"). Compound event COMP-RF04-008,
combining RF-04, RF-01, RF-05, and RF-09.
**Action required:** Confirm: see also CP3-RF01-B008-001 (same cluster). The four-category compound is a significant multi-pattern anchor — confirm exact text of ROW-2924–2951. Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-009
- [x] Reviewed — Melissa saw Abby at the cheer game; "pregnant or just fat?" was a targeted dig to rile Eli, not genuine co-parenting concern; "brother cousin / prep Olivia" covert-concern packaging confirmed pretextual
**Messages:** ROW-3240, ROW-3271 (Aug 13–14, B-009)
**Summary:** "Abby pregnant or just fat?" plus "If so I need to prep Olivia for a brother cousin" — fourth predation framing, delivered through the covert-concern mechanism. First cheer game context. Compound event COMP-RF04-009 (RF-04 + RF-15).
**Action required:** Confirm: does Eli recall this message around Aug 2023? The "brother cousin" framing weaponizes a potential pregnancy as another incest characterization — note for the predation framing count and cross-ref:
`attorney-prep-abby-household.md`.

---

### CP3-RF04-010
- [x] Reviewed — 11-hour premeditation gap documented; text in pipeline; attorney to confirm exact text
**Messages:** ROW-3388 (Aug 27, B-010)
**Summary:** Fifth predation framing, triggered by DARVO inversion of Eli's legitimate parenting question. "Banging your niece / getting ready to turn 8" — notably premeditated, arriving more than 11 hours after the practical exchange was resolved.
Compound event COMP-RF04-010 (RF-04 + RF-15).
**Action required:** Confirm: the 11+ hour gap between resolution of the practical exchange and this message is significant for premeditation argument. Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-011
- [x] Reviewed — Eli was offering to take Olivia around his neighborhood; Melissa couldn't take her herself; redirected to her neighborhood and simultaneously attributed Eli's genuine parenting offer to Abby-conflict-avoidance; annual Halloween DARVO pattern confirmed
**Messages:** ROW-3892 (Oct 26), ROW-3935 (Oct 31), B-011
**Summary:** "Dumbass" at its fourth instance (ROW-3892, Oct 26). Second consecutive Halloween Abby-framework attack (ROW-3935, Oct 31): "You're not trying to get her more candy. You're trying to not fight with Abby. Olivia is more important." This
establishes Halloween as an annual Abby-attack pattern — B-002 Year 1 and B-011 Year 2. ARC-RF04-001 signals 28-29.
**Action required:** Confirm: does Eli recall Halloween 2023 conflict? The annual Halloween pattern (confirmed by Eli in CP2) means this is a predictable escalation window. Note for RF-13 temporal pattern.

---

### CP3-RF04-012
- [x] Reviewed — Christmas Eve cluster documented; RF01-B012-S002 updated with cat-restriction context; ROW-4382-4384 calling-control admission is fourth documented instance
**Messages:** ROW-4093 (Dec 13), ROW-4175–4184 (Dec 24), ROW-4382–4384 (B-012)
**Summary:** Sixth predation framing (ROW-4093): "Daughter/sister in law — Gross" in marriage-scenario mechanism. Christmas Eve Sev-2 cluster (ROW-4175–4184): "You let Abby dictate everything which is why your relationship with your daughter isn't
very good" — Abby-causes-relationship-damage framing at peak. ROW-4382–4384: calling-control admission. Compound event COMP-RF04-011 (RF-04 + RF-01 + RF-05).
**Action required:** Confirm: review ROW-4382–4384 exact text for the calling-control admission — this is an additional gatekeeping admission to document alongside the three already catalogued in RF-01. Note temporal context: Christmas Eve elevated
volatility window.

---

### CP3-RF04-013
- [x] Reviewed — "worthless dick" slur documented; ROW-4587-4588 NC relocation reference flagged for attorney to assess seriousness
**Messages:** ROW-4793–4800 (Mar 18, B-013)
**Summary:** Child-relay guilt combined with "Such a worthless dick" extreme slur compound. ARC-RF04-001 signals 33-34. Also: ROW-4587–4588 contains a North Carolina relocation mention crossing into RF-02.
**Action required:** Confirm: review ROW-4587–4588 exact text for the relocation reference — was this a serious relocation indication or a passing threat? Any relocation reference should be flagged in the RF-02 file. Compound event COMP-RF04-012.

---

### CP3-RF04-014
- [x] Reviewed — seventh predation framing noted; pattern documented in Phase 2 synthesis
**Messages:** ROW-5126 (Apr 28, B-014)
**Summary:** Seventh predation framing: "Abby preggers?" deployed as a covert-concern mechanism. ARC-RF04-001 signal 37. The predation pattern now spans seven batches and two confirmed covert mechanisms. Compound event COMP-RF04-013 (RF-04 + RF-15).
**Action required:** Note for predation framing count — seven deployments across seven batches establishes the pattern as systematic rather than reactive. Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-015
- [x] Reviewed — rape narrative fully documented in abby.md; Eli confirms no rape occurred; Abby has never made the allegation; no third-party report or filing; attorney to confirm refutation is complete
**Messages:** ROW-5301–5316 (May 14, B-015)
**Summary:** FIRST SEV-3 EVENT IN RF-04 DATASET — the false rape allegation cluster. The predation arc apex: "the night Abby was drunk" + "You clearly set her up to get drunk" + "You told her not to tell anyone she had been raped before." ROW-5303
includes self-distrust insinuation regarding Olivia. Highest compound severity in the dataset: COMP-RF04-014 (RF-04 + RF-15 + RF-05 + RF-01).
**Action required:** See also CP3-RF01-B015-001 (same messages). ATTORNEY MUST REVIEW — highest-severity false allegation in the record. Confirm each specific factual allegation can be refuted with evidence. Cross-ref:
`attorney-prep-abby-household.md`.

---

### CP3-RF04-016
- [x] Reviewed
**Messages:** ROW-5668–5729 (Jun 16–17, B-016), ROW-5862
**Summary:** "Dumbass" at its fifth instance. "Two years in a row 👏 / Will he go for three?" financial mockery. "Fragile ego" DARVO-adjacent dismissal. ROW-5862: Milo-proxy parenting dismissal. Compound event COMP-RF04-015 (RF-04 + RF-05).
**Action required:** Confirm: what is the "two years in a row" financial reference? This appears to be mockery of a recurring financial event — clarify with Eli to ensure correct characterization.

---

### CP3-RF04-017
- [x] Reviewed — trigger context documented in RF01-B017-F001 (Melissa's time, Eli's favor, client meeting conflict); financial accusation ROW-6430-6431 flagged for attorney to verify exact false claim
**Messages:** ROW-6279–6524 (Aug 4–5, B-017)
**Summary:** Aug 4-5 sustained inadequate-father mega-cluster. Contains: "shit father" (ROW-6483); "walk out of her life / guilt" DARVO resolution (ROW-6514–6521); financial false accusation denied (ROW-6430–6431); Abby pregnancy weaponized as
housing-stability attack (ROW-6436 — third weaponization); "extracurricular activity stopped you from working" covert insinuation (ROW-6449); ARC-RF04-001 signal 46. Compound event COMP-RF04-016 (RF-04 + RF-05).
**Action required:** See also CP3-RF01-B017-001 (same messages). Confirm: was Melissa's financial accusation (ROW-6430–6431) factually false? Document the specific false claim for cross-examination.

---

### CP3-RF04-018
- [x] Reviewed — ROW-6819 text confirmed; RF01-B018-F001 updated with coaching confirmed through Olivia's finance/job questions; attorney to confirm exhibit use
**Messages:** ROW-6819 (Aug 21, B-018), ROW-6971, ROW-6976, ROW-6985
**Summary:** ROW-6819 coaching admission: "I've told her to have conversations and I also give her things to tell you about. I remind her of some of the things she's told me so that she will share." This is the structural anchor for all ADD-004
Olivia-relay analysis. Also in this cluster: "How are you having another kid when you have no clue how to parent?" + "I feel bad for Milo and that poor unborn child" — fourth pregnancy weaponization; "dumbass" at its sixth instance (ROW-6985).
ARC-RF04-001 signal 47.
**Action required:** See also CP3-RF01-B018-001 (same cluster). ROW-6819 is a key exhibit for both RF-01 and RF-04. Confirm exact text is reproduced accurately.

---

### CP3-RF04-019
- [x] Reviewed — choking refuted in RF01-B019-F002; gatekeeping admissions ROW-7481-7482 documented as Tier 1 exhibits in Phase 2; attorney to review full cluster
**Messages:** ROW-7161–7170 (Sep 15), ROW-7325–7490 (Oct 3, B-019)
**Summary:** Two major clusters. Sep 15: choking allegation relayed via Olivia (ROW-7164), DV false allegation (ROW-7168), Alice harm anticipation via Olivia (ROW-7165–7166). Oct 3: eighth predation framing — "Did you tell the Dr you made her a new
sister/cousin. Maybe she should notate that" (ROW-7367); DV false allegation echo (ROW-7365); gatekeeping control admissions (ROW-7481–7482: "I don't have to do as much as I do to include you" / "I don't have to give you pictures of her");
inadequate-father barrage (ROW-7457–7465); DARVO resolution (ROW-7484–7487); Abby body-shame (ROW-7488–7490). Compound events COMP-RF04-017 and COMP-RF04-018.
**Action required:** See also CP3-RF01-B019-001 (same messages). ATTORNEY MUST REVIEW — multiple serious allegations in two clusters. The gatekeeping-control admissions at ROW-7481–7482 are attorney exhibits. Note the Sep 9 body-shame messages
(ROW-7071, ROW-7091) and Oct 18 Abby-causal-attribution (ROW-7553) as additional cluster context.

---

### CP3-RF04-022
- [x] Reviewed
**Messages:** ROW-7714–7749 (Jan 15, B-022), ROW-7751–7752 (Feb 4)
**Summary:** Peak inadequate-father characterization: "You are completely useless as a father. I stand by that." — most extreme formulation in the dataset to date. "Stupid ass" as new slur variant (ROW-7722). DARVO gaslight-inversion: "You gaslight,
deflect and place blame on everyone else" (ROW-7740). Victim-posture DARVO resolution: "Stop your behavior... and I won't be so frustrated with you that I snap back" — Melissa explicitly conditions her contempt as Eli's fault. Child-guilt weapon:
"Olivia is currently at Janette's house crying cause you cancelled last minute" (ROW-7748). Feb 4: child abandonment relay (ROW-7751–7752). Compound event COMP-RF04-019 (RF-04 + RF-09). ARC-RF04-001 signal 54, ARC-RF04-002 signal 16.
**Action required:** Confirm: what event did Eli cancel last-minute in January 2025? Verify the factual accuracy of ROW-7748. The DARVO victim-posture resolution ("I won't snap back if you stop your behavior") is a textbook exhibit — confirm exact
text.

---

### CP3-RF04-024
- [x] Reviewed
**Messages:** ROW-9401–9402 (Mar 13), ROW-9523–9568 (May 4, B-024)
**Summary:** May 4 COSI cluster (note: May 4 is also the EP-1078 AI-guided communication start date — Phase A/B inflection point). New abandonment mechanism: Olivia's ring used as attachment object ("She clutches on to that ring...her only constant
connection," ROW-9541) compared to Melissa's absent father (ROW-9542). First explicit threat directed at Abby personally: "She better check herself" (ROW-9568). Harassment filing threat as communication-termination weapon (ROW-9536). "Idiot" as new
slur variant (ROW-9526). Absence accounting ("April 2 to April 24 without seeing her") as inadequate-father evidence. Mar 13 adds a contemptuous scripting mechanism: "I think what you meant to say was...I'm too much of a selfish, uninvolved parent"
(ROW-9401–9402).
**Action required:** Confirm: does Eli recall the ring Melissa referenced? What is the ring — was it a gift from Eli? The "April 2 to April 24" gap — what was the explanation for this period? Confirm: was the harassment filing threat (ROW-9536) ever
acted upon? Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-025
- [x] Reviewed
**Messages:** ROW-9692–9693 (May 27), B-025 cluster (Jun 7–8)
**Summary:** Phase A/B boundary batch with two new allegation vectors. The physical harm allegation trajectory continues nine months after the choking allegation (B-019, Sep 2024): new modalities include vaping/threat/harm-fear relays. New
Abby-as-harmful-actor vector (distinct from prior Abby-as-obstacle framing): "Abby laughed at her for coughing" + "Abby pinches Milo" + "thought you'd do it because Abby does it." Vehicle-danger framing: Olivia asking for location tracking "cause my
dads always crashing his cars" (ROW-9692–9693). Compound event COMP-RF04-021 (RF-04 + RF-15 + RF-11).
**Action required:** The Abby-as-harmful-actor vector is new and significant — if the GAL interviews Olivia, these characterizations may surface. Confirm with Eli: is there any factual basis to any of the Abby allegations (vaping, pinching,
laughing)? Prepare for these directly. Cross-ref: `attorney-prep-abby-household.md`.

---

### CP3-RF04-026
- [x] Reviewed — ninth predation framing; sexualized child-voice construction documented in Phase 2 synthesis and abby.md
**Messages:** ROW-9765 (pre-framing), B-026 cluster (Jun 14)
**Summary:** Ninth predation framing as DARVO against Eli's parenting-plan invocation. New mechanism: sexualized child viewpoint construction — Melissa writes Olivia's hypothetical interior sexual monologue ("That's my dad and my cousin why are they
making out") as a 9-year-old's perspective. Prior predation instances used factual framing or implied allegation; this instance places sexual imagery inside the child's experiential frame. False equivalence pre-framing in ROW-9765 before main attack.
Compound event COMP-RF04-022 (RF-04 + RF-15). First Phase B predation deployment.
**Action required:** Note: this was the ninth predation framing, now deployed in Phase B despite Eli's AI-guided communication strategy. The shift to sexualized child viewpoint is a qualitative escalation. Cross-ref:
`attorney-prep-abby-household.md`.

---

### CP3-RF04-027 — HIGH PRIORITY
*See High Priority section above.*
- [ ] Reviewed (copy)

---

### CP3-RF04-028 — HIGH PRIORITY
*See High Priority section above.*
- [ ] Reviewed (copy)

---

### CP3-RF04-029 — HIGH PRIORITY
*See High Priority section above.*
- [ ] Reviewed (copy)

---

### CP3-RF04-030 — HIGH PRIORITY
*See High Priority section above.*
- [ ] Reviewed (copy)

---

### CP3-RF04-031 — HIGH PRIORITY (text-flagged)
*See High Priority section above.*
- [ ] Reviewed (copy)

---

### CP3-RF04-032
- [x] Reviewed
**Messages:** ROW-15498 (Mar 28, 2026), ROW-15500 (same cluster)
**Summary:** First explicit, unambiguous alcoholism accusation in the dataset. Melissa wrote: "You clearly have a drinking problem and you need to take care of that before seeing her." Context: deployed unprovoked in a routine custody message,
six-plus weeks after the Feb 15 argument. The B-027 "less than you pay for beer per week" was insinuation; this is a direct allegation. ROW-15500 in the same cluster: "Olivia tells me that you love Milo and Alice more than her" —
sibling-prioritization accusation as new child-relay mechanism.
**Action required:** Confirm with Eli: is there any factual basis for the alcoholism accusation? If Melissa has made similar statements to Olivia, the counselor, or third parties, this message is the text anchor. The sibling-prioritization claim
(ROW-15500) should also be addressed with Eli — does Olivia have any reason to feel deprioritized relative to Milo and Alice?

---

### CP3-RF04-033 — HIGH PRIORITY (text-flagged)
*See High Priority section above.*
- [ ] Reviewed (copy)

---

## RF-05 — Legal Threats (4 items)

---

### CP3-RF05-001
- [x] Reviewed
**Messages:** (B-013, approx. Mar 2024)
**Summary:** Retainer-free court access structural advantage. Melissa's ability to pursue court action without incurring retainer costs creates a structural asymmetry in the credibility of her legal threats.
**Action required:** Confirm: how does Melissa's legal access situation compare to Eli's? Attorney should assess whether this structural advantage is documentable and relevant to the proportionality argument for legal threats.
She apparently has access through her work as part of their benefits package.  She also has significantly more money due to having gotten a inheritance (the amount is unknown but its north of 200k) shortly after our divorce was finalized, 
---

### CP3-RF05-002
- [x] Reviewed
**Messages:** ROW-5309–5316 (B-015, May 2024)
**Summary:** Rape/sexual assault allegation cluster. See also CP3-RF01-B015-001 and CP3-RF04-015 (same messages). The legal threat context here is the potential for these allegations to be deployed in legal proceedings or child-protective contexts.
**Action required:** ATTORNEY MUST REVIEW — cross-reference with RF-01 and RF-04 entries for same messages. Confirm: were these allegations ever communicated to any third party, attorney, court, or child protective services? Cross-ref:
`attorney-prep-abby-household.md`.

---

### CP3-RF05-003
- [x] Reviewed
**Messages:** ROW-6290, ROW-6312 (B-017, Aug 2024)
**Summary:** First explicit sole-custody filing threat in the record. Melissa states in writing her intent to file for sole custody and show these messages to her lawyer.
**Action required:** Confirm: was any custody modification filing made around this period or in the months following? Attorney should map all stated legal threats against actual filings to assess which threats were executed and which were bluffs.
No modifications have been filed from Melissa at all.
---

### CP3-RF05-004
- [x] Reviewed
**Messages:** B-028 cluster (Sep 2025)
**Summary:** Peak legal threat — attorney consultation confirmed as past-completed and agreement described as "ready to sign." This is the most advanced legal threat in the dataset: not a prospective filing threat but a claim that an agreement has
already been prepared.
**Action required:** ATTORNEY MUST REVIEW — was any agreement ever served, presented, or filed? If Melissa's attorney prepared an agreement in September 2025, there may be a draft or correspondence in the legal record. Cross-ref CP3-RF04-028 and
CP3-RF04-030 as the escalation arc: Sep 17 (agreement ready) → Nov 25 (contempt threat filed).

---

## RF-13 — Escalation Patterns (1 item)

---

### CP3-RF13-001
- [x] Reviewed — all four findings documented; attorney-prep items flagged; Phase 2 synthesis incorporates findings (1), (2), (3); Oct 2024 drop remains unexplained (conservative treatment applied)
**Messages:** (arc-level item, no single row — derived from full dataset pattern analysis and CP2 calibration session)
**Summary:** Four interconnected findings from the RF-13 calibration session (CP2), confirmed by Eli.

(1) **Emotional Numbing — Impact Finding.** Eli reported no specific worst exchange: "I'm either numb to it or just don't let it bother me anymore." This is a documented adaptation to sustained hostile communication exposure — normalization produces
affect-numbing even as cumulative harm increases. The absence of a memorable worst exchange may appear to a GAL as indifference but reflects long-term pattern impact, not absence of harm. Severity classifications in the dataset are based on objective
escalation metrics and are unaffected by Eli's subjective detachment.

(2) **Walking-on-Eggshells Pattern — Trigger Unpredictability.** Eli confirmed (CP2 Q1) that escalation was unpredictable: "There have been times I was expecting escalation and didn't get it and other times where I didn't think anything was going to
happen and she blew up." No safe behavioral strategy exists because hostile responses are not consistently tied to Eli's communication choices. In the dataset: cycle types are content-correlated patterns identified from the record, not Eli-confirmed
cause-and-effect trigger-response pairs. The unpredictability itself is clinically significant — it is a known coercive-control dynamic that prevents the target from developing effective protective strategies.

(3) **AI-Guided Communication — Phase B/C Baseline.** Beginning approximately May 4, 2025 (EP-1078, B-025), Eli began using AI (ChatGPT) to guide his responses — filtering noise, identifying manipulation tactics, determining what merited a response.
Phase B/C sent messages represent deliberately filtered, strategically calibrated communication. Any Melissa escalation over these intentionally measured responses is unambiguous de-escalation resistance and cannot be attributed to communication
ambiguity or poor phrasing by Eli.

(4) **Oct 2024 Communication Drop — Unresolved.** The post-EP-0917 communication drop (Oct 3 – Dec 15, 2024, B-020) has no known explanation. Eli confirmed (CP2 Q4) he has no reason for this period. Conservative treatment: document as structural
context ("behavioral withdrawal following mega-cluster EP-0917; cause unknown") — do not classify as strategic de-escalation or external-event response.

**Action required:** ATTORNEY MUST REVIEW items (1) and (3) as GAL-preparation points. For (1): prepare framing so that Eli's emotional detachment during GAL interviews is contextualized as long-term exposure impact rather than parental indifference.
For (3): prepare documentation showing that Eli's Phase B/C communication style reflects deliberate de-escalation strategy — the AI-guided approach demonstrates active effort to reduce conflict. For (2): the walking-on-eggshells pattern is clinically
significant and may be worth introducing through a communications expert or via the GAL's own pattern review. For (4): confirm whether any external event (court date, family event, health issue) occurred Oct–Dec 2024 that might explain the
communication drop from either side.
