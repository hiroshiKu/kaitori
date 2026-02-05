type Price = {
  grade: string;
  price: number;
};

export default function PriceTable({ prices }: { prices: Price[] }) {
  return (
    <section>
      <h2>グレード別 買取価格</h2>

      <table>
        <thead>
          <tr>
            <th>グレード</th>
            <th>買取価格</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((p) => (
            <tr key={p.grade}>
              <td>{p.grade}ランク</td>
              <td>¥{p.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
