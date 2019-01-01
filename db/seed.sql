DROP DATABASE IF EXISTS life_hack;
CREATE DATABASE life_hack;
\c life_hack

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    password VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    image VARCHAR,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users
);



CREATE TABLE hacks(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description VARCHAR,
    media VARCHAR,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users
);

-- INSERT INTO users (name, password, email) VALUES ('May', 'hfjghkngflfg', 'may@gmail.com'),
-- ('jeje', 'jejejeje', 'jeje@gmail.com');

-- INSERT INTO categories (title, image , user_id) VALUES 
-- ('tech', 'https://i2-prod.manchestereveningnews.co.uk/incoming/article14379834.ece/ALTERNATES/s810/050318_LRR_MEN_WomenTech.jpg', 1),
-- ('food', 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 2);

-- INSERT INTO hacks (title, description, media, category_id, user_id) VALUES ('clean desktop', 'easy way to clean your desktop', 'https://i2-prod.manchestereveningnews.co.uk/incoming/article14379834.ece/ALTERNATES/s810/050318_LRR_MEN_WomenTech.jpg',
-- 1, 2),
-- ('wash vegi', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 1, 1),
-- ('clean desktop', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 2, 1),
-- ('wash vegi', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 2, 2);