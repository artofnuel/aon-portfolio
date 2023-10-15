const art = {
    name: "art",
    title: "Art",
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
    ],
  };
  
  export default art;
  