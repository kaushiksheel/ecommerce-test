import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex container mt-10 gap-5">
      <div className="sticky max-w-[300px] top-20 w-full border-r border h-screen overflow-y-auto rounded-xl p-5">
        <Sidebar/>
      </div>
      <div className="flex-1 ">{children}</div>
    </div>
  );
}
