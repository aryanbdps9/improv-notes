# aryanbdps9-improv-notes

Improv 100 practice site: a CROW(E) word list with clickable idea cards, plus class notes.

- `index.html` - word list (Character, Relationship, Objective, Where, Emotion, Approaches, Names), CROW roulette, side pane with one-liners, It's Tuesday replies and Freeze Tag poses.
- `notes.html` - weekly class recaps (originals in `notes/`).
- `data/` - card content as plain JS. One line per field:
  - `popup-*.js`: `Heading: chip | chip | @Link to another card | chip [example; example]`
  - `examples-*.js`: `chip text ==> example; example; example`
  - `crow-*.js`: `Line: {C:...} {R:...} {O:...} {W:...} {E:...}`, `Tuesday: ...`, `Pose: pose -> meaning`

Static site, no build step. Open `index.html` locally or serve via GitHub Pages.
