'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useFestive } from '@/context/FestiveContext';

// Dynamic imports with ssr: false for zero impact on initial paint and Core Web Vitals
const HangingLanterns = dynamic(
  () => import('./HangingLanterns').then((m) => m.HangingLanterns),
  { ssr: false }
);

const FallingPetals = dynamic(
  () => import('./FallingPetals').then((m) => m.FallingPetals),
  { ssr: false }
);

const FloatingDiyas = dynamic(
  () => import('./FloatingDiyas').then((m) => m.FloatingDiyas),
  { ssr: false }
);

const HoliColors = dynamic(
  () => import('./extras/HoliColors').then((m) => m.HoliColors),
  { ssr: false }
);

const ChristmasSnow = dynamic(
  () => import('./extras/ChristmasSnow').then((m) => m.ChristmasSnow),
  { ssr: false }
);

const NewYearConfetti = dynamic(
  () => import('./extras/NewYearConfetti').then((m) => m.NewYearConfetti),
  { ssr: false }
);

const TricolorBunting = dynamic(
  () => import('./extras/TricolorBunting').then((m) => m.TricolorBunting),
  { ssr: false }
);

const EidCrescentStars = dynamic(
  () => import('./extras/EidCrescentStars').then((m) => m.EidCrescentStars),
  { ssr: false }
);

const SankrantiKites = dynamic(
  () => import('./extras/SankrantiKites').then((m) => m.SankrantiKites),
  { ssr: false }
);

const GreetingPopup = dynamic(
  () => import('./GreetingPopup').then((m) => m.GreetingPopup),
  { ssr: false }
);

const FestiveToggleSwitch = dynamic(
  () => import('./FestiveToggleSwitch').then((m) => m.FestiveToggleSwitch),
  { ssr: false }
);

export const FestiveEngine: React.FC = () => {
  const { activeFestival, isFestiveActive } = useFestive();

  if (!isFestiveActive || !activeFestival) {
    // Still render visitor toggle switch so user can turn back on if desired
    return <FestiveToggleSwitch variant="floating" />;
  }

  const { decorations } = activeFestival;

  return (
    <>
      {/* 1. Hanging Lanterns (Navratri, Diwali, Eid, Ganesh) */}
      {decorations.includes('hangingLanterns') && <HangingLanterns />}

      {/* 2. Falling Petals Particle Canvas */}
      {decorations.includes('fallingPetals') && <FallingPetals />}

      {/* 3. Floating Diyas */}
      {decorations.includes('floatingDiyas') && <FloatingDiyas />}

      {/* 4. Holi Colors Blobs */}
      {decorations.includes('holiColors') && <HoliColors />}

      {/* 5. Christmas Snowfall */}
      {decorations.includes('christmasSnow') && <ChristmasSnow />}

      {/* 6. New Year Confetti */}
      {decorations.includes('newYearConfetti') && <NewYearConfetti />}

      {/* 7. Republic / Independence / Dussehra Tricolor Bunting */}
      {decorations.includes('tricolorBunting') && <TricolorBunting />}

      {/* 8. Eid Crescent & Stars */}
      {decorations.includes('eidCrescentStars') && <EidCrescentStars />}

      {/* 9. Sankranti Flying Kites */}
      {decorations.includes('sankrantiKites') && <SankrantiKites />}

      {/* 10. Greeting Popup on First Visit of Day */}
      <GreetingPopup />

      {/* 11. Visitor Festive ON/OFF Toggle Switch */}
      <FestiveToggleSwitch variant="floating" />
    </>
  );
};
