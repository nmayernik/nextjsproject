import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="bg-system-light dark:bg-system-dark flex-1">
        <div className="lg:container mx-auto">
          {props.children}
        </div>
      </main>

    </div>
  );
}
