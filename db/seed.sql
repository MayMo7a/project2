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

-- INSERT INTO categories (title, image, user_id) VALUES 
-- ('tech', 'https://tradeandinvest.wales/sites/default/files/styles/standard_75_desktop_retina/public/tech_sector_image_1428x952px_2.jpg?itok=StuRrC0i', 1),
-- ('food', 'https://tradeandinvest.wales/sites/default/files/styles/standard_75_desktop_retina/public/tech_sector_image_1428x952px_2.jpg?itok=StuRrC0i', 1);


