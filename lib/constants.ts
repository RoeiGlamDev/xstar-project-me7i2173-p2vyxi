export const BRAND_NAME = "luxury LRP cosmetics";
export const PRIMARY_COLOR = "#FFA500"; // orange
export const SECONDARY_COLOR = "#FFFFFF"; // white

/
 * Configuration constants for luxury LRP cosmetics application.
 * This file contains essential brand-specific constants
 * and settings that define the application's behavior and look.
 */

/
 * Interface for Brand Information
 */
export interface BrandInfo {
    name: string;
    tagline: string;
    description: string;
    colorPalette: string[];
}

/
 * Returns the brand information for luxury LRP cosmetics
 * @returns {BrandInfo} The brand information object
 */
export const getBrandInfo = (): BrandInfo => {
    return {
        name: BRAND_NAME,
        tagline: "Indulge in Elegance",
        description: "Discover the epitome of luxury in cosmetics with luxury LRP cosmetics. Our products embody sophistication, quality, and the essence of beauty.",
        colorPalette: [PRIMARY_COLOR, SECONDARY_COLOR]
    };
};

/
 * Interface for Product
 */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
}

/
 * Example of a product catalog for luxury LRP cosmetics
 */
export const productCatalog: Product[] = [
    {
        id: 1,
        name: "Radiant Glow Foundation",
        description: "Achieve a flawless complexion with our Radiant Glow Foundation, crafted for a luxurious finish.",
        price: 75.00,
        category: "Face",
        images: ["images/radiant-glow-foundation-1.jpg", "images/radiant-glow-foundation-2.jpg"]
    },
    {
        id: 2,
        name: "Silken Luxe Lipstick",
        description: "Experience the opulence of our Silken Luxe Lipstick, delivering rich color and hydration.",
        price: 45.00,
        category: "Lips",
        images: ["images/silken-luxe-lipstick-1.jpg", "images/silken-luxe-lipstick-2.jpg"]
    }
];

/
 * Function to get all products
 * @returns {Product[]} Array of products in the catalog
 */
export const getAllProducts = (): Product[] => {
    return productCatalog;
};