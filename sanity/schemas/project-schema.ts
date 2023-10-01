const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      options: { hotspot: true },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "github",
      title: "Github",
      type: "url",
    },
    {
      name: "components",
      title: "Components",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
