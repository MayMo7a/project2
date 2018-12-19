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

-- INSERT INTO categories (title, image) VALUES 
-- ('tech', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg'),
-- ('food', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg');

-- INSERT INTO hacks (title, description, media, category_id) VALUES ('clean desktop', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 1),
-- ('wash vegi', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 1),
-- ('clean desktop', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 2),
-- ('wash vegi', 'easy way to clean your desktop', 'https://www.sciencedaily.com/images/2018/04/180412141031_1_540x360.jpg',
-- 2);



