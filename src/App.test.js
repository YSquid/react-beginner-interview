import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe(App, () => {
  it('renders an h1 with "Random User"', () => {
    const { getByTestId } = render(<App />);
    const randomUserTitle = getByTestId("random-user-title").textContent;
    expect(randomUserTitle).toBe("Random User");
  });

  it('renders an h1 with "Users"', () => {
    const { getByTestId } = render(<App />);
    const usersTitle = getByTestId("users-title").textContent;
    expect(usersTitle).toBe("Users");
  });
});
