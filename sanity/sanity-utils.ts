import { Profile, Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "80txq467",
    dataset: "production",
    apiVersion: "2023-09-10",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        content,
    }`
  );
}

export async function getProfiles(): Promise<Profile[]> {
  const client = createClient({
    projectId: "80txq467",
    dataset: "production",
    apiVersion: "2023-09-10",
  });

  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      content,
    }`
  );
}
