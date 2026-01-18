import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { CommunitySection } from '@/components/sections/CommunitySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <CommunitySection />
    </main>
  );
}
