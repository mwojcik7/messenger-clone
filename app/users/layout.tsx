import Sidebar from "../components/Sidebar/Sidebar";

const UserLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}

export default UserLayout;