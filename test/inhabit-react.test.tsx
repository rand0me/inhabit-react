const React = require("react");
import { create } from "react-test-renderer";

import { InHabit } from "../src/inhabit-react";

/**
 * Dummy test
 * @jest-environment jsdom
 */
describe("InHabit", () => {
  it("works", () => {
    const vdomTree = create(<InHabit client="test" />).toJSON();
    expect(vdomTree).toMatchSnapshot();
  })
})
