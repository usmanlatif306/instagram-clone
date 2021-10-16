import { signOut, useSession } from "next-auth/client";
function MiniProfile() {
  const [session] = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session.user.image}
        alt=""
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-grow mx-4">
        <h1 className="font-bold">{session.user.username}</h1>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
