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
    <section className="mt-20 mb-24">
      {/* dashed plane-trail graphic */}
      <div className="mx-auto hidden h-40 w-full max-w-screen-xl md:block">
        <svg
          viewBox="0 0 1100 160"
          fill="none"
          stroke="#E5E5E5"
          strokeDasharray="4 6"
          className="h-full w-full"
        >
          <path d="M100 40 Q300 -20 500 40T900 40" />
          <path d="M-50 90 Q250 150 550 90T1050 90" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl sm:text-4xl font-extrabold text-[#222222]">
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
