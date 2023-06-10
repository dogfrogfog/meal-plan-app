import { Card } from "./ui/card";

export default function Benefits() {
  return (
    <section className="bg-yellow-200 p-12  mb-12">
      <h1 className="text-4xl mb-4">Benefits Section</h1>
      <div className="grid grid-cols-4 gap-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Benefit 1</h3>
          <p className="text-md font-bold">
            Save Time: Effortlessly plan your meals for the entire week in
            minutes.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Benefit 2</h3>
          <p className="text-md font-bold">
            Explore New Culinary Horizons: Access a vast library of unique and
            delicious recipes.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Benefit 3</h3>
          <p className="text-md font-bold">
            Stay Healthy: Customize your meal plans to align with your dietary
            goals and preferences.
          </p>
        </Card>
        <Card className="p-8">
          <h3 className="text-2xl font-bold">Benefit 4</h3>
          <p className="text-md font-bold">
            Reduce Food Waste: Efficiently manage ingredients and avoid unused
            groceries.
          </p>
        </Card>
      </div>
    </section>
  );
}
