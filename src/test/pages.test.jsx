import { createElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { MasterProject } from "../pages/MasterProject";
import { BachelorProject } from "../pages/BachelorProject";
import { PukProject } from "../pages/PukProject";
import { SecoProject } from "../pages/SecoProject";
import { PartyGamesProject } from "../pages/PartyGamesProject";

const pages = [
  ["Home", Home],
  ["Master project", MasterProject],
  ["Bachelor project", BachelorProject],
  ["PUK project", PukProject],
  ["SECO project", SecoProject],
  ["Party Games project", PartyGamesProject],
  ["Not found", NotFound],
];

describe("pages render", () => {
  pages.forEach(([label, Page]) => {
    it(`${label} renders content`, () => {
      const { container } = render(
        createElement(MemoryRouter, null, createElement(Page)),
      );
      expect(container.textContent.trim().length).toBeGreaterThan(0);
    });
  });
});
