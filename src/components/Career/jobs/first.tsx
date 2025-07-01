import { IconCalendarWeek } from "@tabler/icons-react";
import { ListIcon } from "../components/ListIcon";

export function FirstJob() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <div>
          <strong className="block text-2xl text-white">
            Full Stack Developer
          </strong>
          <span className="text-lg text-light-gray/75">
            Coyote Tecnologia, Brazil
          </span>
        </div>

        <div>
          <strong className="flex items-center gap-2 justify-center mb-2 text-secondary">
            <IconCalendarWeek stroke={2} size={24} />
            Period
          </strong>
          <span>04/2022 - 08/2024</span>
        </div>
      </header>

      <ul className="mt-6 text-light-gray/75 space-y-3 leading-relaxed tracking-wide">
        <li>
          <ListIcon />
          Built <b>web and mobile apps</b> with <b>TypeScript</b> for an
          agricultural platform.
        </li>
        <li>
          <ListIcon />
          Developed <b>offline-first React Native</b> app for rural use.
        </li>
        <li>
          <ListIcon />
          Integrated <b>Google Maps</b> and real-time sync in a React web app.
        </li>
        <li>
          <ListIcon />
          Designed <b>Node.js APIs</b>, databases, and <b>CI/CD pipelines</b>.
        </li>
        <li>
          <ListIcon />
          Led <b>UI design and full release cycle</b> from idea to deployment.
        </li>
      </ul>
    </div>
  );
}
