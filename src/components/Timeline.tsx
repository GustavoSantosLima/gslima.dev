import { Work } from "@/helpers/Icons";

type TimelineProps = {
  title: string;
  startDate: string;
  role: string;
  description: string;
  technologies: string[];
  endDate?: string;
};

export default function Timeline({
  role,
  title,
  endDate,
  startDate,
  description,
  technologies
}: TimelineProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-cyan-400 text-cyan-950">
          {Work}
        </span>
        <span className="w-[1px] flex-1 bg-gray-400"></span>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <div className="text-xs font-extralight">
          {startDate} - {endDate || "Atualmente"}
        </div>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm mb-4">
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>Cargo: {role}</li>
            <li>Descrição: {description}</li>
            <li>
              Tecnologias:
              <ul className="flex flex-col gap-1 list-[circle] ml-9">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
