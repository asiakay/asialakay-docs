---
slug: writing-tests-for-the-produce-plu-code-search-react-app
authors: asiak
title: Writing Tests for the "Produce PLU Code Search" React App
tags: [frontend, javascript, react, testing]
---

# Writing Tests for the "Produce PLU Code Search" React App

In this tutorial, we'll guide you through the process of writing tests for the "[Produce PLU Code Search](https://github.com/asiakay/Produce-PLU-Code-Search)" React app using React Testing Library and Jest. This app allows users to search for and display the PLU code for grocery produce items. It features autosuggest and accessibility features.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

1. **Node.js:** You need to have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

2. **The "Produce PLU Code Search" React App:** Ensure you have the "[Produce PLU Code Search](https://github.com/asiakay/Produce-PLU-Code-Search)" React app set up and ready for testing.

## Step 1: Install Dependencies

In your "Produce PLU Code Search" React project, install the necessary testing libraries if you haven't already. Open your terminal and run the following commands:

```bash
npm install --save @testing-library/react @testing-library/jest-dom
```

## Step 2: Create the Test File

Create a new test file for the "Produce PLU Code Search" component. In your project directory, create a file named `App.test.js`. This file will contain your component's tests.

## Step 3: Writing the Tests

Inside the `App.test.js` file, you'll write the tests for your "Produce PLU Code Search" app. Here are the tests we'll create:

### Test 1: Rendering the Main Title

```javaScript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Import the "Produce PLU Code Search" component

test('renders the main title', () => {
  render(<App />);
  const titleElement = screen.getByText('Produce PLU Code Search');
  expect(titleElement).toBeInTheDocument();
});
```

### Test 2: Searching for a Produce Item

```javaScript
test('allows searching for a produce item and displays PLU code', () => {
  render(<App />);

  // Type a search term
  const searchInput = screen.getByPlaceholderText('Enter produce item');
  fireEvent.change(searchInput, { target: { value: 'Apple' } });

  // Click the search button
  const searchButton = screen.getByLabelText('Search');
  fireEvent.click(searchButton);

  // Verify that the PLU code is displayed
  const pluCodeElement = screen.getByText('PLU Code: 123');
  expect(pluCodeElement).toBeInTheDocument();
});
```

### Test 3: Displaying Suggestions

```javaScript
test('displays suggestions when typing in the search input', () => {
  render(<App />);

  // Type a search term
  const searchInput = screen.getByPlaceholderText('Enter produce item');
  fireEvent.change(searchInput, { target: { value: 'Ap' } });

  // Verify that suggestions are displayed
  const suggestionElement = screen.getByText('Apple');
  expect(suggestionElement).toBeInTheDocument();
});
```

### Test 4: Handling Suggestion Click

```javaScript
test('handles suggestion click and updates the search input and PLU code', () => {
  render(<App />);

  // Type a search term
  const searchInput = screen.getByPlaceholderText('Enter produce item');
  fireEvent.change(searchInput, { target: { value: 'Banana' } });

  // Click a suggestion
  const suggestionElement = screen.getByText('Banana');
  fireEvent.click(suggestionElement);

  // Verify that the search input and PLU code are updated
  expect(searchInput).toHaveValue('Banana');
  const pluCodeElement = screen.getByText('PLU Code: 4011');
  expect(pluCodeElement).toBeInTheDocument();
});
```

## Step 4: Running the Tests

To run your tests, use the following command in your project directory:

`npm test`

This command will execute the test suite defined in App.test.js. If all tests pass, you'll see the test results in your terminal.

Congratulations! You've successfully written tests for the "[Produce PLU Code Search](https://github.com/asiakay/Produce-PLU-Code-Search)" React app using React Testing Library and Jest. These tests help ensure that your app behaves as expected, making it easier to catch and fix issues during development.
