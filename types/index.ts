import { ProductCategory, User } from './models';

/
 * Interface representing a Product for luxury LRP cosmetics.
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} description - A detailed description of the product.
 * @property {number} price - The price of the product in USD.
 * @property {string} imageUrl - The URL to the product's image.
 * @property {ProductCategory} category - The category to which the product belongs.
 * @property {boolean} isFeatured - Indicates if the product is featured on the website.
 * @property {number} rating - The average customer rating for the product.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: ProductCategory;
    isFeatured: boolean;
    rating: number;
}

/
 * Interface representing a Review for luxury LRP cosmetics products.
 * @property {string} id - Unique identifier for the review.
 * @property {string} productId - The unique identifier of the product being reviewed.
 * @property {User} user - The user who wrote the review.
 * @property {string} comment - The text of the review.
 * @property {number} rating - The rating given by the user (1-5).
 */
export interface Review {
    id: string;
    productId: string;
    user: User;
    comment: string;
    rating: number;
}

/
 * Interface representing the User for luxury LRP cosmetics.
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password for user authentication.
 */
export interface User {
    id: string;
    name: string;
    email: string;
    password: string; // In a real application, this should be hashed.
}

/
 * Enum representing different product categories for luxury LRP cosmetics.
 */
export enum ProductCategory {
    SKINCARE = 'Skincare',
    MAKEUP = 'Makeup',
    FRAGRANCE = 'Fragrance',
    HAIRCARE = 'Haircare',
}

/
 * Interface representing the overall state of the luxury LRP cosmetics application.
 * @property {Product[]} products - The list of products available in the store.
 * @property {User | null} currentUser - The currently logged-in user, or null if not logged in.
 * @property {Review[]} reviews - The list of reviews for the products.
 */
export interface AppState {
    products: Product[];
    currentUser: User | null;
    reviews: Review[];
}