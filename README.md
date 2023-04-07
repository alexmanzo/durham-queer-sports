# Durham Queer Sports

## Prerequisites

- This project was created on node version `19.4.0`, if you use `nvm` you can just run `nvm use` and it will run the correct version.
- Create an `.env` file and contact Alex for values for the following:

```bash
VITE_HYGRAPH_READ_ONLY_ENDPOINT=""
VITE_HYGRAPH_CONTENT_ENDPOINT=""
TWILIO_AUTH_TOKEN=""
```

## Running the project

Install dependencies with `npm install`, then you can start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Content

Content is managed through [Hygraph](https://hygraph.com/). Due to limited seats, only Alex and Ally have content editing access right now. If you need content to be updated or a schema added, contact Alex.

## Tools

This project is built with [SvelteKit](https://kit.svelte.dev/docs/introduction). Styling is handled through [Tailwind](https://tailwindcss.com/).
