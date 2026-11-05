import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Table from "./index";

it("Table renders a striped row from the column render prop", () => {
  render(
    <Table
      striped
      bordered
      columns={[{ header: "Name", render: (row) => <span>{row.name}</span> }]}
      data={[{ name: "Ada" }, { name: "Grace" }]}
    />,
  );
  expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
  expect(screen.getByText("Grace")).toBeInTheDocument();
});
