import * as React from "react";
import { PiletApi } from "app-shell";
import { ProductPage } from "./ProductPage";

export function setup(app: PiletApi) {
  const exampleProducts = [
    {
      name: "MacBook Air",
      price: 120,
      description: "Product 1",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
      product_id: "id-1",
    },
    {
      name: "MacBook Pro",
      price: 300,
      description: "Product 2",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
      product_id: "id-2",
    },
  ];
  app.registerTile("Product", ({ piral }) => (
    <ProductPage
      productList={exampleProducts}
      BuyButton={({ item }) => (
        <piral.Extension name="buy-button" params={item} />
      )}
    />
  ));
}
