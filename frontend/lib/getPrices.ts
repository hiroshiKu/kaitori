import { client } from "@/lib/sanityClient";

export type PriceRow = {
  grade: string;
  price: number;
};

export async function getPrices(modelSlug: string, capacity: string = "128GB") {
  const query = `
    *[
      _type=="price" &&
      model->slug.current==$slug &&
      capacity==$capacity
    ]
    | order(grade->order asc){
      "grade": grade->code,
      "price": price
    }
  `;

  return client.fetch<PriceRow[]>(query, {
    slug: modelSlug, // ← ★ これが無いと今のエラーになる
    capacity,
  });
}
