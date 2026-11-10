---
name: L1A1 Parts Handbook
description: A bilingual field-manual handbook for the L1A1 Self-Loading Rifle, built for cadets and enthusiasts.
colors:
  paper: "#EDEFEA"
  paper-raised: "#F6F7F3"
  paper-note: "#E6E9E1"
  ink: "#121614"
  ink-muted: "#454C46"
  ink-soft: "#5E665E"
  rule: "#B9BEB6"
  rule-soft: "#D5D9D1"
  accent: "#C03214"
  plate-ground: "#E6E9E2"
  plate-metal: "#D6DBD3"
  plate-furniture: "#6A7268"
  plate-dark: "#6F776D"
  plate-side-metal: "#B1B8AE"
  plate-side-furniture: "#4F574D"
  plate-side-dark: "#5F675D"
  plate-side-paper: "#C0C6BC"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(96px, 17.5vw, 276px)"
    fontWeight: 800
    lineHeight: 0.76
    letterSpacing: "-0.04em"
    fontVariation: "\"wdth\" 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 5vw, 64px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 118"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(20px, 1.9vw, 26px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 112"
  body:
    fontFamily: "Archivo, Noto Sans TC, Microsoft JhengHei, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Noto Sans TC, Microsoft JhengHei, sans-serif"
    fontSize: "10.5px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  data:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.01em"
rounded:
  square: "0px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "64px"
  section: "clamp(56px, 8vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "0 16px"
    height: "46px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 16px"
    height: "46px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.square}"
    padding: "0 11px"
    height: "34px"
  parts-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "28px"
  plate-tab:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    width: "40px"
    height: "30px"
---

# Design System: L1A1 Parts Handbook

## Overview

**Creative North Star: "The Field Manual, Revised for Screen."**

This is a document that happens to be a website, made for the Hong Kong Adventure Corps. It borrows the authority of a 1950s infantry pamphlet ??numbered sections, a margin rail, a plate with callout keys, tabular data ??and rebuilds it with the precision of a modern screen: a variable grotesque, live vector linework, and one red field that does real work. The object is treated with technical respect, never militarist theatre. There is no camouflage, no neon, no faux paper, no "tactical" dark mode.

The frame owns the world; the reading column stays calm. The masthead, the numbered rail, the section openers, the plate controls and the single safety field carry the oxide red and the expanded Archivo voice. The body text sits at a real measure in a workhorse sans, on a cool paper ground, with hairline rules doing the structural work.

The exploded plate is a 3D technical plate: a true side elevation with a solid oblique side face, lit from the top-left. It is not a rotatable model, a shaded render or a drop-shadowed card. The front face keeps the crisp linework; the side face gives the object thickness. The rifle itself is drawn in its real material split: dark Maranyl furniture against light parkerised steel, with the black magazine and buttplate as the third tone. The cycle is a flat two-dimensional schematic: no side faces, no shadows, with a single moving cartridge doing the teaching.

**Key Characteristics:**
- Cool paper, near-black ink, one oxide-red accent.
- One self-hosted variable family, Archivo, used across three width settings.
- Square corners, 1px hairlines, no shadows.
- A full-bleed schematic plate with numbered tabs and a sticky readout strip.
- A bilingual reading layer: English default, Traditional Chinese on demand.
- The Hong Kong Adventure Corps identity: crest, unit name, oxide accent and copyright line; no motto.

## Colors

A restrained bench palette: paper, ink, and a single oxide red. Colour is assigned by job, not sprinkled for decoration.

### Primary
- **Oxide Red** (#C03214): the selection stroke and numbered tab, the section numbers, the active filter, the primary button hover, and the single full safety field. It is the only saturated colour in the system. It is used sparingly everywhere except the safety panel, where it becomes the page.

### Neutral
- **Cool Paper** (#EDEFEA): the page ground. Slightly green-grey, never warm cream.
- **Raised Paper** (#F6F7F3): the readout strip, selected cards, the tab fill.
- **Note Paper** (#E6E9E1): the inset note block inside a parts card.
- **Ink** (#121614): body, display, plate linework.
- **Muted Ink** (#454C46): secondary reading text.
- **Soft Ink** (#5E665E): labels, captions, metadata. Still ??:1 on paper.
- **Rule** (#B9BEB6): hairlines and the parts-grid gaps.
- **Soft Rule** (#D5D9D1): internal detail lines and the plate grid.

### Plate Materials
- **Plate Ground** (#E6E9E2): the drawing field.
- **Plate Metal** (#D6DBD3): barrels, receivers, sights.
- **Plate Furniture** (#6A7268): the dark Maranyl handguards, buttstock, pistol grip and carry-handle grip, with a fine 5px stipple at 14??2% ink. This is the object's real material against the light parkerised metal.
- **Plate Dark** (#6F776D): magazines and buttplates, smooth rather than hatched.
- **Side Metal** (#B1B8AE), **Side Furniture** (#4F574D), **Side Dark** (#5F675D), **Side Paper** (#C0C6BC): the oblique side faces of the 3D figures. Each is a 15??0% darker step of its front material; the backmost silhouette carries a 1.4px ink edge.

### Named Rules
**The One Red Field Rule.** The accent may own exactly one large region per page ??the safety panel. Everywhere else it is a stroke, a number, a tab, or a hover, never a wash.

**The Paper Is the Page Rule.** No gradients, glass, blur, faux fibre or drop shadows. Depth comes from tonal paper steps, hairlines, and the plate's engineering grid. The grid appears only inside the plate.

## Typography

**Display Font:** Archivo (self-hosted variable, latin subset, `wdth` 62??25, `wght` 100??00).
**Body Font:** Archivo at 100% width, with `Noto Sans TC` / `Microsoft JhengHei` as the Traditional Chinese fallback.
**Label Font:** Archivo, tracked uppercase at 10??1px; tabular numerals for data.

**Character:** One industrial grotesque, three widths. Expanded caps give the masthead and section openers the voice of a title block; normal width keeps the reading column quiet; tracked small caps turn metadata into instrument labels. There is no separate serif, no mono costume.

### Hierarchy
- **Display** (800, `clamp(96px, 17.5vw, 276px)`, 0.76, ??.04em): the L1A1 wordmark only. It is a title block, not body copy.
- **Headline** (700, `clamp(34px, 5vw, 64px)`, 0.9, ??.025em, width 118): section openers ??The Plate, The Parts, The Cycle, The Record, the safety statement.
- **Title** (700, `clamp(20px, 1.9vw, 26px)`, 1, width 112): part names and major card headings.
- **Body** (400, 16.5px, 1.55): reading text at 54??8ch; lede at 18??1px.
- **Label** (600, 10??1px, 0.14em, uppercase): nav, controls, table keys, metadata labels.
- **Data** (400, 13.5px, tabular): specification values and part numbers.

### Named Rules
**The Width Axis Rule.** Display and headline settings may use Archivo's width axis. Body copy never does. The width change is the hierarchy device; adding a second display face is not.

**The Small Caps Are Labels Rule.** Tracked uppercase is reserved for labels, controls and figure keys. It never sets a paragraph.

## Layout

A 12-column grid with a maximum width of 1560px and a fluid side padding of `clamp(16px, 2.4vw, 40px)`. The manual's margin rail is a 56px column: the hero's `00` and every section number sit in it, so the reader can see where they are without a breadcrumb.

The hero is a title block: the display wordmark in columns 1??, a four-row specification table at 10??2, the lede at 1??, actions at 8??1 and a colophon note at 11??2. The plate is full-bleed and 96vh tall, with a content-width sticky readout strip above it. The parts catalogue is a two-column hairline grid (1px gap over a rule-coloured ground). The cycle is 7/5 diagram-to-steps; the record is 6/6; the safety panel is 5/7; the footer is 4/5/3.

Breakpoints: 1000px collapses the desktop nav into the compact PLATE / PARTS / CYCLE / RECORD / SAFETY index row and stacks the two-column compositions. 760px turns the plate into a 980px panning stage with Front / Action / Rear views, makes the parts catalogue single-column, and stacks the footer. The display title uses `vw` but never overflows; the mobile title is 26vw.

The spacing rhythm is tight inside groups and generous between them: 6??8px inside a card or control row, 28??4px between blocks, and `clamp(56px, 8vw, 112px)` above each main section. Headings always have more space above than below.

## Elevation & Depth

The page frame is flat: no shadows, blur, glass or gradients. Depth outside the figures comes from four paper tones, 1px hairlines, and the 80px engineering grid inside the plate. The single state mark is the 1px inset accent outline on a hovered parts card.

The exploded plate is the one dimensional exception. Each plate part is extruded 15 units along a 45簞 down-right vector, with a solid side face and a 1.4px ink back edge. The front elevation stays true and keeps its detail; the side face is a darker material step, not a shadow. There is no cast shadow, no ambient occlusion and no specular highlight.

The cycle is deliberately flat. Its parts are plain linework, and its cartridge, case, feed arrow and shot line are the only moving marks. Do not give the cycle side faces or shadows; the schematic has to stay readable at a glance.

**The Plate Extrusion Rule.** The exploded plate is a front elevation plus a solid side face. The side is geometry, never a shadow, gradient, blur or bevel. The cycle is not extruded.

## Shapes

Square corners. Every container, card, control, tab and field has a 0px radius. The only curves are in the drawn object: the rifle's stock, the shield crest, the receiver's lightening cut. Borders are 1px, with a 2px weight only on the plate's numbered tabs and the active filter border. The plate's linework is 1.6px at the 1600-unit canvas, rising to 2.4px on the selected part.

The plate is extruded along the same 45° down-right vector in every part, so the light direction is consistent. The depth is fixed at 5 × 3 units. Do not vary the extrude depth by part. The cycle stays flat.

The buttstock is drawn as the real object, not a rounded box: a long straight-comb wedge with a narrow wrist at the receiver, a curved belly, a slanted butt, a proud buttplate, a toe sling swivel and a wrist screw. Its comb drops slightly toward the butt. The receiver-to-stock joint is a visible step, not a seamless blend.

## Components

### Buttons
- **Shape:** square, 46px minimum height, 1px ink border.
- **Primary:** ink fill, paper text, 0 16px padding, 11px tracked uppercase label.
- **Secondary:** transparent, ink text, 1px ink border.
- **Hover / Focus:** primary fills oxide red; secondary fills ink; focus is a 2px oxide-red outline with a 3px offset. No transforms, no lifts.

### Chips and Segments
- **Style:** 34px tall, square, 1px rule border, 10px tracked uppercase. The active filter takes an oxide-red border and text; the active segment takes an ink fill and paper text.
- **State:** `aria-pressed` is the state, not a class name. The label row ("Filter", "View") names the set so two "Action" controls never read as duplicates.

### Cards / Containers
- **Corner Style:** 0px.
- **Background:** paper; hover/selected raises to paper-raised.
- **Border:** 1px rule; the parts grid is a 1px rule ground with a 1px gap, so the cards share hairlines.
- **Internal Padding:** `clamp(18px, 2.2vw, 28px)`.
- **State:** hover or selection uses a 1px inset oxide-red outline, never a side stripe.

### Navigation
- **Desktop:** a centred 11px tracked uppercase row in the masthead, with an oxide-red underline that scales from the left on hover.
- **Mobile:** the desktop row disappears at 1000px and a compact quick-index row sits under the masthead, with hairline separators and a horizontal overflow fallback at 320px.
- **State:** current section is not tracked by scroll; the links are jump links. The language switch is a two-button segmented control, ink fill for the active language.

### Extruded Figure (signature)
Every plate part is built from a front elevation plus an oblique side face. The side face is a clone of the front geometry, offset down-right in 3-unit steps, with its detail strokes removed and its fills stepped darker by material. The backmost clone keeps a 1.4px ink outline so the silhouette stays crisp. The tabs, labels and detail lines stay on the front face; the side face never carries text. The cycle has no extrusion.

### Plate Tab (signature)
A 40?30 paper square with a 1.2px ink border and a 13.5px numeral, placed inside the SVG so it moves with its part. Live state fills oxide red and flips the numeral to paper. The hit area is 48?48. Selecting a part names it in the sticky readout strip and exposes a "Read the note" link.

### Sticky Readout
A full-width paper strip above the plate with a 24px oxide-red part number, the part name, and a right-aligned "Read the note" link. It sticks to the top of the viewport through the plate section, so the reader never loses the name of the part they are tracing.

## Do's and Don'ts

### Do:
- **Do** use exactly one oxide-red field per page; the safety panel is that field.
- **Do** set display and headline type with Archivo's width axis; keep body at 100% width.
- **Do** use 1px hairlines and paper tones for structure; the page is flat.
- **Do** keep the 80px engineering grid inside the plate; the reading column stays clean.
- **Do** extrude the exploded plate along one 45簞 vector with a solid side face and an ink back edge; keep the cycle flat.
- **Do** draw the buttstock as a long straight-comb wedge with a slanted buttplate, toe swivel and visible wrist; dark Maranyl against light metal.
- **Do** use the Hong Kong Adventure Corps crest and unit name; the copyright line is 穢 2026 Hong Kong Adventure Corps. All rights reserved. There is no motto.
- **Do** keep the Chinese layer paired span-for-span with the English.

### Don't:
- **Don't** add gradients, glass, blur, drop shadows, or rounded cards.
- **Don't** turn the plate depth into a cast shadow, gradient, bevel or specular highlight, and don't extrude the cycle.
- **Don't** simplify the buttstock back into a rounded rectangle or a generic wedge without the wrist, buttplate and toe swivel.
- **Don't** use the accent as a background outside the safety panel.
- **Don't** use a second display face or a monospace costume for technical labels.
- **Don't** add kickers or eyebrows above headings; the number rail and the heading carry the structure.
- **Don't** animate width, height, padding or margin; use transform, opacity, or a state swap.
- **Don't** use colour alone to mark selection; the live tab, the stroke, and the readout name all change together.
