import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="bg-slate-200 p-12 mb-12">
      <h1 className="text-4xl font-bold  mb-4">Call-to-Action Section:</h1>
      <h3 className="mb-8">
        Include testimonials from satisfied customers who have experienced your
        unique meal planning service. Highlight their positive experiences, such
        as saving time, discovering new flavors, or achieving their health
        goals.
      </h3>

      <h1 className="text-4xl font-bold mb-4">
        Sign up for newslatter or w8 list
      </h1>
      <div className="flex">
        <Input
          className="flex-1 bg-white mb-4 w-72 text-4xl p-4"
          placeholder="maksim@google.com"
        />
        <Button>Submit</Button>
      </div>
    </section>
  );
}
