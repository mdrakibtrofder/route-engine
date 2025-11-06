export type ResourceFile = { id: number; name: string; type: string; size: string; modified: string; tags: string[] };
export type Bookmark = { id: number; title: string; url: string; description: string; tags: string[] };
export type Note = { id: number; title: string; content: string; modified: string; tags: string[] };
export type Snippet = { id: number; title: string; language: string; lines: number; modified: string; tags: string[] };
export type Resource = ResourceFile | Bookmark | Note | Snippet;
export type ResourceType = "files" | "bookmarks" | "notes" | "snippets";

export interface AllResources {
  files: ResourceFile[];
  bookmarks: Bookmark[];
  notes: Note[];
  snippets: Snippet[];
}
