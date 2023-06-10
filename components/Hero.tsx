import Image from "next/image";
import { Button } from "./ui/button";
import LandingBlock from "./LandingBlock";

export default function HeroComponent() {
  return (
    <LandingBlock>
      <div className="col-span-3 mr-12">
        <h1 className="text-4xl font-bold mb-8">How It Works Section</h1>
        <h3 className="text-md font-bold mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in
          dicta labore magni sequi quis fugit incidunt cum inventore, culpa
          mollitia aut modi hic, delectus provident? Soluta ipsum cum veniam.
        </h3>
        <Button>Tryr it now!</Button>
      </div>
      <div className="col-span-1">
        <Image
          src="/meal-plan.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </LandingBlock>
  );
}
