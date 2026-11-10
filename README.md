# L1A1 SLR — Parts Handbook

A single-page, bilingual (English / 繁體中文) parts handbook for the 7.62 mm L1A1 Self-Loading Rifle, built for the **Hong Kong Adventure Corps (香港少年領袖團)** and useful to anyone curious about the machine.

**Live:** https://ehkac.github.io/slr/

Static HTML, CSS and JavaScript. No build step, no dependencies, no tracking.

## Run it locally

Open `index.html` directly, or serve the folder:

```sh
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deploy to GitHub Pages

1. Push the contents of this folder to a repository.
2. Repository → **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. The page appears at `https://<user>.github.io/<repo>/`.

No GitHub Actions workflow is needed. All paths are relative.

## Branding

The handbook uses the unit's real identity; there are no placeholder slots.

- **Crest:** the masthead and favicon use `assets/hkac-mark.png` (160 × 160). The full `assets/hkac.png` (800 × 800, transparent) is kept as the source crest. Replace both files to change the mark.
- **Unit name:** Hong Kong Adventure Corps / 香港少年領袖團. It appears in the masthead and the footer; search for it in `index.html` to update it.
- **Accent:** `--accent` in `styles.css` is `#C03214`. The crest's own red is brighter; the page keeps the oxide accent deliberately.
- **Copyright:** © 2026 Hong Kong Adventure Corps. All rights reserved. It appears in the footer.
- **Motto:** none. Do not add one.

### Changing the accent

`--accent` is used as a text colour on the pale paper, so keep it dark enough to read (WCAG AA). The default is `#C03214`. If you choose a light colour, also adjust the safety field's text colour in the `.safety` rules.

## Language

English is the default. The `EN / 中文` switch in the masthead swaps every paired `.en` / `.zh` span and remembers the choice in `localStorage`. To add a new string, write it twice:

```html
<span class="en">Barrel</span><span class="zh">槍管</span>
```

Use Traditional Chinese (Hong Kong). Technical terms are kept consistent with the parts cards.

## Structure

```
index.html      page + inline exploded-view SVG + cycle diagram
styles.css      tokens, layout, plate states, responsive rules
main.js         plate interaction, filters, cycle playback, language
assets/
  hkac.png      full crest source, 800 × 800 (transparent)
  hkac-mark.png masthead / favicon mark, 160 × 160
  fonts/        self-hosted Archivo variable font (SIL Open Font License)
PRODUCT.md      product context
```

## The exploded view

- Hover or tap a numbered tab to focus a part; the readout names it and links to its note.
- Click a part (or press <kbd>Enter</kbd> / <kbd>Space</kbd> when it is focused) to pin it.
- **Stripped / Assembled** moves the same drawing between states.
- **Gas / Action / Feed / Body** filters both the plate and the parts cards.
- Hovering a parts card highlights the corresponding part in the plate.
- On phones the plate pans: **Front / Action / Rear** jump the view, or swipe the drawing. A compact section index sits under the masthead.

The exploded plate is an extruded 3D technical drawing: a true side elevation with a solid oblique side face. It is not a rotatable model — the numbered tabs, filters and readout remain the interaction. The cycle is a flat 2D schematic, kept deliberately shadow-free so the feed, lock, fire, unlock, extract and return sequence reads at a glance; a moving cartridge carries the action.

The plate is drawn in the rifle's real material split: dark Maranyl furniture against light parkerised steel, with the magazine and buttplate in a smooth dark tone. The buttstock is drawn from the L1A1 profile — long straight comb, narrow wrist, curved belly, slanted butt, proud buttplate, toe sling swivel and wrist screw — rather than a generic rounded block.

The drawing is original SVG, schematic and deliberately not to scale. It is not a repair blueprint.

## Sources and scope

Specifications and mechanism notes are drawn from public reference material, including the Australian War Memorial's L1A1 entry, standard L1A1 parts nomenclature, and published L1A1/FAL technical descriptions. Figures are for the British L1A1; Australian and Canadian variants differ in detail.

This is an independent, non-official study aid. It contains no firing drills, modification guidance or operational instruction. The safety panel is not a substitute for unit orders or a qualified instructor.

## Licence

Page code and drawings: use and adapt freely for your unit. The Archivo font is licensed under the SIL Open Font License; see the font's source for details.
