# osmnl-website

This repository contains the source code for the for a new concept for the [OpenStreetMap Netherlands](https://www.openstreetmap.nl/) website. This is built using [SvelteKit](https://kit.svelte.dev/), and is currently still a work in progress.

## Running the project

To run the project, you need to have [Node.js](https://nodejs.org/en/) installed. Once you have that, you can run the following commands:

```bash
# Install dependencies
npm install

# Run the project in development mode
npm run dev
```

## Building the project

To build the project, you can run the following command:

```bash
npm run build
```

## Components

```mermaid
graph LR
    L[+layout.svelte] --> H & M & F

    H[Header] --> N & C & LS
    M[Main] --> h & b & bd & p & c & s
    F[Footer]

    N[Navigation] --> NI
    C[Calendar]
    LS[LanguageSwitch]

    NI[NavigationItem]

    h["Home (+page.svelte)"]
    b["Blog (+page.svelte)"] --> BP
    bd["Blog detail page ([slug]/+page.svelte)"] --> BP
    p["Projects (+page.svelte)"] --> P
    c["Contact (+page.svelte)"] --> CI
    s["Support (+page.svelte)"]

    BP[BlogPost]

    P[Project]

    CI[CommunityIndex]
```
