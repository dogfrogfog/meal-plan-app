import Image from "next/image";
import { Button } from "./ui/button";
import LandingBlock from "./LandingBlock";

export default function IntroductionSection() {
  return (
    <LandingBlock>
      <div className="col-span-1">
        <Image
          src="/meal-plan.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-3 ml-12">
        <h1 className="text-4xl font-bold mb-8">Introduction Section</h1>
        <h3 className="text-md font-bold mb-8">
          {`Welcome statement: /Welcome to [Your Brand Name] - Where Meal Planning
          Meets Innovation" Brief overview: "At [Your Brand Name], we've
          reimagined the meal planning experience to bring you a new level of
          convenience, creativity, and enjoyment." Unique selling point:
          "Discover a Meal Planning Experience That You Didn't Know Exists"{" "}`}
        </h3>
        <Button>Tryr it now!</Button>
      </div>
    </LandingBlock>
  );
}
