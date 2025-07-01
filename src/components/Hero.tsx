import { useRef, useEffect } from "react";
import { Button } from "./Button";
import {
  IconBrandGithubFilled,
  IconFileDownloadFilled,
} from "@tabler/icons-react";
import resumeUrl from "../assets/Iran_Batista_Resume.pdf";

export function Hero() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      spanRef.current.style.setProperty("--span-width", `${width + 15}px`);
    }
  }, []);

  function handleDownloadResume() {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Iran_Batista_Resume.pdf";
    link.click();
  }

  function handleOpenGithub() {
    window.open("https://github.com/iranadryan", "_blank");
  }

  return (
    <div className="mt-32">
      <h1 className="text-4xl flex flex-col items-start leading-relaxed">
        Hey! I'm{" "}
        <span
          ref={spanRef}
          className="text-5xl text-white font-bold relative after:content-[''] after:absolute after:bottom-0.5 after:-left-3 after:z-[-1] after:w-[var(--span-width,360px)] after:h-4 after:bg-primary"
        >
          Iran Adryan,
        </span>{" "}
        a software engineer.
      </h1>
      <div className="flex gap-4 mt-4">
        <Button className="w-40" onClick={handleDownloadResume}>
          <IconFileDownloadFilled />
          Resume
        </Button>
        <Button className="w-40" onClick={handleOpenGithub}>
          <IconBrandGithubFilled />
          GitHub
        </Button>
      </div>
    </div>
  );
}
