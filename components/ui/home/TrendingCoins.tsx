import React from "react";
import { fetcher } from "@/lib/coingecko.action";
import DataTable from "@/app/components/DataTable";
import { TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
const TrendingCoins = async () => {
  const trendingCoins = await fetcher<{ coins: TrendingCoin[] }>(
    "/search/trending",
    undefined,
    300
  );
  const dummyTrendingCoins: TrendingCoin[] = [
    {
      item: {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        market_cap_rank: 1,
        thumb: "/logo.svg",
        large: "/logo.svg",
        data: {
          price: 89113.0,
          price_change_percentage_24h: {
            usd: 2.45,
          },
        },
      },
    },
    {
      item: {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        market_cap_rank: 2,
        thumb: "/logo.svg",
        large: "/logo.svg",
        data: {
          price: 3245.75,
          price_change_percentage_24h: {
            usd: -1.32,
          },
        },
      },
    },
    {
      item: {
        id: "binancecoin",
        name: "Binance Coin",
        symbol: "BNB",
        market_cap_rank: 3,
        thumb: "/logo.svg",
        large: "/logo.svg",
        data: {
          price: 612.5,
          price_change_percentage_24h: {
            usd: 0.87,
          },
        },
      },
    },
    {
      item: {
        id: "cardano",
        name: "Cardano",
        symbol: "ADA",
        market_cap_rank: 4,
        thumb: "/logo.svg",
        large: "/logo.svg",
        data: {
          price: 1.08,
          price_change_percentage_24h: {
            usd: 5.12,
          },
        },
      },
    },
    {
      item: {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        market_cap_rank: 5,
        thumb: "/logo.svg",
        large: "/logo.svg",
        data: {
          price: 192.45,
          price_change_percentage_24h: {
            usd: 3.78,
          },
        },
      },
    },
  ];

  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: (coin) => {
        const item = coin.item;
        return (
          <Link href={`/coin/${item.id}`}>
            <Image src={item.large} alt={item.name} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: "24h Change",
      cellClassName: "name-cell",
      cell: (coin) => {
        const item = coin.item;
        const isTrandingUp = item.data.price_change_percentage_24h.usd > 0;
        return (
          <div
            className={cn(
              "price-change",
              isTrandingUp ? "text-green-500" : "text-red-500"
            )}
          >
            <p>
              {isTrandingUp ? (
                <TrendingUp width={16} height={16} />
              ) : (
                <TrendingDown width={16} height={16} />
              )}
            </p>
          </div>
        );
      },
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: (coin) => `$${coin.item.data.price.toFixed(2)}`,
    },
  ];
  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <div id="trending-coins">
        <DataTable
          columns={columns}
          data={trendingCoins.coins.slice(0, 6) || []}
          rowKey={(coin) => coin.item.id}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};

export default TrendingCoins;
