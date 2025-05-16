// components/ToursGrid.tsx
"use client";

import React, { useMemo } from "react";
import { Tabs } from "antd";
import ToursTabPanel from "./ToursTabPanel";
import { tours, type TourTab } from "@/data/tours";

/* tab captions */
const TAB_TITLES: Record<TourTab, string> = {
  special: "Special Deals",
  popular: "Popular",
  recommended: "Recommendation",
  best: "Best Price",
  inner: "Inner Destinations", // ← new!
};

export default function ToursGrid() {
  const tabs = useMemo(
    () =>
      (Object.keys(TAB_TITLES) as TourTab[]).map((tabKey) => ({
        key: tabKey,
        label: TAB_TITLES[tabKey],
        children: <ToursTabPanel tab={tabKey} allTours={tours} />,
      })),
    []
  );

  return (
    <section className="my-4" id="packages">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl sm:text-4xl font-extrabold text-[#222]">
          The <span className="text-[#FA7436]">best place</span> for vacation
        </h2>

        <Tabs
          items={tabs}
          defaultActiveKey="special"
          centered
          animated={{ inkBar: true, tabPane: false }}
          className="[&_.ant-tabs-ink-bar]:!bg-[#FA7436]"
        />
      </div>
    </section>
  );
}
