interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
}

export function ProjectCard({ name, description, image }: ProjectCardProps) {
  return (
    <div className="bg-element-bg rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-[220px] object-cover rounded-lg mb-3" />
      <strong className="text-white text-lg font-bold mb-2 block">{name}</strong>
      <p>{description}</p>
    </div>
  );
}
