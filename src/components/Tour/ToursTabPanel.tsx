"use client";
import React, { useMemo } from "react";
import TourCard from "./TourCard";
import type { Tour, TourTab } from "@/data/tours";

interface Props {
  tab: TourTab;
  allTours: Tour[];
}

const ToursTabPanel = React.memo(({ tab, allTours }: Props) => {
  const filtered = useMemo(
    () => allTours.filter((t) => t.tab === tab),
    [allTours, tab]
  );

  return (
    <div className="my-20 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {filtered.map((t) => (
        <TourCard key={t.id} tour={t} />
      ))}
    </div>
  );
});
ToursTabPanel.displayName = "ToursTabPanel";
export default ToursTabPanel;
