export function formatPrice(price: string | number): string {
   const priceNumber = typeof price === "string" ? parseFloat(price) : price;
   return `R$ ${priceNumber.toFixed(2).replace(".", ",")}`;
}
