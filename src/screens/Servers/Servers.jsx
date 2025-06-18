import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "../Hosting/sections/ContentSection";
import { PricingSection } from "./sections/PricingSection";
import { ServiceSection } from "./sections/ServiceSection";
import { FeatureListSection } from "../Hosting/sections/FeatureListSection";
import { HeroSection } from "../HeroSection";

export const Servers = () => {
  return (
    <div className="bg-[#fcfcfc] flex flex-col items-center w-full">
      <HeroSection />

      <CallToActionSection />
      <ServiceSection />
      <PricingSection />
      <FeatureListSection />
      <ContentSection />
    </div>
  );
};
