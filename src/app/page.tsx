import React from "react";
import Card from "@/components/Card/Card";
import { dashboardData } from "@/data/homeData";
import Chart from "@/components/Chart/Chart";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Dashboard data */}
        {dashboardData?.map((item) => (
          <React.Fragment key={item.id}>
            <Card data={item} />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4">
        <Chart />
      </div>
    </main>
  );
}
