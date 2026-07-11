import WelcomeSection from "@/components/WelcomeSection";
import Featured from "@/components/Featured";
import DailyOffer from "@/components/DailyOffer";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="">
        <WelcomeSection />
        <Featured />
        <DailyOffer />
    </main>
  );
}
