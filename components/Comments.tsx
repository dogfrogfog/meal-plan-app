import { Card } from "./ui/card";
import FeedbackForm from "@/components/FeedbackForm";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-l from-purple-500 to-pink-500 p-12 mb-12">
      <h1 className="text-4xl mb-4 text-white">Leave your comment</h1>
      <h3 className="text-xl text-white mb-4">
        Include testimonials from satisfied customers who have experienced your
        unique meal planning service. Highlight their positive experiences, such
        as saving time, discovering new flavors, or achieving their health
        goals.
      </h3>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <Card className="p-4">
            <FeedbackForm />
          </Card>
        </div>
        <div className="col-span-3 flex justify-between px-12">
          {["comment 1", "comment2", "comment3", "comment4"]
            .slice(0, 3)
            .map((comment) => (
              <div key={comment}>
                <Card className="p-4 min-h-96">
                  <h3 className="text-2xl font-bold">{comment}</h3>
                  <span>author: {"anonymus"}</span>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
