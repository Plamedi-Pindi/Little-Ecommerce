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
import BenefitShowComponent from "./components/BenefitShowComponent";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-auto relative bg-primary overflow-hidden">
      <Header />
      <SearchForm />
      <Hero />

      {/* Category section */}
      <Section
        title={"Categoria"}
        visibility="hidden"
        styleBackground="bg-secundary/80"
        styleSet={"w-40 h-40  top-0 -right-10"}
      >
        <HorizontalScrollContainer>
          <SmallCard title={"Lenços simples"} imgUrl="3.webp" />
          <SmallCard title={"Lenços Longos"} imgUrl="4.jpg" />
          <SmallCard title={"Abanos"} imgUrl="5.jpg" />
          <SmallCard title={"Lencos vb"} imgUrl="3.webp" />
          <SmallCard title={"categoria"} imgUrl="4.jpg" />
        </HorizontalScrollContainer>
      </Section>

      {/* Popular product */}
      <Section
        title={"Popular"}
        allOption={"Ver todos"}
        styleSet="w-[20rem] h-[20rem] top-32 -left-[10rem]"
        styleBackground="bg-details2"
      >
        <FlexContainer flexMode={"justify-between flex-wrap"}>
          <ProductCard title={"Product name"} imgUrl="7.png" />
          <ProductCard title={"Product name"} imgUrl="6.png" />
          <ProductCard title={"Product name"} imgUrl="7.png" />
          <ProductCard title={"Product name"} imgUrl="6.png" />
        </FlexContainer>
      </Section>

      {/* Banner */}
      <Banner />

      {/*  */}
      <Section
        title={"Por que solicitar nossos serviços?"}
        box="mt-8 "
        visibility="hidden"
        styleBackground="bg-details2/80"
        styleSet={"w-40 h-40  -bottom-10 right-20"}
      >
        <HorizontalScrollContainer>
          <BenefitShowComponent
            title="Lenços Exclusivos e Elegantes"
            desc="Designs únicos e de alta qualidade, perfeitos para qualquer ocasião especial."
            imgUrl="icon1.png"
            imgDim="w-full"
          />
          <BenefitShowComponent
            title="Abanos Sofisticados"
            desc="Acrescente um toque de classe ao seu casamento ou evento."
          />
          <BenefitShowComponent
            imgUrl="hairdresser.png"
            imgDim="w-12"
            title="Amarração Personalizada"
            desc="Transformamos o lenço ideal no estilo perfeito, feito por profissionais experientes."
          />
          <BenefitShowComponent
            imgUrl="trs.png"
            imgDim="w-10"
            title="Atendimento em Domicílio"
            desc="Nossa equipe vai até você para realizar o serviço com conforto e praticidade."
          />
        </HorizontalScrollContainer>
      </Section>

      {/* Galeria */}
      <Section title={"Galeria"} allOption={"Ver todas"} box={"mt-8"} styleSet={'hidden'}>
        <GaleryGrid />
      </Section>

      {/* Services */}
      <ServicesSection margins={"mt-10"} />

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
