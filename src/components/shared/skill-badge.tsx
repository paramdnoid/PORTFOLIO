import type { Skill } from "@/types";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="px-3 py-1 text-sm">
      {skill.name}
    </Badge>
  );
}
