CREATE USER metajob WITH PASSWORD 'metajob' CREATEDB;
CREATE DATABASE metajob
    WITH 
    OWNER = metajob
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
