CREATE DATABASE news_portal;
USE news_portal;

CREATE TABLE news(
    id_new INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tittle VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(tittle, news) VALUES ('Atraco', 'Atracaron a una persona en las fuerzas armadas')