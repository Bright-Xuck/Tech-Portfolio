import { GithubIcon } from "lucide-react";

export default function ProjectBoxes(prop) {
  return (
    <div className="grid grid-cols-1 grid-rows-[2fr_3fr]">
      <div>{prop.image}</div>
      <div>
        <h1>{prop.name}</h1>
        <h2>{prop.description}</h2>
        <div>
          {prop.tech.forEach((element) => (
            <div>{element}</div>
          ))}
        </div>
        <div>
            <div><GithubIcon></GithubIcon></div>
            <h2>View Code</h2>
        </div>
      </div>
    </div>
  );
}
