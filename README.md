# slidev-theme-renuo

[![NPM version](https://img.shields.io/npm/v/slidev-theme-renuo?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-renuo)

A theme for [Slidev](https://github.com/slidevjs/slidev), inspired by Renuo's branding.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.


```markdown
---
theme: renuo
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

### Cover

![Cover](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/cover.png?raw=true)


```markdown
--- 
layout: cover
// all values below are optional
showContactText: true 
website: https://renuo.ch
email: hello@renuo.ch
phone: +41 44 500 55 66
showAddressText: true 
addressHeader: Address 
company: Renuo AG
street: Industriestrasse 44
zip: 8304 
city: Wallisellen 
---

# Renuo Presentation Theme

Presentation slides for engineers
```

### Intro

![Intro](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/intro.png?raw=true)

```markdown
---
layout: intro
---

Primary Heading
# Introduction Slide
Secondary Heading
```

### Default

![Default](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/default.png?raw=true)

```markdown
---
showLogo: true // show the Renuo logo (optional)
---
```

### Quote

![Quote](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/quote.png?raw=true)

```markdown
---
layout: quote
---
```

### Full

![Full](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/full.png?raw=true)

```markdown
---
layout: full
---
```

### Center

![Center](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/center.png?raw=true)

```markdown
---
layout: center
---
```

## Configurations

### Mermaid

This theme supports [Mermaid](https://mermaid-js.github.io/mermaid/) diagrams.

![Mermaid](https://raw.githubusercontent.com/renuo/renuo-slidev-theme/main/screenshots/mermaid.png?raw=true)

```markdown
```mermaid
sequenceDiagram
    Consumer-->API: Book something
    API-->BookingService: Start booking process
    break when the booking process fails
        API-->Consumer: show failure
    end
    API-->BillingService: Start billing process
``` 
```

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
