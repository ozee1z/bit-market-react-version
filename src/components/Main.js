import ChooseUs from "./ChooseUs";
import CryptoMarket from "./CryptoMarket";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import JoinSection from "./JoinSection";
import Navigation from "./Navigation";

export default function Main() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <CryptoMarket />
      <ChooseUs />
      <JoinSection />
      <FooterSection />
    </div>
  );
}
