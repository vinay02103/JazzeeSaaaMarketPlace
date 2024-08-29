
# Jazzee SaaS Marketplace

Jazzee SaaS Marketplace is a web-based platform designed to help mid to large enterprises easily acquire or replace SaaS products through a Dutch reverse auction process. Buyers can review curated lists of SaaS products, select their top 3 choices, and solicit competitive quotes from vendors, ensuring they receive the best possible pricing.


## Features

- Product Selection: Browse through a curated list of SaaS products across various categories.
 - Dutch Reverse Auction: Start a Dutch reverse auction to solicit quotes from your top 3 selected vendors.
- Simulated Vendor Responses: Automatically simulate vendor responses with price quotes based on initial product pricing.
- Auction Results: View and compare the final prices offered by the selected vendors.




## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Styling: CSS
- HTTP Client: Axios
- Version Control: Git
## Project Structure

```
jJazzeeSaaSMarketplace/
│
├── client/                    # Frontend
│   ├── public/                # Public assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── ProductList.js
│   │   │   ├── AuctionForm.js
│   │   │   ├── AuctionResult.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AuctionPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       ├── App.css
│   │       └── index.css
│   └── package.json
│
├── server/                    # Backend
│   ├── controllers/
│   │   ├── auctionController.js
│   │   ├── productController.js
│   ├── models/
│   │   ├── Auction.js
│   │   ├── Product.js
│   ├── routes/
│   │   ├── auctionRoutes.js
│   │   ├── productRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── server.js
│   └── package.json
│
└── README.md

```


## Installation

1.Clone the repository:
```bash
git clone https://github.com/vinay02103/JazzeeSaaaMarketPlace/tree/master.git

```
2.Navigate to the Client directory and run:
 ```bash
npm install

```
3.Navigate to the server directory and run:

```bash
 npm install

```
4.Set Up MongoDB:

- Make sure MongoDB is installed and running on your machine or configure a cloud-based MongoDB instance.
- Create a .env file in the server directory and add your MongoDB connection string
```bash
MONGO_URI=mongodb+srv://vekkulurivinay9390:LVKtqXRfQtad6zN5@auction.jrsgm.mongodb.net/?retryWrites=true&w=majority&appName=auction


```
4.Run the Application:

- Start the server:
```bash
 nodemon server.js

```
- Start the client:
```bash
  npm  start

```

    
## API Endpoints
- Get Products:

   - Endpoint: GET /api/products
    - Description: Retrieves the list of available products in the marketplace.
- Start Auction:

    - Endpoint: POST /api/auction
    - Description: Starts a Dutch reverse auction with selected products and budget. Returns the auction results with final prices.
## Assumptions

- Implement real-time auction updates using WebSockets.
- Add user authentication and account management.
- Integrate with real vendor APIs for live pricing and negotiations.
- Enhance the UI with more detailed product and vendor information
