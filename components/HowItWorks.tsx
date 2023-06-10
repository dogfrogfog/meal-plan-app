import { Card } from "./ui/card";

export default function HowItWorks() {
  return (
    <section
      id="guide"
      className="bg-gradient-to-r from-purple-500 to-pink-500 p-12 mb-12"
    >
      <h1 className="text-4xl mb-4 text-white">How It Works Section</h1>
      <div className="grid grid-cols-5 gap-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Step 1</h3>
          <p className="text-md font-bold">
            Select your dietary preferences and any specific dietary
            restrictions.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Step 2</h3>
          <p className="text-md font-bold">
            Browse our curated collection of mouthwatering recipes.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Step 3</h3>
          <p className="text-md font-bold">
            Drag and drop your favorite recipes into the weekly meal planner.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Step 4</h3>
          <p className="text-md font-bold">
            Generate a personalized shopping list with the exact quantities
            needed.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Step 5</h3>
          <p className="text-md font-bold">
            Enjoy stress-free meal planning and delicious dishes all week long.
          </p>
        </Card>
      </div>
    </section>
  );
}
