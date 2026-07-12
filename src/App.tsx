/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Suspense, lazy } from 'react';
import { Hero } from "./components/Hero";

const Problem = lazy(() => import("./components/Problem").then(module => ({ default: module.Problem })));
const Solution = lazy(() => import("./components/Solution").then(module => ({ default: module.Solution })));
const Offer = lazy(() => import("./components/Offer").then(module => ({ default: module.Offer })));
const Closing = lazy(() => import("./components/Closing").then(module => ({ default: module.Closing })));
const FaqFooter = lazy(() => import("./components/FaqFooter").then(module => ({ default: module.FaqFooter })));

export default function App() {
  return (
    <main className="min-h-screen bg-brand-light">
      <Hero />
      <Suspense fallback={<div className="h-20 w-full bg-brand-light"></div>}>
        <Problem />
        <Solution />
        <Offer />
        <Closing />
        <FaqFooter />
      </Suspense>
    </main>
  );
}
