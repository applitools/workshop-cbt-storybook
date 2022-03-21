![Cross Browser Testing for Storybook Components](images/cbt-storybook-banner.png)

# Modern Cross Browser Testing for Storybook Components

This repository contains a demo project for visually testing
[Storybook](https://storybook.js.org/) components
in a [React](https://reactjs.org/) front-end app
with [Applitools Eyes](https://applitools.com/products-eyes/).
Applitools Eyes will perform visual tests on Storybook components
*without* the need to write any extra test code!

This project was created for the
[Modern Cross Browser Testing for Storybook Components](http://applitools.info/vbm) workshop
led by [Pandy Knight](https://twitter.com/AutomationPanda)
and hosted by [Applitools](https://applitools.com/).
Full instructions for the workshop are provided in [`WORKSHOP.md`](WORKSHOP.md).


## Abstract

Web apps are full of small, reusable pieces called components: buttons, headers, and even bigger things like calendars that enable developers to create uniform UIs with maximal reusability. [Storybook](https://storybook.js.org/) is one of the most popular tools for building components in isolation.

Components must work correctly – functionally and visually – across all browsers and platforms. If a component has an issue, it could affect many views within an app, ruining user experience. Testing components individually is a great way to mitigate risk by isolating problems at their source. Visual cross-browser testing can quickly detect if one component changed in a problematic way.

In this 1-hour workshop, “Automation Panda” Andy Knight will explain how to automate cross-browser tests for Storybook components in a React app using Applitools Eyes and the Ultrafast Grid without needing to write any new code. He will demonstrate how Applitools Eyes integrates with Storybook to automatically take snapshots of all components for visual comparisons, and how Applitools Ultrafast Grid can render those snapshots using multiple browsers and mobile configurations within seconds.

Key takeaways:

* The importance of testing components visually in isolation from full pages
* Critical requirements for a scalable cross-browser testing initiative and pros/cons of different approaches
* How to accelerate cross-browser and cross-device testing for Storybook components using visual testing techniques


## Outline

1. Understanding our React app
2. Manually testing Storybook components
3. Visually testing Storybook components
4. Testing components across different browsers


## Prerequisites

1. An Applitools account
   * Register [here](https://auth.applitools.com/users/register) for a free account
2. [Node.js](https://nodejs.org/en/)
   * This project was created with v16.13.1
3. A JavaScript IDE like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
4. Up-to-date versions of the following browsers:
   * [Google Chrome](https://www.google.com/chrome/)
   * [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
   * [Microsoft Edge](https://www.microsoft.com/en-us/edge)


## Quickstart

To clone this repository:

```bash
git clone https://github.com/applitools/workshop-cbt-storybook.git
```

To install the dependencies:

```bash
cd applitools-react-storybook-demo
npm install
```

> *Note:*
> This project was initially created using
> [Create React App](https://github.com/facebook/create-react-app).

To launch the React app, run:

```bash
npm start
```

This command starts the app at `http://localhost:3000/`.
When it loads, you should see the home page,
which concisely explains the need for visual component testing.

To launch the Storybook viewer, run:

```bash
npm run storybook
```

This command starts the viewer at `http://localhost:6006/`.
When it loads, you should see components on the left navbar,
and the main part of the page should be a component viewer.