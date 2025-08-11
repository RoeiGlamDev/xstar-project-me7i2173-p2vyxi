import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application.
 * This module includes various helper functions tailored for 
 * the luxury cosmetics industry, ensuring a seamless and elegant 
 * user experience.
 *
 * @module utils
 */

/ 
 * Interface for product details in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/ 
 * Interface for customer information. 
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

/
 * A function to format prices in a luxury context.
 * Ensures prices are displayed with a currency symbol and 
 * formatted to two decimal places.
 *
 * @param price - The price to format.
 * @returns A string representing the formatted price.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * A function to create a unique identifier for a cosmetic product.
 * This ID can be useful for database entries or when creating 
 * a shopping cart system.
 *
 * @param base - The base string to create a unique ID from.
 * @returns A unique identifier string.
 */
export function createUniqueId(base: string): string {
    return ${base}-${Date.now()};
}

/
 * A utility function to format dates in a luxury-friendly manner.
 * This is particularly useful for displaying product release dates 
 * or promotional events.
 *
 * @param date - The date to format.
 * @returns A string representing the formatted date.
 */
export function formatDate(date: Date): string {
    return format(date, 'MMMM dd, yyyy');
}

/
 * Generate a color theme for luxury LRP cosmetics.
 * This function returns the primary colors used throughout the 
 * luxury LRP cosmetics brand.
 *
 * @returns An object containing the primary colors.
 */
export function getColorTheme() {
    return {
        primary: '#FFA500', // Orange
        secondary: '#FFFFFF', // White
    };
}

/
 * Function to validate customer email addresses.
 * Ensures that the email provided adheres to standard 
 * formatting rules.
 *
 * @param email - The email address to validate.
 * @returns A boolean indicating whether the email is valid.
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/
 * A function to check if a product is in stock based on its ID.
 * This is a placeholder logic that should connect to the actual 
 * inventory system in a complete application.
 *
 * @param productId - The ID of the product to check.
 * @returns A boolean indicating if the product is in stock.
 */
export function isProductInStock(productId: string): boolean {
    // Placeholder logic, in a real scenario this would query the inventory
    const inStockProducts = ['product-1', 'product-2', 'product-3'];
    return inStockProducts.includes(productId);
}

/
 * Exports all utility functions for use in the luxury LRP cosmetics 
 * application.
 */
export default {
    formatPrice,
    createUniqueId,
    formatDate,
    getColorTheme,
    validateEmail,
    isProductInStock,
};