# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML/CSS/JS. One page, no build step, deploys directly to GitHub Pages. The user plans to host on GitHub Pages and asked for the tradeoff; static wins because a framework would add a build pipeline and Actions config for no functional gain.

## Users

Primary: cadets and instructors of the Hong Kong Adventure Corps (香港少年領袖團), a Hong Kong uniformed youth organisation, using the handbook to learn the parts and operating principles of the L1A1 Self-Loading Rifle for training and general knowledge. Secondary: military-history enthusiasts and collectors who want a clear, accurate visual reference.

## Product Purpose

An online parts handbook for the L1A1 SLR: an exploded view that can be explored part by part, plain-language explanations of what each group does and how the mechanism cycles, key specifications, and a short handling/safety panel appropriate to a cadet audience. Success means a young reader can name the main assemblies, explain how the rifle fires and reloads itself, and understands safe handling expectations without needing prior armourer knowledge.

## Positioning

A teaching instrument rather than a gun catalogue: the same exploded-plate precision as a 1950s armourer's manual, rebuilt as an interactive, accessible web page that assumes no prior knowledge and never glamorises the object.

## Operating Context

Read on phones and school/unit laptops, often in a classroom or cadet hut, sometimes printed. Readers may be new to firearms terminology, so jargon is explained in place. The page is a study reference, not a substitute for instruction by a qualified armourer or unit orders.

## Capabilities and Constraints

- Single scrolling page: exploded view, part index, function notes, cycle explanation, specifications and safety panel. The unit identity sits in the masthead and footer.
- The exploded view is one authored SVG plate; hovering/focusing a part traces it to its card and dims unrelated parts.
- All content is static. No accounts, no backend, no data collection.
- The unit identity is real: crest (`assets/hkac.png`, plus `assets/hkac-mark.png` for the masthead and favicon), name (Hong Kong Adventure Corps / 香港少年領袖團), accent (#C03214), and copyright line (© 2026 Hong Kong Adventure Corps. All rights reserved.). No motto.
- No operational instructions for live firearms: no round counts, no modification guidance, no firing drills. Mechanism explanation is descriptive.
- Facts must match the L1A1 (inch pattern), not the metric FAL.

## Brand Commitments

- Unit: Hong Kong Adventure Corps (香港少年領袖團).
- Crest: `assets/hkac.png`, supplied by the unit. Do not redraw, recolour or substitute it.
- Accent: `#C03214` — keep this oxide red; do not switch to the crest's brighter red.
- Copyright: © 2026 Hong Kong Adventure Corps. All rights reserved.
- No motto. Do not invent one.

## Evidence on Hand

- Specifications and history: L1A1 Self-Loading Rifle, Wikipedia (7.62×51mm NATO, 4.337 kg empty, 1,143 mm overall, 554.4 mm barrel, 823 m/s, 20-round magazine, gas-operated, tilting breechblock, semi-automatic, S/R selector, folding cocking handle, sand cuts, Maranyl furniture).
- Mechanism description: Australian War Memorial REL35170 (gas regulator, separate bolt tipping into receiver recess, hinged trigger housing).
- Parts nomenclature: FAL/L1A1 parts lists (barrel, flash eliminator, gas plug, regulator, handguards, bolt carrier, bolt, firing pin, extractor, locking shoulder, top cover, cocking handle, hold-open, magazine release, trigger frame, hammer, trigger, sear, return spring, buttstock).
- No photographs or official manual scans are on hand. The exploded plate must be authored, not copied from a copyrighted manual.
- Unit crest: `assets/hkac.png` (transparent PNG; 800 × 800 site version, 160 × 160 mark).

## Product Principles

1. Teach the machine, not the myth: every claim serves understanding.
2. Precision is the aesthetic: correct names, correct order, correct relationships.
3. No prior knowledge assumed; define a term the first time it appears.
4. The reader's safety and their unit's rules come before completeness.
5. The unit identity is fixed: keep the crest, name, accent and copyright intact.

## Accessibility & Inclusion

- Keyboard-operable exploded view and part index; visible focus; no colour-only encoding.
- Respect `prefers-reduced-motion`.
- Text sized for phone reading; contrast at WCAG AA or better.
- Audience includes readers with limited English confidence; short sentences, plain words, glossary.
