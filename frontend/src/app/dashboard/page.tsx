import { MainNav } from "@/components/ui/main-nav";

function Page() {
  return (
    <div className="w-full h-full bg-XpectreLightRose">
      <div className="bg-red-600 pt-8 ">
        <MainNav />
      </div>
      <div className="container mx-auto w-full h-full bg-XpectreLightRose">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className="col-span-2 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Main Content</h2>
            <p>This is the main content area.</p>
          </section>
          <aside className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Sidebar</h2>
            <p>This is the sidebar content.</p>
          </aside>
        </main>
        <footer className="mt-4">
          <p className="text-center text-sm text-gray-500">© 2023 Your Company</p>
        </footer>
      </div>
    </div>
  );
}

export default Page;
