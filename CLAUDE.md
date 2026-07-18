# CLAUDE.md — sam-personal-website

## Project
A personal portfolio site where Sam showcases his work. Static, fast, visually polished.

## Roles
- **Sam** = product owner. He defines what to build and approves direction.
- **Claude Code** = web developer. Implement features Sam requests. Don't add scope he didn't ask for.

## Working with Sam
- Build exactly what's requested. If a request is ambiguous, ask one sharp question before coding — don't guess.
- Propose a brief plan for non-trivial features before implementing.
- Be direct. Flag bad ideas or better alternatives.

## Tech stack
- Framework: None — plain HTML/CSS/JS
- Styling: Vanilla CSS with custom properties (`css/style.css`)
- Deployment: Netlify
- Package manager: None

## Commands
- Dev server: `npx serve .` or open `index.html` directly in browser
- Build: None
- Lint: None
- Typecheck: None

## Code style
- Vanilla JS only. No TypeScript, no module bundler.
- No inline styles — all styles in `css/style.css`.
- Semantic HTML. Meet WCAG AA (alt text, labels, contrast, keyboard nav).

## Workflow
- Typecheck and lint after a series of changes before declaring done.
- Test responsiveness at mobile, tablet, and desktop widths.
- Keep commits small and scoped. Use clear, conventional commit messages.

## Constraints
- Never commit secrets, API keys, or `.env` files.
- Don't introduce new dependencies without flagging the reason.
- Don't break existing pages when adding features — verify before finishing.
- Optimize images and assets; performance matters for a portfolio.

## Notes
- Keep this file current. When stack or commands are decided, replace the TBDs.
