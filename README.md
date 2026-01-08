# E-Commerce_Store (E-commerce store web application)
A full-stack e-commerce web application built with Node.js, MongoDB, Redis, and Stripe. It features user authentication, product management, shopping cart functionality, secure payments, coupon discounts, and analytics for tracking sales and revenue. 

## 📌 Features
Authentication

* User registration (/signup)
* User login (/login)
* Secure password hashing and JWT-based authentication
* Refresh token management via cookies and Redis
* Logout and token revocation
* Get user profile (/profile)

Products

* List all products (/products)
* Get featured products (/products/featured)
* Get recommended products (/products/recommended)
* Get products by category (/products/category/:category)
* Create, delete, and toggle featured products (Admin)
* Cloudinary integration for image upload

Shopping Cart

* Add to cart (/cart/add)
* Remove items from cart or clear cart (/cart/remove)
* Update product quantity in cart (/cart/update/:id)
* View cart items (/cart)

Payments

* Stripe Checkout session (/payment/checkout)
* Apply coupon codes
* Automatic coupon generation for purchases over $200
* Handle payment success and order creation (/payment/success)

Coupons

* Get active coupon (/coupon)
* Validate coupon (/coupon/validate)

Analytics

* Total users, products, sales, and revenue (/analytics)
* Daily sales and revenue for a given date range (/analytics/daily)

## 🛠️ Technologies Used

* Backend: Node.js, Express.js
* Database: MongoDB, Redis
* Authentication: JWT, bcrypt
* Payments: Stripe API

## 🚀 Installation

#### Prerequisites

* Node.js >= 18
* MongoDB
* Redis
* Stripe account for payments
* Cloudinary account for image uploads
* Media Uploads: Cloudinary
* Environment Variables: dotenv
* Testing / Debugging: Postman

## Steps

```
git clone https://github.com/merinpriyasha/E-Commerce_Store.git
cd Appointment-Schedule-App
npm install
cp .env.example .env
# configure environment variables in .env
npm run dev
```

## 📡 API Endpoints

## Authentication

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| POST   | /signup          | Register a new user           |
| POST   | /login           | Login user                    |
| POST   | /logout          | Logout user                   |
| GET    | /profile         | Get logged-in user info       |
| POST   | /refresh-token   | Refresh access token          |

## Products

| Method | Endpoint                     | Description                   |
|--------|------------------------------|-------------------------------|
| GET	   | /products	                  | Get all products              |
| GET	   | /products/featured           | Get featured products         |
| GET	   | /products/recommended        | Get recommended products      |
| GET	   | /products/category/:category | Get products by category      |
| POST	 | /products	                  | Create product (Admin)        |
| DELETE | /products/:id	              | Delete product (Admin)        |
| PATCH	 | /products/:id/featured	      | Toggle featured (Admin)       |

### Cart
| Method | Endpoint          | Description                             |
|--------|-------------------|-----------------------------------------|
| GET	   | /cart	           | Get cart items                          |
| POST	 | /cart/add	       | Add product to cart                     |
| DELETE | /cart/remove	     | Remove item or clear cart               |
| PATCH	 | /cart/update/:id	 | Update quantity of product in cart      |

### Payments
| Method | Endpoint           | Description                                 |
|--------|--------------------|---------------------------------------------|
| POST	 | /payment/checkout	| Create Stripe checkout session              |
| POST	 | /payment/success	  | Handle successful payment and create order  |

### Coupons
| Method | Endpoint           | Description                                 |
|--------|--------------------|---------------------------------------------|
| GET	   | /coupon	          | Get active coupon for user                  |
| POST	 | /coupon/validate	  | Validate coupon code                        |

## 🖼 Screenshots

<img width="1756" height="863" alt="signup" src="https://github.com/user-attachments/assets/7d5cc8ae-7b3d-41d0-b1e4-5db777ff554c" />

<img width="1732" height="865" alt="home" src="https://github.com/user-attachments/assets/94d2e9eb-8ec7-4ee6-98db-23c0b8f8ddf0" />

<img width="1796" height="857" alt="admin-dashboard" src="https://github.com/user-attachments/assets/aa0d3e70-ecc4-45ed-b7db-0e3ed177aeb7" />

<img width="1728" height="852" alt="add product page" src="https://github.com/user-attachments/assets/8d14ef41-55ca-4b77-a5b4-a33e2ced5369" />

<img width="1726" height="748" alt="product-list page" src="https://github.com/user-attachments/assets/e7045a7f-82f0-493e-87a2-d36fe326f52c" />

<img width="1792" height="815" alt="payment page" src="https://github.com/user-attachments/assets/4e8f0294-4b00-45c8-bd84-5442caef5094" />

<img width="1401" height="837" alt="online payment" src="https://github.com/user-attachments/assets/258f2579-ed0e-43f6-b2e9-2e4604e0e0f7" />

