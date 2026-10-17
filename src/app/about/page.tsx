import React from 'react';
import type { Metadata } from 'next';
import { AboutContent } from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | The Brandies Story & Growth Mission',
  description:
    'Learn how Brandies Media grew from a boutique e-commerce consulting studio in 2019 to scaling 500+ D2C and marketplace brands across India.',
};

export default function AboutPage() {
  return <AboutContent />;
}
