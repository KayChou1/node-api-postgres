BEGIN;
 
SET client_encoding = 'LATIN1';
 
CREATE TABLE people (
    first VARCHAR (255),
    last VARCHAR (255),
    id serial PRIMARY KEY
);