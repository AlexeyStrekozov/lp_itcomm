import Link from "@/components/AppLink";
import { PostData } from "@/types/postdata";

export default function Post({ title, body, id }: PostData) {
  return (
    <article
      className={
        "p-4 flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl"
      }
    >
      <h2 className={"text-h2 leading-10 text-primary first-letter:capitalize"}>
        {title}
      </h2>
      <p className={"text-p4 mt-4 first-letter:capitalize"}>{body}</p>
      <Link className={""} href={`/post/${id}`}>
        <a className={"mt-auto pt-4 text-amber-600 mt-4 text-p3"}>
          Read more...
        </a>
      </Link>
    </article>
  );
}
