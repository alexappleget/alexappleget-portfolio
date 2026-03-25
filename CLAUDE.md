# Code Preferences

## Interfaces

- Always preface interfaces with `I` (e.g., `IUser`, `IAccount`, `IProject`)
- Always put interfaces inside `types/interface.ts`
- Keep interfaces alphabetized within the file

## Imports

- Always alphabetize imports by name of import

## Components

- Break UI sections into separate components in `components/` folder
- Import components into page files (e.g., `app/page.tsx`)

## Data

- Keep static data/content in `data/` folder (e.g., `data/projects.ts`)
- Import data into components to keep component files clean

## Styling

- Dark theme with Pikachu-inspired color palette:
  - Background: `#0f0f0f`
  - Background secondary: `#1a1a1a`
  - Primary (Pikachu yellow): `#FFCB05`
  - Secondary (Pikachu red): `#E63F34`
  - Text: `#f5f5f5`
  - Text muted: `#a1a1a1`
  - Border: `#2a2a2a`
- No gradients
- Minimal and clean design

## Animations

- No animations unless explicitly requested (impacts load time and can cause glitches)
- Exception: TechStrip marquee animation is approved
