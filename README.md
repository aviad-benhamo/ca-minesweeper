# CA Minesweeper

Browser-based Minesweeper game built as a Coding Academy project.

[Live Demo](https://aviad-benhamo.github.io/ca-minesweeper/)

## Project Status

Experimental. The game is playable in the browser and is maintained as a lightweight static web project.

## Overview

CA Minesweeper is a classic Minesweeper implementation written with plain HTML, CSS, and JavaScript. The project runs directly in the browser and does not require a build step, package manager, backend service, or environment configuration.

## Features

- Three difficulty levels: Beginner, Medium, and Expert.
- First-click mine placement.
- Timer, mine counter, and lives counter.
- Flagging with right-click.
- Empty-cell reveal expansion.
- Safe-cell hint buttons.
- Mine exterminator helper.
- Dark and light theme toggle.
- Victory and loss sound effects.

## Screenshots and Demo

- Live demo: <https://aviad-benhamo.github.io/ca-minesweeper/>
- Screenshot: [assets/screenshots/game-board.png](assets/screenshots/game-board.png)

## Quick Start

Clone the repository:

```bash
git clone https://github.com/aviad-benhamo/ca-minesweeper.git
cd ca-minesweeper
```

Run the game:

```bash
# Option 1: open index.html directly in a browser.

# Option 2: serve the folder with any static file server.
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Configuration

No configuration is required.

This project does not use environment variables, external services, package installation, or build-time configuration.

## Design Principles

- Keep the project simple and suitable for a static browser game.
- Prefer readable vanilla JavaScript over unnecessary abstractions.
- Keep changes small and focused.
- Preserve the existing game behavior unless a task explicitly requires changing it.
- Keep documentation and technical artifacts in English.

## Project Structure

```text
.
|-- index.html          # Main browser entry point
|-- css/
|   `-- style.css       # Game layout, board styling, and themes
|-- js/
|   |-- game.js         # Minesweeper game state, rules, and UI handlers
|   `-- utils.js        # Shared browser utility helpers
|-- assets/
|   |-- images/         # Game image assets
|   |-- logo/           # Favicon and logo assets
|   |-- screenshots/    # Documentation screenshots
|   `-- sounds/         # Game sound effects
|-- CHANGELOG.md        # Notable project changes
|-- SECURITY.md         # Security policy
`-- LICENSE             # MIT license
```

## Development Notes

- The game starts through `onInit()` in `index.html`.
- Main game behavior lives in `js/game.js`.
- Shared helpers live in `js/utils.js`.
- The project currently has no automated test suite.
- Validate changes manually in a browser after editing gameplay, layout, or assets.

Run the lightweight static check:

```bash
node scripts/check-static-assets.mjs
```

Suggested manual validation:

1. Open the game locally.
2. Start each difficulty level.
3. Reveal cells, place and remove flags, and use the helper buttons.
4. Confirm win and loss states still work.
5. Toggle between dark and light mode.

See [docs/quality-checks.md](docs/quality-checks.md) for the full validation process and browser QA checklist.

## AI Notice

AI assistants working in this repository should follow `AGENTS.md` and the GitHub Repository Standard. Keep changes narrowly scoped, inspect relevant files before editing, avoid speculative refactors, and validate any modified behavior before reporting completion.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

This project is licensed under the [MIT License](LICENSE).
