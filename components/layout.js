import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-xl mx-auto flex-1 lg:container mx-auto md:px-6 md:py-12">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
