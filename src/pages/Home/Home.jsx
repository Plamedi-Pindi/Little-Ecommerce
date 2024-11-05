// Components
import Header from "../../layouts/components/Header";
import SearchForm from "../../components/searchForm/SearchForm";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import HorizontalScrollContainer from "../../components/ScrollContainer/HorizontalScrollContainer";
import SmallCard from "../../components/Cards/SmallCard";
import FlexContainer from "../../components/Containers/FlexContainer";
import ProductCard from "../../components/Cards/ProductCard";

export default function Home() {
  return (
    <div>
        <Header/>
        <SearchForm />
        <Hero />

        {/* Category section */}
        <Section title={'Categoria'} allOption={'Ver todos'}>
            <HorizontalScrollContainer>
                <SmallCard title={'categoria 1'}/>
                <SmallCard title={'categoria 2'}/>
                <SmallCard title={'categoria 3'}/>
                <SmallCard title={'categoria 4'}/>
                <SmallCard title={'categoria 5 mmmn nb'}/>
            </HorizontalScrollContainer>
        </Section>

        {/* Popular product */}
        <Section title={'Popular'} allOption={'Ver todos'}>
            <FlexContainer flexMode={'justify-between flex-wrap'}>
                <ProductCard title={'product name'} isLoved={true}/>
                <ProductCard title={'product name'}/>
                <ProductCard title={'product name'}/>
                <ProductCard title={'product name'}/>
            </FlexContainer>
        </Section>
    </div>
  )
}
