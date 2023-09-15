import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import allSchemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "80txq467",
  dataset: "production",
  title: "Emmanuel Inua's Portfolio Site.",
  apiVersion: "2023-09-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: allSchemas,
  },
});

export default config;
