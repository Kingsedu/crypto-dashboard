import CoinOverview from "@/components/ui/home/CoinOverview";
import TrendingCoins from "@/components/ui/home/TrendingCoins";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/ui/home/fallback";
import React, { Suspense } from "react";

const Home = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full space-y-4 mt-7">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default Home;
/*
waterfall---> when data request is excuted one after the other,
in standard async and await function, if you have one await in front opf the other,it occurs one after the other,
*/
