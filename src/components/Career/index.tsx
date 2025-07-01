import { useState } from "react";
import { Title } from "../Title";
import { cn } from "../../utils/cn";
import { FirstJob } from "./jobs/first";
import { SecondJob } from "./jobs/second";

export function Career() {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <div className="mt-16" id="career">
      <Title>My Career</Title>

      <div className="mt-10 mb-10 flex items-center justify-around bg-white h-0.5">
        <button
          className={cn(
            "h-5 w-5 bg-element-bg rounded-full border-[3px] border-white transition-all duration-300 ease-in-out",
            activeJob === 0 && "bg-secondary"
          )}
          onClick={() => setActiveJob(0)}
        />
        <button
          className={cn(
            "h-5 w-5 bg-element-bg rounded-full border-[3px] border-white transition-all duration-300 ease-in-out",
            activeJob === 1 && "bg-secondary"
          )}
          onClick={() => setActiveJob(1)}
        />
      </div>

      <div className="grid">
        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            activeJob === 0 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4 absolute pointer-events-none"
          )}
        >
          <FirstJob />
        </div>
        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            activeJob === 1 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4 absolute pointer-events-none"
          )}
        >
          <SecondJob />
        </div>
      </div>
    </div>
  );
}
