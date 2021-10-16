import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/client";

function Feed() {
  const [session] = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 ${
        session ? "xl:max-w-6xl" : "xl:max-w-2xl"
      } mx-auto`}
    >
      <section className={`${session ? "col-span-2" : "col-span-3"}`}>
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed">
            {/* Mini Profile */}
            <MiniProfile />
            {/* Suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
