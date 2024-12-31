'use client'

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import Client from "@/components/ui/Client";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
    <div className="max-w-5xl w-[90%]">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProject/>
      <Client />
      <Experience />
      <Footer />
    </div>
   </main>
  );
}
