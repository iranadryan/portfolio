import {
  IconBrandAws,
  IconBrandGit,
  IconBrandGraphql,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconInfinity,
  IconWand,
} from "@tabler/icons-react";

const HABILITIES = [
  {
    name: "Typescript",
    icon: <IconBrandTypescript stroke={1.5} size={32} />,
    level: 9,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs stroke={1.5} size={32} />,
    level: 9,
  },
  {
    name: "React",
    icon: <IconBrandReact stroke={1.5} size={32} />,
    level: 9,
  },
  {
    name: "React Native",
    icon: <IconBrandReactNative stroke={1.5} size={32} />,
    level: 8,
  },
  {
    name: "SQL",
    icon: <IconBrandMysql stroke={1.5} size={32} />,
    level: 9,
  },
  {
    name: "Git",
    icon: <IconBrandGit stroke={1.5} size={32} />,
    level: 9,
  },
  {
    name: "Tailwind CSS",
    icon: <IconBrandTailwind stroke={1.5} size={32} />,
    level: 9,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs stroke={1.5} size={32} />,
    level: 6,
  },
  {
    name: "GraphQL",
    icon: <IconBrandGraphql stroke={1.5} size={32} />,
    level: 6,
  },
  {
    name: "CI/CD",
    icon: <IconInfinity stroke={1.5} size={32} />,
    level: 6,
  },
  {
    name: "UI/UX Design",
    icon: <IconWand stroke={1.5} size={32} />,
    level: 7,
  },
  {
    name: "AWS",
    icon: <IconBrandAws stroke={1.5} size={32} />,
    level: 5,
  },
];

interface HabilityProps {
  name: string;
  icon: React.ReactNode;
  level: number;
}

function Hability({ name, icon, level }: HabilityProps) {
  return (
    <li className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-secondary">{icon}</span>
          <strong className="text-light-gray leading-0">{name}</strong>
        </div>

        <strong className="text-light-gray leading-0">{level}/10</strong>
      </div>

      <div className="mt-3 w-full h-1 bg-element-bg">
        <div
          className="h-full bg-secondary"
          style={{ width: `${level * 10}%` }}
        ></div>
      </div>
    </li>
  );
}

export function Habilities() {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-2xl text-secondary"># My Habilities</h3>
      <ul className="mt-4 grid grid-cols-2 gap-6">
        {HABILITIES.map((hability) => (
          <Hability key={hability.name} {...hability} />
        ))}
      </ul>
    </div>
  );
}
