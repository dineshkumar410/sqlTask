-- Create a new database called 'ecommerce'
CREATE DATABASE ecommerce;

-- Switch to the 'ecommerce' database to perform operations on it
USE ecommerce;

-- Create a new table called customers and mentioned column names
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(100),                  
    email VARCHAR(100),                 
    address VARCHAR(255)                
);

-- Create a new table called orders and mentioned column names
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    customer_id INT,                    
    order_date DATE,                    
    total_amount DECIMAL(10, 2),        
    FOREIGN KEY (customer_id) REFERENCES customers(id) 
);

-- Create a new table called product and mentioned column names
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100),                  
    price DECIMAL(10, 2),              
    description TEXT                   
);

-- 9. Normalize the database by creating a separate table for order items and updating the orders table to reference the order_items table.
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    order_id INT,                       
    product_id INT,                     
    quantity INT,                       
    price DECIMAL(10, 2),               
    FOREIGN KEY (order_id) REFERENCES orders(id),   
    FOREIGN KEY (product_id) REFERENCES products(id) 
);
-- In this table order id and product id is refrenced from it's respective tables 

-- Inserting few entries into the customers table
INSERT INTO customers (name, email, address) VALUES
('Dinesh', 'dinesh@example.com', '123 Street'),
('Kumar', 'kumar@example.com', '456 Street'),
('John', 'john@example.com', '789 Street'),
('Ram', 'ram@example.com', '101 Street'),
('Faran', 'faran@example.com', '202 Road'),
('Naresh', 'naresh@example.com', '303 Lane'),
('David', 'david@example.com', '404 Street'),
('Suresh', 'suresh@example.com', '505 Avenue'),
('Shyam', 'shyam@example.com', '606 Street'),
('Shiva', 'shiva@example.com', '707 Lane');

-- Inserting few entries into the products table
INSERT INTO products (name, price, description) VALUES
('Product A', 30.00, 'A high-quality product.'),
('Product B', 50.00, 'A premium product with great features.'),
('Product C', 40.00, 'A mid-range product.'),
('Product D', 60.00, 'A top-tier product.'),
('Product E', 25.00, 'An affordable product.'),
('Product F', 100.00, 'The most expensive product.');

-- Inserting few entries into the orders table
INSERT INTO orders (customer_id, order_date, total_amount) VALUES
(1, '2024-09-01', 60.00),
(2, '2024-09-02', 100.00),
(3, '2024-09-03', 150.00),
(4, '2024-09-04', 70.00),
(5, '2024-09-05', 200.00),
(6, '2024-09-06', 85.00),
(7, '2024-09-07', 110.00),
(8, '2024-09-08', 95.00),
(9, '2024-09-09', 60.00),
(10, '2024-09-10', 250.00),
(1, '2024-10-01', 120.00),
(2, '2024-10-02', 175.00),
(3, '2024-10-03', 90.00),
(4, '2024-10-04', 190.00),
(5, '2024-10-05', 140.00);

-- Inserting few entries into the order_items table
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 2, 30.00),   
(1, 3, 1, 40.00),   
(2, 2, 2, 50.00),  
(3, 5, 6, 25.00),   
(3, 6, 1, 100.00);  

-- 1. Retrieve all customers who have placed an order in the last 30 days.
SELECT DISTINCT customers.name 
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE orders.order_date >= CURDATE() - INTERVAL 30 DAY; 
-- CURDATE() gets the current date, and INTERVAL 30 DAY filters orders within the last 30 days

-- 2. Get the total amount of all orders placed by each customer.
SELECT customers.name, SUM(orders.total_amount) AS total_spent
FROM customers
JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.name; 
-- SUM() function calculates the total order amount for each customer, grouped by customer name

-- 3. Update the price of Product C to 45.00.
UPDATE products
SET price = 45.00
WHERE name = 'Product C'; 
-- Only the product with the name 'Product C' will have its price updated

-- 4. Add a new column discount to the products table.
ALTER TABLE products
ADD discount DECIMAL(5, 2) DEFAULT 0.00; 
-- New 'discount' column with a default value of 0.00

-- 5. Retrieve the top 3 products with the highest price.
SELECT name, price 
FROM products
ORDER BY price DESC
LIMIT 3; 
-- Products are ordered by price in descending order, and the LIMIT clause returns the top 3

-- 6. Get the names of customers who have ordered Product A.
SELECT DISTINCT customers.name
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN order_items ON orders.id = order_items.order_id
JOIN products ON order_items.product_id = products.id
WHERE products.name = 'Product A'; 
-- Joins the customers, orders, order_items, and products tables to find customers who ordered Product A

-- 7. Join the orders and customers tables to retrieve the customer's name and order date for each order.
SELECT customers.name, orders.order_date
FROM customers
JOIN orders ON customers.id = orders.customer_id; 
-- Joins the customers and orders tables to fetch customer names and the corresponding order dates

-- 8. Retrieve the orders with a total amount greater than 150.00.
SELECT * 
FROM orders
WHERE total_amount > 150.00; 
-- Only orders with a total amount greater than 150.00 are selected



-- 10. Retrieve the average total of all orders.
SELECT AVG(total_amount) AS average_order_total
FROM orders; 
-- AVG() function calculates the average total order amount

DROP DATABASE ecommerce 