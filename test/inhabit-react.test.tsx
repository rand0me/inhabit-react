const React = require("react");
import { create } from "react-test-renderer";

import { InHabit } from "../src/inhabit-react";

function createNodeMock() {
  // You can return anything from this function.
  // For example:
  return {
    appendChild() {
      // Do nothing
    },
    querySelector() {
      return {}
    },
    focus() {
      // Do nothing
    }
  }
}

const createElement = (name: string) => ({
  name,
  dataset: {}
});

/**
 * Dummy test
 * @jest-environment jsdom
 */
describe("InHabit", () => {
  it("works", () => {
    (global as any)["document"] = undefined;
    const vdomTree = create(<InHabit client="test" />).toJSON();
    expect(vdomTree).toMatchSnapshot();
  })

  it("works in browser", () => {
    (global as any)["document"] = { createElement };
    const vdomTree = create(<InHabit client="test" url="" />, { createNodeMock }).toJSON();
    expect(vdomTree).toMatchSnapshot();
    (global as any)["document"] = undefined;
  })
})
