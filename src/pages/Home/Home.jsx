// Components
import Header from "../../layouts/components/Header";
import SearchForm from "../../components/searchForm/SearchForm";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import HorizontalScrollContainer from "../../components/ScrollContainer/HorizontalScrollContainer";
import SmallCard from "../../components/Cards/SmallCard";
import FlexContainer from "../../components/Containers/FlexContainer";
import ProductCard from "../../components/Cards/ProductCard";
import VirtualAssistent from "../../components/virtualAssistent/VirtualAssistent";
import Banner from "../../components/Banner/Banner";
import GaleryGrid from "../../components/Grid/GaleryGrid";
import ServicesSection from "../../components/Services/ServicesSection";
import Footer from "../../layouts/components/Footer";
import Card from "../../components/Cards/Card";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-auto relative">
      <Header />
      <SearchForm />
      <Hero />

      {/* Category section */}
      <Section title={"Categoria"} allOption={"Ver todos"}>
        <HorizontalScrollContainer>
          <SmallCard title={"categoria 1"} />
          <SmallCard title={"categoria 2"} />
          <SmallCard title={"categoria 3"} />
          <SmallCard title={"categoria 4"} />
          <SmallCard title={"categoria 5 mmmn nb"} />
        </HorizontalScrollContainer>
      </Section>

      {/* Popular product */}
      <Section title={"Popular"} allOption={"Ver todos"}>
        <FlexContainer flexMode={"justify-between flex-wrap"}>
          <ProductCard title={"product name"} isLoved={true} />
          <ProductCard title={"product name"} />
          <ProductCard title={"product name"} />
          <ProductCard title={"product name"} />
        </FlexContainer>
      </Section>

      {/* Banner */}
      <Banner />

      {/* Galeria */}
      <Section title={"Galeria"} allOption={"Ver todas"} box={"mt-8"}>
        <GaleryGrid />
      </Section>

      {/* Services */}
      <ServicesSection margins={"mt-10"} />

      {/*  */}
      <Section title={"Galeria"}  box={"mt-8"}>
        <HorizontalScrollContainer>
          <Card background="bg-zinc-600" boxSize="w-40 h-52"></Card>
          <Card background="bg-zinc-600" boxSize="w-40 h-52"></Card>
          <Card background="bg-zinc-600" boxSize="w-40 h-52"></Card>
          <Card background="bg-zinc-600" boxSize="w-40 h-52"></Card>
          <Card background="bg-zinc-600" boxSize="w-40 h-52"></Card>
        </HorizontalScrollContainer>
      </Section>

      {/* Virtual Assintence */}
      <VirtualAssistent
        position={"bottom-4 right-3"}
        size={"w-14 h-14"}
        font={"text-2xl"}
      />


      <Footer></Footer>
    </div>
  );
}
