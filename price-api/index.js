import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-10-01",
  useCdn: true,
});

const gradeFactor = {
  A: 1.0,
  B: 0.9,
  C: 0.8,
  D: 0.7,
};

app.post("/price", async (req, res) => {
  const { modelSlug, capacity, grade } = req.body;

  try {
    const data = await sanity.fetch(
      `*[_type=="price" && capacity==$capacity && model->slug.current==$slug][0]{
        price
      }`,
      { capacity, slug: modelSlug }
    );

    if (!data) {
      return res.status(404).json({ error: "price not found" });
    }

    const factor = gradeFactor[grade] ?? 1;
    const price = Math.floor(data.price * factor);

    res.json({
      price: data.price,
      grade,
      price,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "internal error" });
  }
});

app.listen(3001, () => {
  console.log("Price API running on http://localhost:3001");
});

console.log("TOKEN:", process.env.SANITY_TOKEN);
