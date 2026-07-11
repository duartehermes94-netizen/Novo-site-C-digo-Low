/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Offer } from "./components/Offer";
import { Closing } from "./components/Closing";
import { FaqFooter } from "./components/FaqFooter";

export default function App() {
  return (
    <main className="min-h-screen bg-brand-light">
      <Hero />
      <Problem />
      <Solution />
      <Offer />
      <Closing />
      <FaqFooter />
    </main>
  );
}
