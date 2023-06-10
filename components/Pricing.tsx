import { Card } from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className="text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-12 mb-12">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <h3 className="text-xl mb-8">
        Pricing and Plans Section: Display the different pricing options and
        subscription plans available, including any special offers or discounts.
        Highlight the value proposition of each plan and the benefits users will
        receive.
      </h3>
      <div className="grid grid-cols-3 gap-x-16 text-center">
        <Card className="p-4 align-center">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p className="text-xl mb-4">list of features</p>
          <p className="mb-4 p-4 text-white text-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            free
          </p>
        </Card>
        <Card className="p-4 align-center">
          <h3 className="text-2xl font-bold mb-4">Premium</h3>
          <p className="text-xl mb-4">list of features</p>
          <p className="mb-4 p-4 text-white text-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            almost free
          </p>
        </Card>
        <Card className="p-4 align-center">
          <h3 className="text-2xl font-bold mb-4">Titan</h3>
          <p className="text-xl mb-4">list of features</p>
          <p className="mb-4 p-4 text-white text-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            not free
          </p>
        </Card>
      </div>
    </div>
  );
}
