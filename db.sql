-- for help             \?
-- list database's      \l
-- create database      CREATE DATABASE database_name
-- list tables          \d
-- output table         \d table_name
-- change current db    \c
-- add column           ALTER TABLE table_name ADD COLUMN featured BOOLEAN
--remove column         ALTER TABLE table_name DROP COLUMN featured

/* create table 
create table restaurant (
    id int,
    name varchar(50),
    location varchar(50),
    price_range int
);
*/
INSERT INTO restaurant (id, name, location, price_range) values (124, 'pizza hut', 'wyoming', 2)

create table restaurant (
    id bigserial NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurant (name, location, price_range) values ('pizza hut', 'wyoming', 2)
