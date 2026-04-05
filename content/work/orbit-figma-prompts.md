# Orbit — Figma Make Prompt Guide
**6 UI screens for Apple Vision Pro spatial onboarding concept**

Use these prompts in Figma Make (or with any generative UI tool) to produce the six key screens of the Orbit interface. Each prompt is self-contained — specify the screen name and paste the full prompt block.

Design language throughout: visionOS glassmorphism, depth layering, gaze indicators, violet (#8B5CF6) / indigo (#6366F1) / white / translucent-zinc palette. Frame size: 1920×1080px (Vision Pro window canvas).

---

## Screen 01 — Spatial Org Map (Home State)

**What it illustrates:** Design Decision 01 (gaze + pinch navigation) + Decision 03 (depth planes) + Decision 04 (60° FOV constraint)

**Figma Make prompt:**

```
Design a visionOS spatial org map home screen for an enterprise onboarding app called Orbit.

Layout: A dark semi-transparent environment (background: #09090b at 85% opacity, blur radius 40px). In the centre of the viewport, within a clearly marked 60° comfort zone circle (shown as a faint violet arc overlay, #8B5CF6 at 10% opacity), arrange 7–9 floating team cards in a loose constellation pattern.

Each team card: 280×160px, rounded corners 24px, frosted glass background (white at 12% opacity, border white at 20% opacity, backdrop-filter blur 20px), subtle drop shadow (0 8px 32px rgba(0,0,0,0.3)). Card contents: team icon (24px, lucide-style, violet), team name in Inter Bold 18px white, member count in Inter Medium 12px zinc-400, a faint connection line (1px, white at 15%) linking to adjacent related teams.

The card closest to the user's assumed gaze centre (the "Engineering" card) should have an active gaze-focus state: violet ring border (2px, #8B5CF6, glow effect blur 8px violet), card scale 1.05, background white at 18% opacity.

Floating above the constellation at the top: a minimal HUD bar (640px wide, 48px tall, fully frosted glass, border white/20, blur 24px) showing the Orbit wordmark in Inter Black 14px white on the left, and "Day 1 · Session 1 of 4" in JetBrains Mono 11px zinc-400 on the right.

Bottom centre: a floating pinch-gesture hint indicator — a small hand icon (32px, white at 60%) with the label "Pinch to select" in Inter Medium 11px zinc-400. Fade it at 60% opacity to suggest ambient guidance.

Background depth plane (behind the constellation, visually pushed back): a very faint org tree structure (white at 4% opacity, blur 2px) suggesting the wider organisation without demanding attention.

Colour palette: #09090b background, #8B5CF6 violet accent, #6366F1 indigo secondary, white for card surfaces, zinc-400 (#a1a1aa) for secondary text.
```

---

## Screen 02 — Team Detail Panel (Mid-Ground Reveal)

**What it illustrates:** Decision 03 (depth plane disclosure) — the mid-ground plane slides forward on gaze + pinch

**Figma Make prompt:**

```
Design a visionOS Team Detail panel for the Orbit enterprise onboarding app, showing the state after a user gazes at and pinches the "Engineering" team card.

Layout: The previously active team card has expanded into a full detail panel — 680×520px, centred in viewport, frosted glass (white 14% opacity, border white 25%, backdrop-filter blur 28px, corner radius 32px, drop shadow 0 20px 60px rgba(0,0,0,0.4)).

Panel structure (top to bottom):
- Header strip: Engineering team icon (violet, 28px) + "Engineering" in Inter Black 24px white + "12 members · 3 squads" in Inter Medium 13px zinc-400. Right side: a close/dismiss button (32px circle, white 10% fill, × icon white 60%).
- Member row (horizontal scroll): 5 avatar cards side by side, each 120×80px frosted glass, showing a circular avatar placeholder (48px, gradient violet-to-indigo), name in Inter Bold 12px white, role in Inter Medium 10px zinc-400. The first avatar has a violet ring (the "your buddy" indicator) with a small label tag "Your buddy" in Inter Bold 9px violet.
- AI suggestion banner: 100% width within panel, 56px tall, background violet at 12%, border violet at 20%, corner radius 16px. Left: a small pulsing violet dot (8px). Text: "Suggested intro: message Rahul about your onboarding setup call" in Inter Medium 13px white. Right: "Send intro" button — pill shape, violet solid fill, Inter Bold 12px white.
- Collaboration patterns section: title "How this team works" in Inter Bold 14px zinc-300. Below: 3 small info pills in a row (frosted glass, border white/15): "Async-first", "Weekly sync Tuesdays", "Slack: #eng-general".

Background: The org map constellation is still visible behind the panel but blurred further (blur 8px, opacity 40%), conveying that the foreground panel is a depth-plane pop-forward without losing spatial context.

Same palette: dark environment, violet/indigo accents, white frosted glass surfaces.
```

---

## Screen 03 — Tool Discovery Depth Plane

**What it illustrates:** Decision 02 (AI agent surfaces tools proactively) + Decision 03 (depth planes for progressive disclosure)

**Figma Make prompt:**

```
Design a visionOS Tool Discovery screen for the Orbit onboarding app. This is the state where the AI agent has proactively surfaced the new hire's tool stack as a mid-ground depth plane.

Layout: Full dark environment. A horizontal floating dock of 6 tool cards appears at vertical centre, slightly below eye level. The dock is anchored by a frosted glass container (1200×200px, white 8% opacity, border white 12%, blur 20px, corner radius 40px) — this is the dock rail.

Each tool card sits inside the dock rail: 160×140px, frosted glass (white 12%, border white 20%, corner radius 24px, shadow 0 8px 24px rgba(0,0,0,0.3)). Card content: app icon placeholder (48px rounded square, using a distinct solid colour per app — Slack: #4A154B, Jira: #0052CC, Confluence: #172B4D, GitHub: #161514, Figma: #F24E1E, Workday: #F0603A), app name in Inter Bold 13px white below.

The Slack card is in active gaze-focus state: violet glow ring (2px border #8B5CF6, box-shadow 0 0 16px rgba(139,92,246,0.5)), scale 1.08. Above it: a floating tooltip (frosted glass, 240px wide, corner radius 16px, border white/20) showing "You have access · 23 unread in #general" in Inter Medium 12px white.

Above the dock (floating, not connected): the AI agent voice panel — a 480×72px frosted glass pill (white 10%, border white 18%, blur 24px, corner radius 36px). Left: a small animated waveform (4 bars, violet, pulsing). Right: "Your primary tools are ready. Start with Slack — your team's active now." in Inter Medium 13px white.

Bottom left corner: a small session progress indicator — "Tool Setup · Step 2 of 5" with a 5-segment progress bar (segments: zinc-700 unfilled, violet filled for 2 of 5), 180px wide, frosted glass pill.

Maintain the established dark spatial environment and violet/indigo/white palette.
```

---

## Screen 04 — Team Constellation View (Ambient Navigation)

**What it illustrates:** Decision 04 (60° FOV constraint enforced) + Decision 01 (gaze navigation — peripheral awareness without head strain)

**Figma Make prompt:**

```
Design a visionOS Team Constellation ambient navigation view for Orbit. This screen shows the full spatial org map after the user has completed Day 1 onboarding, with more teams unlocked in the mid-ground and background planes.

Layout: Three visible depth layers:

FOREGROUND (full opacity, full interaction): 3 team cards directly ahead, within the 60° comfort zone. These are the user's immediate team (Engineering), their manager's team (Product), and their closest cross-functional partner (Design). Cards: 260×150px frosted glass as established. The Engineering card has a "You are here" indicator — a small pulsing violet dot (10px) at card top-left with "Your team" label in Inter Bold 10px violet.

MID-GROUND (80% opacity, 90% scale, slight blur 1px): 4 additional team cards arranged in an arc behind the foreground teams. These represent adjacent departments. Same card design but slightly desaturated (border white at 12% rather than 20%).

BACKGROUND (40% opacity, 80% scale, blur 3px): Faint outlines of the remaining org structure — 8–10 cards barely visible, intentionally unreadable, communicating organisational scale without cognitive load. No text legible at this distance. This is purely ambient.

Connection lines between all cards: 1px lines, white at 8% opacity (background) to white at 20% (foreground), creating an organic network feel.

Top right: a small "Unlock week 2" prompt — frosted glass pill (200×36px, violet border at 30%, violet fill at 8%), text "Background unlocks Mon" in Inter Medium 11px zinc-400 with a small lock icon (12px, zinc-500).

Maintain dark spatial environment. This screen should feel like standing inside a living org chart.
```

---

## Screen 05 — Progressive Onboarding Checklist (Ambient Peripheral)

**What it illustrates:** Decision 03 (progressive disclosure) + Decision 05 (accessible, low-distraction design)

**Figma Make prompt:**

```
Design a visionOS ambient onboarding checklist panel for Orbit, positioned at the left edge of the comfortable viewing zone — it is peripheral, not primary. It should be always visible but never demanding.

Position: Left side of viewport, vertically centred, offset from the left edge by 120px. The panel should feel like it lives at the boundary of comfortable gaze, not in the centre of attention.

Panel: 320×480px, frosted glass (white 8% opacity, border white 10%, backdrop-filter blur 16px, corner radius 28px, shadow minimal — 0 4px 16px rgba(0,0,0,0.2)).

Header: "Day 1 Progress" in Inter Bold 14px white, with a circular progress ring (48px diameter, violet stroke #8B5CF6, 2px, showing 60% complete).

Checklist items (7 total, 3 completed, 1 active, 3 locked):
- Completed items: checkmark circle (16px, emerald #10B981 fill), item text Inter Medium 13px zinc-400 with strikethrough styling, softer appearance.
- Active item (currently in session): violet circle outline (16px, #8B5CF6 border, pulsing animation), item text Inter Bold 13px white, no strikethrough. This item reads "Explore your team · In progress".
- Locked items: zinc-600 circle (16px), item text Inter Medium 13px zinc-600, lock icon (12px, zinc-600) at right edge.

At panel bottom: a very subtle "Tap to expand" affordance — Inter Medium 11px zinc-500, chevron-down icon (12px, zinc-500).

The panel should look like it could be dismissed and recalled without disrupting the main spatial experience. Reduced-motion variant note: all transitions on this panel should be cross-fade only, no slide or scale.

Keep the ambient feel — this is a peripheral helper, not a to-do app.
```

---

## Screen 06 — Accessibility Settings (Motion Toggle + Dwell Customisation)

**What it illustrates:** Decision 05 (accessibility first-class, not post-launch) — connecting to Aulys work

**Figma Make prompt:**

```
Design a visionOS Accessibility Settings panel for Orbit, shown as an overlay above the spatial org map.

This panel must feel premium, not like a system settings page buried in a menu. Frame it as a first-class experience feature — "Make Orbit work for you."

Panel: 640×560px, centred, frosted glass (white 16% opacity, border white 28%, backdrop-filter blur 32px, corner radius 36px, shadow 0 24px 80px rgba(0,0,0,0.5)).

Panel header: "Comfort Settings" in Inter Black 22px white. Below: "Orbit adapts to how you experience space." in Inter Medium 14px zinc-400. Top right: dismiss button (32px circle, white 10% fill).

Settings (stacked, each item 100% width, 72px tall, separated by 1px zinc-800 dividers):

1. Motion Sensitivity — toggle row. Left: icon (motion/waves, 20px violet) + label "Reduce spatial motion" Inter Bold 15px white + sub-label "Replaces all transitions with cross-fades" Inter Medium 12px zinc-400. Right: a visionOS-style toggle switch (52×28px, pill shape — inactive: zinc-700, active: violet #8B5CF6). Current state: inactive.

2. Gaze Dwell Time — slider row. Label "Dwell activation time" + sub "How long to look at something before it activates". Slider: full-width minus padding, violet filled track from left to 40%, zinc-700 unfilled track. Thumb: 22px circle, white fill, violet border 2px. Left label "0.3s", right label "2.0s". Current value indicator floating above thumb: small frosted glass pill "0.8s" in Inter Bold 12px violet.

3. FOV Comfort Zone — toggle row. Label "Strict 60° mode" + sub "Keeps all interactions within comfortable head range". Toggle: currently active (violet fill).

4. High Contrast Surfaces — toggle row. Label "Increase surface contrast" + sub "Raises frosted glass opacity for easier reading". Toggle: inactive.

Footer of panel: a violet-tinted banner (violet at 8% fill, violet border at 20%, corner radius 20px, padding 16px). Left: Orbit logo small (violet, 16px). Text: "These settings sync across your visionOS profile. They apply to all spatial apps that support the Orbit accessibility API." Inter Medium 12px zinc-300.

This screen should communicate that accessibility is architecture, not afterthought.
```

---

## Usage Notes

- All screens use the same base frame: **1920×1080px**, visionOS window context
- Primary font: **Inter** (headings: Black/Bold, body: Medium, labels: Semibold)
- Monospace: **JetBrains Mono** for HUD labels and system info
- Violet accent: `#8B5CF6` — use for all active states, borders, and primary CTAs
- Indigo secondary: `#6366F1` — use for secondary accents and depth variation
- All glass surfaces: `backdrop-filter: blur(20–32px)`, white fill `8–16%`, white border `10–28%`
- Dark background: `#09090b` (zinc-950) at `85–90%` opacity
- Export each screen at **2x** for Retina/Vision Pro display density
