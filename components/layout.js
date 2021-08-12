import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="bg-trueGray-50 flex-1">
        <div className="lg:container mx-auto p-6 md:px-6 md:py-12">
          {props.children}
        </div>
      </main>

    </div>
  );
}
