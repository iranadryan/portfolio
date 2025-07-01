import { Habilities } from "./Habilities";
import { Title } from "./Title";

export function About() {
  return (
    <div className="mt-32" id="about">
      <Title>About me</Title>
      <p className="mt-10 leading-relaxed tracking-wide">
        I’m a <b>developer from Pará</b>, on the edge of the Amazon. I fell in
        love with code in <b>2017</b> after building a high school app that{" "}
        <b>shared stories of Black Brazilian women</b> — that moment showed me
        how <b>tech can amplify voices</b> and <b>solve real problems</b>.
      </p>
      <p className="mt-4 leading-relaxed tracking-wide">
        Since then, I’ve been driven by <b>curiosity</b> and a{" "}
        <b>passion for building</b>. I’m the kind of teammate who{" "}
        <b>shows up, helps out, and gets things across the finish line</b>.
      </p>

      <Habilities />
    </div>
  );
}
