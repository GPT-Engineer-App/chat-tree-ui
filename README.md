# chat-tree-ui

A UI for an LLM chat with a sidebar with a tree structure showing previous chats as well as indexed messages within that chat in a collapsible tree. A chat can be 'active' / open - when that is the case there is a message box as well as a grid of 'frames' snapshots from the chat  that can be brought up for examination. each message in the chat will behave as if it was a new commit in a git repository each commit we call a frame, the frame can be selected (like selecting a previous message in a normal chat - except in this interface are chats have alot of associated data with them so can be very complex hence frame by frame - each frame should support GIT like functions like fork, pull, blame, etc..

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/chat-tree-ui.git
cd chat-tree-ui
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
