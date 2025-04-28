import { Footer } from "@/app/pages/marketing/components/Footer";
import { Header } from "@/app/pages/marketing/components/Header";

export const Layout = ({ children, pathname }: { children: React.ReactNode, pathname: string }) => {
  return (
    <div>
      <Header pathname={pathname} />
      <main className="page-grid">
        <div className="col-span-6">
          <img src="/images/logo.svg" alt="Show of Hands" />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
