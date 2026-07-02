# Quality Checks

CA Minesweeper is a dependency-free static browser project with no build step, package manager, runtime services, or environment variables. Use these checks before merging changes that affect gameplay, layout, documentation, or assets.

## Local Run Options

The game can be opened directly through `index.html` because all runtime files are local static assets.

For regular development, prefer a local static server because it behaves more like GitHub Pages hosting:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

No install step is required.

## Automated Static Checks

Run the no-dependency static asset check from the repository root:

```bash
node scripts/check-static-assets.mjs
```

The script verifies that local files referenced by `index.html` exist, that required project entry files are present, and that sound assets used by the game are available.

This is a static validation script, not a full automated game test suite. There is currently no unit, integration, or end-to-end test framework.

## Manual Browser QA

Complete this checklist in a current desktop browser:

- [ ] The game loads without visible layout breakage.
- [ ] The browser console has no errors on initial load.
- [ ] The default board renders as the Medium level with an 8x8 grid.
- [ ] The smiley restart button resets the current board, timer, lives, hints, and mine counter.
- [ ] Beginner renders a 4x4 grid and starts with 2 mines.
- [ ] Medium renders an 8x8 grid and starts with 14 mines.
- [ ] Expert renders a 12x12 grid and starts with 32 mines.
- [ ] The first left-click starts the timer and never reveals a mine.
- [ ] Revealing numbered cells and empty cells works, including empty-cell expansion.
- [ ] Right-click flags and unflags hidden cells after the game starts.
- [ ] The mine counter decreases and increases when flags are added or removed.
- [ ] Revealed cells cannot be flagged.
- [ ] Hint buttons highlight safe unrevealed cells, then become disabled after use.
- [ ] The mine exterminator removes mines, updates the mine counter, and becomes disabled after use.
- [ ] Hitting mines reduces lives before the loss state.
- [ ] Loss reveals mines, stops the timer, and changes the smiley state.
- [ ] Winning stops the timer and changes the smiley state.
- [ ] Dark/light theme toggle changes the visual theme without moving the board controls.
- [ ] Image assets for hints and the mine exterminator load correctly.
- [ ] Victory and loss sound files are present and can play when browser autoplay rules allow user-triggered audio.

## Practical Validation Scope

For small documentation-only changes, reviewing the rendered page or markdown may be enough. For gameplay, layout, or asset changes, run the automated static check and complete the manual browser QA checklist.
