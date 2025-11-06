export class CreateIdeaDto {
  title: string;
  description: string;
  researchArea: string;
  status: "inbox" | "planning" | "validating" | "in-progress";
  impact: "low" | "medium" | "high";
  effort: "low" | "medium" | "high";
  hypothesis: string;
  tags: string[];
}
