-- V1__initial_schema.sql

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE user_role AS ENUM ('user', 'manager', 'student', 'teacher', 'admin');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  password VARCHAR(255),
  role user_role DEFAULT 'user',
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT current_timestamp,
  timezone VARCHAR(255) DEFAULT 'UTC'
);

-- Add index for user email
CREATE INDEX idx_users_email ON users (email);