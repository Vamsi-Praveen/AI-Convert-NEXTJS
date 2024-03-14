import Editor from "@/components/Editor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ContextProvider } from "@/context/ContextProvider";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <ContextProvider>
      <main className="min-h-screen w-full md:px-20 pt-6 px-5">
        <Header />
        <Hero />
        <Editor />
        <Footer />
        <Toaster position="top-center" />
      </main>
    </ContextProvider>
  );
}
