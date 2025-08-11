import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'luxury LRP cosmetics',
  description: 'Experience the elegance and sophistication of luxury LRP cosmetics, where beauty meets luxury.',
  keywords: ['cosmetics', 'luxury LRP cosmetics', 'high-end beauty', 'luxury cosmetics'],
  authors: [{ name: 'luxury LRP cosmetics' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function