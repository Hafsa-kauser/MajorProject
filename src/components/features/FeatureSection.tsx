import FeatureCard from "./FeatureCard";
import { features } from "./Feature";

const FeatureSection: React.FC = () => {
  return (
    <section id="f" className="max-w-7xl mx-auto  px-6 py-20">
      <h2 className="text-4xl  text-center text-white mb-12">
        Platform Advantages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            Icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
