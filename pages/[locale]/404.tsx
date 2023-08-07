import { LogoWhite } from "@/components";
import { getStaticPaths, makeStaticProps } from "@/lib/localize/getStatic";

export default function Custom404() {
  return (
    <div className={"bg-header  flex items-center justify-center min-h-screen"}>
      <div className="flex flex-col gap-10 items-center ">
        <LogoWhite />
        <h1 className={"text-h1 text-primary"}>...</h1>
      </div>
    </div>
  );
}
const getStaticProps = makeStaticProps(["main-page", "common"]);

export { getStaticPaths, getStaticProps };
