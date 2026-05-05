import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/organic-mushrooms")({
  component: () => <Outlet />,
});
