# brutestrap (v1.5.2)

A port of Blueprint/React-Bootstrap (also with Inspiration from Ignite and Evergreen) UI kit components to VanillaView.js and CSS Grid, energized by the pursuit of minimalist code and minimalist design in all things.

```JavaScript
[...new Set([...Blueprint, ...Bootstrap])].map(convertTo(VanillaView.js, CSSGrid)).filter(minimalistCode)
```

## Roadmap / TODO list

*Note: the choice of whether the component is from Blueprint or Bootstrap depends on which I think looks more like what I want.*

### Simple input components
- ~Blueprint text inputs~
- ~Blueprint tag inputs~
- ~Blueprint file inputs~
- ~Spinner~
- ~Button with spinner~

### Intermediate Components
- ~Table (defined by three functions, column_header(i), row_header(j), cell_data(i,j))~
- ~Datalist (defined by 1 function data(i))~
- List component (list of inputs).
- Map component (map of inputs, string keys to inputs).

### Media Components
- Image Capture component (upload)
- Page capture component (is this possible in regular browser JS? upload)
- Sound recorder component (streaming / upload)
- Video recorder component (streaming / upload)
- Location capture component (streaming / upload)

### Layout Components
- Modal (of various kinds)
- Drawer
- Toast
- Dialog
- Menu

### Advanced Input components
- Live updating fuzzy search input (e.g: "type your city...", "skill...", "topic...") (not just a datalist or its select polyfill on iOS, but a true fuzzy search input with updating list that works on any target)
- Group of inputs (group of observations of a particular input, either listed, or mapped) "higher order component" that takes any imput component, and either "list" or "map" type (map types will just support string keys for now)

### Extended Components

- Table
  - Rename columns (optional)
  - Reorder rows (optional)
  - Reorder columns (optional)
  - Columns can be deleted (optional)
  - Columns can be hidden (optional)
  - Presentation mutations can be saved.
- List component
  - Slots can be reordered (optional).
  - Can page for more inputs (optional).
- Map component
  - Keys can be renamed (optional).
  - Keys can have order (optional).
  - Keys can be reordered (optional).

