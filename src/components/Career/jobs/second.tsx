import { IconCalendarWeek } from "@tabler/icons-react";
import { ListIcon } from "../components/ListIcon";

export function SecondJob() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <div>
          <strong className="block text-2xl text-white">
            Software Engineer
          </strong>
          <span className="text-lg text-light-gray/75">
            Shaw and Partners, United States
          </span>
        </div>

        <div>
          <strong className="flex items-center gap-2 justify-center mb-2 text-secondary">
            <IconCalendarWeek stroke={2} size={24} />
            Period
          </strong>
          <span>09/2024 - Present</span>
        </div>
      </header>

      <ul className="mt-6 text-light-gray/75 space-y-3 leading-relaxed tracking-wide">
        <li>
          <ListIcon />
          Built <b>Node.js + React</b> tools for recruitment, finance, legal,
          and HR.
        </li>
        <li>
          <ListIcon />
          Boosted reliability with <b>TypeScript tests</b> and <b>SQL tuning</b>
          .
        </li>
        <li>
          <ListIcon />
          Delivered <b>React Native</b> app for a mentorship platform.
        </li>
        <li>
          <ListIcon />
          Built <b>REST APIs</b>, optimized DBs, and automated <b>CI/CD</b>.
        </li>
      </ul>
    </div>
  );
}
