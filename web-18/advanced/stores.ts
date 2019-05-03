import { Product } from "./Product";

type ProductFinder = (product: string) => Product | undefined;

export class CallbackStore {
  constructor(private productFinder: ProductFinder) {}
  getProductForName(
    productName: string,
    callback: (product: Product | undefined) => void
  ) {
    setTimeout(() => callback(this.productFinder(productName)), 100);
  }
}

export class PromiseStore {
  constructor(private productFinder: ProductFinder) {}
  getProductForName(productName: string) {
    return new Promise<Product>(resolve =>
      setTimeout(() => resolve(this.productFinder(productName)), 100)
    );
  }
}
