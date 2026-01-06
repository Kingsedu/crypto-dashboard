import React from "react";
import DataTable from "@/app/components/DataTable";

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image animate-pulse bg-dark-400" />
        <div className="info">
          <div className="header-line-sm animate-pulse bg-dark-400" />
          <div className="header-line-lg animate-pulse bg-dark-400" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex gap-2 mb-4">
          <div className="period-button-skeleton animate-pulse bg-dark-400" />
          <div className="period-button-skeleton animate-pulse bg-dark-400" />
          <div className="period-button-skeleton animate-pulse bg-dark-400" />
        </div>
        <div className="chart">
          <div className="chart-skeleton animate-pulse bg-dark-400" />
        </div>
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  // Create skeleton rows for the trending coins table
  const skeletonRows = Array.from({ length: 6 }).map((_, i) => ({
    item: {
      id: `skeleton-${i}`,
      name: "",
      symbol: "",
      market_cap_rank: 0,
      thumb: "",
      large: "",
      data: {
        price: 0,
        price_change_percentage_24h: {
          usd: 0,
        },
      },
    },
  })) as TrendingCoin[];

  const skeletonColumns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <div className="name-image animate-pulse bg-dark-400" />
          <div className="name-line animate-pulse bg-dark-400" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: () => (
        <div className="flex items-center gap-1">
          <div className="change-icon animate-pulse bg-dark-400" />
          <div className="change-line animate-pulse bg-dark-400" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <div className="price-line animate-pulse bg-dark-400" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div id="trending-coins">
        <DataTable
          columns={skeletonColumns}
          data={skeletonRows}
          rowKey={(_, index) => `skeleton-row-${index}`}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
