import {
  useStytchIsAuthorized,
  useStytchMemberSession,
  useStytchOrganization,
} from "@stytch/react/b2b";

export default function Dashboard() {
  const { organization } = useStytchOrganization();
  const { session } = useStytchMemberSession();
  const { isAuthorized } = useStytchIsAuthorized("gif", "create");

  return (
    <main className="py-8">
      <h2 className="text-2xl font-bold">{organization?.organization_name}</h2>
      <p className="font-medium">
        Roles:{" "}
        <span className="text-cyan-600">{session?.roles.join(", ")}</span>
      </p>
      <p className="font-medium">
        Permission:{" "}
        <span className="text-cyan-600">
          {isAuthorized ? "Super User" : "User"}
        </span>
      </p>
      {isAuthorized && <button>Create Gif</button>}
    </main>
  );
}
