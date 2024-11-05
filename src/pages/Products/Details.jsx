//Component
import { NavigateBackHeader } from "../../layouts/components/Header";
import Section from "../../components/Section/Section";
import FlexContainer from "../../components/Containers/FlexContainer";
import Card from "../../components/Cards/Card";

export default function Details() {
  return (
    <div>
      <div className="w-full h-96 bg-zinc-600 pt-4 p-1 mb-4 clip ">
        <NavigateBackHeader color={"text-zinc-200"} />
      </div>

      <Section title={"Escolher tamanho"}>
        <FlexContainer>
          <Card
            boxSize={"w-12 h-12"}
            margins={"mr-3"}
            background={"bg-zinc-300"}
            box={"flex items-center justify-center"}
          >
            <p className="text-base font-medium">S</p>
          </Card>
          <Card
            boxSize={"w-12 h-12"}
            margins={"mr-3"}
            background={"bg-zinc-300"}
            box={"flex items-center justify-center"}
          >
            <p className="text-base font-medium">M</p>
          </Card>
          <Card
            boxSize={"w-12 h-12"}
            margins={"mr-3"}
            background={"bg-zinc-300"}
            box={"flex items-center justify-center"}
          >
            <p className="text-base font-medium">L</p>
          </Card>
          <Card
            boxSize={"w-12 h-12"}
            margins={"mr-3"}
            background={"bg-zinc-300"}
            box={"flex items-center justify-center"}
          >
            <p className="text-base font-medium">XL</p>
          </Card>
        </FlexContainer>
      </Section>
    </div>
  );
}
