const LandingBlock = ({ children }: { children: React.ReactNode }) => (
  <section className="bg-orange-200 h-96 grid grid-cols-4 p-12 rounded-2xl mb-12">
    {children}
  </section>
);
export default LandingBlock;
