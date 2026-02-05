import { getPrices } from "@/lib/getPrices";
import PriceTable from "@/components/PriceTable";
import { notFound } from "next/navigation";
type PageProps = {
  params: {
    model: string;
  };
};

export default async function Page({ params }: PageProps) {
  const prices = await getPrices(params.model);

  if (!prices || prices.length === 0) {
    notFound();
  }

  const maxPrice = Math.max(...prices.map((p) => p.price));

  return (
    <main>
      <h1>{params.model} 買取価格</h1>

      <p>
        {params.model} の現在の買取価格一覧です。 最大買取価格は
        <strong> ¥{maxPrice.toLocaleString()} </strong>
        です。
      </p>

      <PriceTable prices={prices} />
    </main>
  );
}
