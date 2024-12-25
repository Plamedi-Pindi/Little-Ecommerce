// Components
import Header from "../../layouts/components/Header";
import SearchForm from "../../components/searchForm/SearchForm";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import SmallCard from "../../components/Cards/SmallCard";
import FlexContainer from "../../components/Containers/FlexContainer";
import ProductCard from "../../components/Cards/ProductCard";
import VirtualAssistent from "../../components/virtualAssistent/VirtualAssistent";
import Banner from "../../components/Banner/Banner";
import GaleryGrid from "../../components/Grid/GaleryGrid";
import Footer from "../../layouts/components/Footer";
import BenefitShowComponent from "./components/BenefitShowComponent";
import TestimunialCard from "../../components/Testimunial/TestimunialCard";
import ServicesRequire from "../../components/Banner/ServicesRequire";
import PupularProduct from "../../components/PopularProducts/PupularProduct";
import Category from "../../components/Category/Category";

// Import Home Style
import "./Home.css";

// Import React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper Modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Hooks
import { useState } from "react";

// Product Model Example
const Products = [
  {
    id: 1,
    name: "Primeira Amarração",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "lenco",
    image: "/6.png",
  },
  {
    id: 2,
    name: "Segunda Amarração",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Lenco",
    image: "",
  },
  {
    id: 3,
    name: "Terceira Amarração",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Lenco",
    image: "",
  },
  {
    id: 4,
    name: "Quarta Amarração",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Lenco",
    image: "",
  },
  {
    id: 5,
    name: "Quarta Amarração",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Lenco",
    image: "",
  },
  {
    id: 6,
    name: "Primeiro Abano",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Abano",
    image: "",
  },
  {
    id: 7,
    name: "Segundo Abano",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Abano",
    image: "",
  },
  {
    id: 8,
    name: "Terceiro Abano",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Abano",
    image: "",
  },
  {
    id: 9,
    name: "Quarto Abano",
    price: 20000,
    color: ["red, yellow, blue, green"],
    isLoved: false,
    type: "Abano",
    image: "",
  },
];

// Component function
export default function Home({ toggleVisibility, toggle }) {
  const [productsList, setProducstList] = useState(Products); // All product list

  // Lencos
  const Lencos = productsList.filter((item) => item.type === "Lenco");

  // Abanos
  const Abanos = productsList.filter((item) => item.type === "Abanos");

  return (
    <div className="w-full block m-auto h-screen overflow-y-auto relative bg-primary overflow-hidden ">
      {/* Header */}
      <Header toggle={toggle} toggleVisibility={toggleVisibility} />

      {/*  */}
      <div className=" screen-500:w-[90%] block m-auto pr-4 pl-4 md:flex  md:h-[19rem]">
        <div className="md:w-[20rem] mr-3 ">
          <SearchForm />
          <Category />
        </div>
        <Hero />
      </div>

      {/* Category section */}
      <Section
      box={"md:hidden"}
        title={"Categorias"}
        iconVisibility="hidden"
        styleBackground="bg-secundary/80"
        styleSet={"w-40 h-40  top-0 -right-10"}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={2}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            630: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <SmallCard title={"Lenços simples"} imgUrl="3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard title={"Lenços Longos"} imgUrl="4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard title={"Abanos"} imgUrl="5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard title={"Lencos vb"} imgUrl="3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard title={"categoria"} imgUrl="4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard title={"categoria"} imgUrl="4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard title={"categoria"} imgUrl="4.jpg" />
          </SwiperSlide>
        </Swiper>
      </Section>

      {/* Popular product */}
      <Section
        title={"Populares"}
        allOption={"Ver todos"}
        styleSet="w-[20rem] h-[20rem] top-28 -left-[10rem]"
        styleBackground="bg-details2"
      >
        <FlexContainer flexMode={"justify-between flex-wrap"}>
          <PupularProduct
            title={"Product name"}
            price={"10.000,00kz"}
            imgUrl="6.png"
          />
          <PupularProduct
            title={"Product name"}
            price={"10.000,00kz"}
            imgUrl="7.png"
          />
          <PupularProduct
            title={"Product name"}
            price={"10.000,00kz"}
            imgUrl="6.png"
          />
          <PupularProduct
            title={"Product name"}
            price={"10.000,00kz"}
            imgUrl="6.png"
          />
        </FlexContainer>
      </Section>

      {/* LENÇOS */}
      <Section
        title="Lenços"
        allOption="Ver todos"
        styleSet="w-28 h-28 bottom-0 right-10"
        styleBackground="bg-details2"
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={130}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            375: { spaceBetween: 90 },
            414: { spaceBetween: 50 },
            412: { spaceBetween: 40 },
            430: { spaceBetween: 30, slidesPerView: 2, centeredSlides: true },
            530: { spaceBetween: 160, slidesPerView: 3, centeredSlides: true },
            700: { spaceBetween: 60, slidesPerView: 3, centeredSlides: true },
            830: { spaceBetween: 5, slidesPerView: 3, centeredSlides: true },
          }}
        >
          {Lencos.map((lenco) => (
            <SwiperSlide key={lenco.id}>
              <div className="sc-430:flex justify-center items-center">
                <ProductCard
                  width="w-48"
                  height="h-64"
                  imgUrl={"/6.png"}
                  CardDesignHeight="h-44"
                  imgWidth="w-[68%]"
                  title={lenco.name}
                  price={lenco.price}
                  oldPrice={"15.000,00kz"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* ABANOS */}
      <Section
        title="Abanos"
        allOption="Ver todos"
        styleSet="w-28 h-28 bottom-0 left-10"
        styleBackground="bg-details2"
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={130}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            375: { spaceBetween: 90 },
            414: { spaceBetween: 50 },
            412: { spaceBetween: 40 },
            430: { spaceBetween: 30, slidesPerView: 2, centeredSlides: true },
            530: { spaceBetween: 160, slidesPerView: 3, centeredSlides: true },
            700: { spaceBetween: 60, slidesPerView: 3, centeredSlides: true },
            830: { spaceBetween: 5, slidesPerView: 3, centeredSlides: true },
          }}
        >
          <SwiperSlide>
            <div className="sc-430:flex justify-center items-center">
              <ProductCard
                width="w-48"
                height="h-64"
                imgUrl="6.png"
                CardDesignHeight="h-44"
                imgWidth="w-[68%]"
                title="Product Name"
                price={"10.000,00kz"}
                oldPrice={"15.000,00kz"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sc-430:flex justify-center items-center">
              <ProductCard
                width="w-48"
                height="h-64"
                imgUrl="7.png"
                CardDesignHeight="h-44 "
                imgWidth="w-[68%]"
                title="Product Name"
                price={"10.000,00kz"}
                oldPrice={"15.000,00kz"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sc-430:flex justify-center items-center">
              <ProductCard
                width="w-48"
                height="h-64"
                imgUrl="7.png"
                CardDesignHeight="h-44 "
                imgWidth="w-[68%]"
                title="Product Name"
                price={"10.000,00kz"}
                oldPrice={"15.000,00kz"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sc-430:flex justify-center items-center">
              <ProductCard
                width="w-48"
                height="h-64"
                imgUrl="6.png"
                CardDesignHeight="h-44"
                imgWidth="w-[68%]"
                title="Product Name"
                price={"10.000,00kz"}
                oldPrice={"15.000,00kz"}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </Section>

      {/* Banner */}
      <Banner />

      {/*  */}
      <Section
        title={"Por que solicitar nossos serviços?"}
        box="mt-8 "
        iconVisibility="hidden"
        styleBackground="bg-details2/80"
        styleSet={"w-40 h-40  -bottom-10 right-20"}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={2}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          centeredSlides={true}
          breakpoints={{
            430: { slidesPerView: 2, spaceBetween: 30 },
            530: { spaceBetween: 6, slidesPerView: 2 },
            630: { spaceBetween: 80, slidesPerView: 3 },
            830: { spaceBetween: 20, slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <BenefitShowComponent
                title="Lenços Exclusivos e Elegantes"
                desc="Designs únicos e de alta qualidade, perfeitos para qualquer ocasião especial."
                imgUrl="icon1.png"
                imgDim="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center">
              <BenefitShowComponent
                title="Abanos Sofisticados"
                desc="Acrescente um toque de classe ao seu casamento ou evento."
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center">
              <BenefitShowComponent
                imgUrl="hairdresser.png"
                imgDim="w-12"
                title="Amarração Personalizada"
                desc="Transformamos o lenço ideal no estilo perfeito, feito por profissionais experientes."
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center">
              <BenefitShowComponent
                imgUrl="trs.png"
                imgDim="w-10"
                title="Atendimento em Domicílio"
                desc="Nossa equipe vai até você para realizar o serviço com conforto e praticidade."
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </Section>

      {/* Galeria */}
      <Section
        title={"Galeria"}
        allOption={"Ver todas"}
        box={"mt-8"}
        styleSet="w-48 h-48 -bottom-14 -left-5"
        styleBackground="bg-secundary"
      >
        <GaleryGrid />
      </Section>

      {/* Testimunial */}
      <Section
        title="O que os nosso clientes dizem"
        box="mt-14   h-[22rem] "
        iconVisibility="hidden"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="paginacao"
          spaceBetween={2}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{
            clickable: true,
          }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          breakpoints={{
            630: { slidesPerView: 2, spaceBetween: -80, centeredSlides: true },
            730: { slidesPerView: 3, spaceBetween: 80, centeredSlides: true },
            830: { slidesPerView: 3, spaceBetween: 40, centeredSlides: true },
          }}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <TestimunialCard
                name="John Deo"
                funct="Customer"
                imgUrls="2.jpg"
                desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ab ea! Doloremque ab quibusdam beatae amet?"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <TestimunialCard
                name="John Deo"
                funct="Customer"
                imgUrls="4.jpg"
                desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ab ea! Doloremque ab quibusdam beatae amet?"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <TestimunialCard
                name="John Deo"
                funct="Customer"
                imgUrls="4.jpg"
                desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ab ea! Doloremque ab quibusdam beatae amet?"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <TestimunialCard
                name="John Deo"
                funct="Customer"
                imgUrls="4.jpg"
                desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ab ea! Doloremque ab quibusdam beatae amet?"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </Section>

      {/* Virtual Assintence */}
      <VirtualAssistent
        position={"bottom-4 right-3"}
        size={"w-14 h-14"}
        font={"text-2xl"}
      />

      <ServicesRequire />

      <Footer></Footer>
    </div>
  );
}
