# Handoff: Context Library — AI Generation Pipeline Diagram

## Overview
A single, self-contained **diagram/figure** that visualizes how Marketing's AI context library flows into asset generation. It reads left → right across four stages:

1. **Context Library** — 8 connected source systems (Product docs, Jira, Confluence, Sales decks, Call recordings, Google Drive, HubSpot, Onboarding materials)
2. **Ingest** — everything is scanned & streamed in via **MCP** (Model Context Protocol)
3. **Analyze** — **Claude** reads, connects, and synthesizes the context
4. **Memory** — the result lands in a **permanent project memory** that feeds every generated asset

It is intended to be embedded as a **section/figure on a marketing or product website** (e.g. a "how it works" band).

## About the Design Files
The files in this bundle are a **design reference created in HTML** — a prototype showing the intended look, layout, and motion. It is **not** production code to drop in verbatim. The task is to **recreate this diagram inside your website's existing environment** (React/Vue/Svelte/Astro/plain HTML — whatever the site uses) following its established component, styling, and asset conventions. If the site has a design-token system already, map the values below onto it rather than re-declaring them.

The prototype is **fully functional** — open `Context Library Diagram.html` in a browser to see the exact target, including the fan-in connectors and subtle animations.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, and interactions are all specified. Recreate the visual result faithfully. The one structural caveat: the prototype uses **absolute pixel positioning inside a fixed 1680×1000 canvas that is scaled to fit the viewport**. That technique is fine for a standalone figure, but for a responsive website you will likely want to **rebuild the layout with fl/grid + flexbox** (see "Responsive / implementation guidance" below) rather than copy the absolute coordinates.

## The single "screen" / figure

### Layout (as designed)
- **Canvas:** 1680 × 1000 px design frame, white (`#ffffff`) background with a faint 40px square grid overlay (`rgba(16,16,55,.035)` 1px lines). The frame is centered and `transform: scale()`-ed to fit the viewport, letterboxed on a light-grey page (`#f4f4f4`).
- **Header (top-left):** an eyebrow label + a two-line headline.
- **Stage labels:** a mono row of `01 / 02 / 03 / 04` captions sitting above each stage.
- **Stage 01 (left, x≈72–384):** a vertical stack of 8 source cards inside a dashed rounded container ("group frame").
- **Connectors:** 8 curved lines fan in from the right edge of each source card to a single point on the left edge of the MCP node, then two straight arrows continue MCP → Claude → Memory.
- **Stages 02–04 (right of center):** three process nodes (MCP, Claude, Memory), vertically centered on the fan-in target line.

### Components

**Eyebrow label**
- Text: `Marketing — AI Context Pipeline`
- Font: DM Mono, 12px / 18px, weight 400, `letter-spacing: .14em`, `text-transform: uppercase`
- Color: Horizon Blue `#0f00db`

**Headline (H1)**
- Text: `One context library informing every` / (line break) / `AI-generated marketing asset.`
- "context library" is emphasized at weight 500; the rest is weight 300
- Font: Sneak, 34px / 42px, `letter-spacing: -.01em`
- Color: Night Blue `#101037`

**Top-right meta**
- Pill: `● Continuously ingesting` — DM Mono 11px uppercase, `.08em` tracking, 1px border `#e8e8e8`, pill radius (999px), white bg, text `#4a4a66`. The dot is `#2ea06e` (success green) with a pulsing ring animation (see Interactions).
- Sub-line beneath: `8 connected sources · via MCP` — DM Mono 11px uppercase, color `#8a8aa0`.

**Stage labels (×4)**
- Format: `01` (Horizon Blue, weight 500) + name + optional `— sources` rule (color `#b8b8c8`)
- Labels: `01 Context Library — sources`, `02 Ingest`, `03 Analyze`, `04 Memory`
- Font: DM Mono 12px uppercase, `.12em` tracking, color `#4a4a66`

**Source card (×8)**
- Size: 296 × 70 px, white bg, `1px solid #e8e8e8`, radius 8px, shadow `0 1px 2px rgba(16,16,55,.06)`
- Internal layout: flex row, 14px gap, 16px horizontal padding
- Icon chip: 40×40, radius 4px, bg `#f4f4f4`, icon 20px Horizon Blue `#0f00db`
- Name: Sneak 16px / 20px, weight 500, color `#101037`
- Sub-label: DM Mono 10.5px / 14px uppercase, `.06em` tracking, color `#8a8aa0`
- The 8 cards, with icon (Lucide name) + sub-label:
  1. **Product docs** — `file-text` — "Specs · datasheets"
  2. **Jira tickets** — `square-kanban` — "Roadmap · issues"
  3. **Confluence articles** — `notebook-text` — "Internal wiki"
  4. **Sales decks** — `presentation` — "Positioning · pitch"
  5. **Call recordings** — `audio-lines` — "Transcripts"
  6. **Google Drive** — `hard-drive` — "Shared files"
  7. **HubSpot** — `contact-round` — "CRM · campaigns"
  8. **Onboarding materials** — `graduation-cap` — "Enablement"

**Source group frame**
- Dashed container behind the 8 cards: `1px dashed #c7c7d4`, radius 16px, bg `rgba(244,244,244,.45)`

**MCP node (Stage 02)**
- Size ≈ 150 × 260, bg Night Blue `#101037`, radius 16px
- Icon chip: 56×56, radius 8px, bg `rgba(255,255,255,.08)`, icon `git-merge` 28px in AI Green `#00ffca`
- Eyebrow: `MCP` — DM Mono 11px uppercase `.12em`, AI Green `#00ffca`
- Title: `Scan & ingest` — Sneak 22px / 27px weight 500, white
- Desc: `Model Context Protocol streams every source into one pipe.` — Sneak 13px / 19px, `rgba(255,255,255,.66)`

**Claude node (Stage 03)**
- Size ≈ 240 × 270, white bg, `1px solid #0f00db`, radius 16px, shadow `0 8px 24px rgba(16,16,55,.10)`
- Icon chip: 56×56, radius 8px, bg Horizon Blue `#0f00db`, icon `sparkles` 28px white. A 1.5px Horizon-Blue ring pulses outward around it (see Interactions).
- Eyebrow: `Claude` — Horizon Blue
- Title: `Analyze & synthesize` — Sneak 22px weight 500, Night Blue
- Desc: `Reads, connects and distills context into brand-true knowledge.` — color `#4a4a66`

**Memory node (Stage 04)**
- Size ≈ 272 × 290, radius 16px
- Background: **Horizon gradient** `linear-gradient(135deg, #0f00db 0%, #00ffca 100%)`
- Shadow/glow: `0 18px 44px rgba(15,0,219,.28)`
- A diagonal white **shimmer sweep** crosses it periodically (see Interactions)
- Icon chip: 56×56, radius 8px, bg `rgba(255,255,255,.18)`, icon `database` 28px white
- Eyebrow: `Project memory` — `rgba(255,255,255,.85)`
- Title: `Permanent project memory` — Sneak 22px / 27px weight 500, white
- Desc: `A persistent brand brain every generation draws from.` — `rgba(255,255,255,.9)`
- Pill: `∞ Persistent · always-on` — DM Mono 10.5px uppercase `.1em`, bg `rgba(255,255,255,.16)`, white, pill radius, icon `infinity` 13px
- Footnote below the node: `→ feeds every generated asset` — DM Mono 11px uppercase `.06em`, color `#8a8aa0`

**Connectors**
- **Fan-in (×8):** cubic-bezier curves from each source card's right edge to one shared point at the MCP node's left-center. Each is drawn twice: a static faint base line (`#0f00db`, 1.5px, opacity .22) plus an animated dashed overlay (`#0f00db`, 2px, `stroke-dasharray: 2 12`) whose `stroke-dashoffset` animates to suggest flow.
- **Main arrows (×2):** MCP → Claude and Claude → Memory. Solid Horizon-Blue line (2.5px) with an arrowhead marker, plus an animated AI-Green dashed overlay (`stroke-dasharray: 3 14`).

## Interactions & Behavior
This is a non-interactive figure (no clicks/nav). All motion is ambient and should respect `prefers-reduced-motion`.

- **Connector flow:** dashed overlays animate `stroke-dashoffset` from 0 → -28 on a ~1.3–1.6s linear infinite loop, giving a "data flowing toward memory" feel.
- **"Continuously ingesting" dot:** expanding ring pulse, `box-shadow` 0→7px spread of `rgba(46,160,110,.45)` fading out, 2.4s infinite.
- **Claude "thinking" ring:** a 1.5px Horizon-Blue square ring scales 1 → 1.18 and fades out, 2.6s infinite, easing `cubic-bezier(.22,1,.36,1)`.
- **Memory shimmer:** a diagonal translucent white band (`linear-gradient(115deg, transparent, rgba(255,255,255,.28), transparent)`) sweeps across the tile, ~4.5s infinite.
- Brand motion language: gentle expo-out `cubic-bezier(.22,1,.36,1)`, 120–320ms for any state changes. No bouncy springs.

## State Management
None. Static presentational component. No data fetching, no state variables.

## Responsive / implementation guidance
The prototype uses an absolute-positioned 1680×1000 canvas scaled with JS. For a website, prefer a fluid rebuild:
- **Desktop:** CSS grid with three regions — left source column, center connector band, right node row — or a flex row. Draw connectors with an inline `<svg>` that overlays the grid (use `viewBox` + `preserveAspectRatio="none"` or recompute paths on resize via `ResizeObserver`). Curved fan-in paths are `M x1 y1 C mx y1, mx y2, x2 y2` where `mx = (x1+x2)/2`.
- **Tablet / mobile:** stack vertically — source cards as a 2-col grid, then MCP → Claude → Memory as full-width stacked cards with the arrows rotated to point downward. The connector SVG can be dropped on narrow viewports in favor of simple chevrons/arrows between stacked sections.
- Keep node min hit/visual sizes generous; text never below 12px.

## Design Tokens
Pulled from the Aizon design system (`colors_and_type.css`, included in this bundle). Map these onto your site's existing tokens where possible.

**Colors**
- Horizon Blue (primary) `#0f00db`
- AI Green (accent) `#00ffca`
- Night Blue (deep neutral) `#101037`
- Grey `#e8e8e8`, Light Grey `#f4f4f4`
- Text: primary `#101037`, secondary `#4a4a66`, tertiary `#8a8aa0`, muted `#b8b8c8`
- Border subtle `#e8e8e8`, border strong `#c7c7d4`
- Success green (status dot) `#2ea06e`
- Horizon gradient: `linear-gradient(135deg, #0f00db 0%, #00ffca 100%)`

**Typography**
- Display / headings & body: **Sneak** (OTF included). H1 48/60 w300; H2 28/36 w400; H3 22/30 w500; H4 18/27 w700; Body 14/21 w400; Body-2 12/18.
- Mono / eyebrows, labels, data: **DM Mono** (TTF included), light/regular/medium, uppercase + `.08–.14em` tracking.
- Fallback (slides/legal): **DM Sans**.

**Spacing (4pt grid):** 4, 8, 12, 16, 24, 32, 48, 64, 96
**Radius:** xs 2, sm 4, md 8, lg 16, xl 24, pill 999
**Shadows:** xs `0 1px 2px rgba(16,16,55,.06)`, sm `0 2px 6px rgba(16,16,55,.08)`, md `0 8px 24px rgba(16,16,55,.10)`, lg `0 20px 48px rgba(16,16,55,.14)`, focus ring `0 0 0 3px rgba(15,0,219,.22)`

## Assets
- **Fonts** (in `fonts/`): Sneak (Light/Regular/Medium/Bold OTF), DM Mono (Light/Regular/Medium TTF). Self-host these; reference via the `@font-face` blocks in `colors_and_type.css`. Verify your license covers web use before shipping publicly.
- **Icons:** [Lucide](https://lucide.dev) (MIT) is used as a stand-in for Aizon's marketing icon set. The prototype loads it from CDN (`unpkg.com/lucide@latest`). In production, install `lucide` (or your framework's Lucide package, e.g. `lucide-react`) and import only the icons listed per source card above, plus `git-merge`, `sparkles`, `database`, `infinity`. Icons are **stroke-only, 2px**, color inherits from context (Horizon Blue on light, white/green on dark).
- **No images/photography.** Everything is type, color, SVG lines, and icons.
- The Aizon wordmark was intentionally **removed** from this asset — do not add a logo.

## Files
- `Context Library Diagram.html` — the complete, runnable design reference (markup + CSS + connector-building JS in one file).
- `colors_and_type.css` — the Aizon design tokens + `@font-face` declarations + utility classes referenced by the HTML.
- `fonts/` — Sneak + DM Mono font files used by the CSS.
- `screenshots/context-library-diagram.png` — rendered reference image of the full diagram.

Open the HTML directly in a browser to see the exact intended result before recreating it.
