# Tailwind CSS

## version

- we are using Tailwind CSS version 4
- Tailwind 4 doesn't require a tailwind.config.ts. don't add a tailwind.config.ts.

## file structure and definitions

### tokens.css

- tokens.css defines general css variables (design tokens) for example for colors or breakpoints or margins/paddings
- tokens.css does not contain definitions for the themes
- we follow the Tailwind css variable naming conventions
- every css variable that we add in theme.css needs to be defined here as well, with out the "theme" prefix and equals the the variable from theme.css. example: `--color-text: var(--theme-color-text);`

### theme.css

- theme.css defines css variables for the themes
- each css variable should be defined in "root" and in any other theme for example "dark"
- this allows us to use the same css variables in different themes
- every variable needs the prefix "theme"
- then css variable names should follow the Tailwind css variable naming conventions. for example colors should be prefixed with "color". then we add the type of the color for example "background", "border" or "text" or for semantic colors "success" or "warning". the default values should not be followed by any aditional postfix, however we can create variations for example by adding a more specific type like "--theme-color-text-label" or "--theme-color-background-highlight". if we need inverted colors, we add "-inverted" for example "--theme-color-text-inverted".
- if we use the postfix "-primary" this should reflect the use of the primary color. for example "--theme-color-text-primary" or "--theme-color-border-primary" should use the primary color.
- we don't want to use postfixes "light" or "dark" because this will be confusing when using dark and light mode.

### globals.css

- globals.css defines global styles for html elements
- globals.css defines custom CSS classes which are used throughout the app. this should only be classes that use more than one css property or that can't be defined in a css variable like gradients.
- if we define colors in globals.css we need to make sure that we define the colors for all themes

## using Tailwind CSS utility classes

- if we apply more than three Tailwind classes, we use the "cn" function from "utils" and add each class as a string in an array. for example ['bg-background', 'text-light', 'border-border', 'm-4']
- conditional class names should always be applied by using the "cn" helper
- when applying colors in components we should always use the definitions from the theme. for example for text we should add "text-text" or "text-text-label". For backgrounds we should use "bg-background" or "bg-background-highlight".

## adding a new color

- add the new color as a variant in theme.css for all theme modes with prefix "theme"
- add the new color in tokens.css without the "theme" prefix pointing towards the variable defined in theme.css
