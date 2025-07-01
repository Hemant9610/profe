
import Header from "@/components/Header";
import SearchHeader from "@/components/SearchHeader";
import ResultsTable from "@/components/ResultsTable";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <div className="flex-1">
              <Header />
            </div>
          </header>
          <div className="flex-1">
            <SearchHeader />
            <ResultsTable />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
