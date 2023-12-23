# URL Shortening API

Welcome to the URL Shortening API! This API allows users to register, log in, log out, and shorten URLs.

## Table of Contents

- [Endpoints](#endpoints)
  - [User Registration](#user-registration)
  - [User Sign In](#user-sign-in)
  - [Logout](#logout)
  - [URL Shortening](#url-shortening)
  - [Redirection to Original URL](#redirection-to-original-url)
- [User Registration](#user-registration-details)
- [User Sign In](#user-sign-in-details)
- [URL Shortening](#url-shortening-details)
- [Hosted Link](#hosted-link)

## Endpoints

### User Registration

- **Route:** `/register`
- **Method:** `POST`
- **Handler:** `register`
- **Description:** Registers a new user.
- **Request Body:**
  - `name`: User's name
  - `email`: User's email
  - `password`: User's password

### User Sign In

- **Route:** `/login`
- **Method:** `POST`
- **Handler:** `loginMiddleware`
- **Description:** Logs in an existing user.
- **Request Body:**
  - `email`: User's email
  - `password`: User's password

### Logout

- **Route:** `/logout`
- **Method:** `GET`
- **Handler:** `logoutUser`
- **Description:** Logs out the currently authenticated user.

### URL Shortening

- **Route:** `/urlShort`
- **Method:** `POST`
- **Handler:** `urlShortener`
- **Description:** Shortens a provided URL.
- **Request Body:**
  - `url`: Original URL to be shortened

### Redirection to Original URL

- **Route:** `/shorty/:id`
- **Method:** `GET`
- **Handler:** `redirectFunc`
- **Description:** Redirects to the original URL for a given shortened ID.

## User Registration Details

For user registration, the following details are required in the request body:

- `name`: User's name
- `email`: User's email
- `password`: User's password

## User Sign In Details

For user sign-in, the following details are required in the request body:

- `email`: User's email
- `password`: User's password

## URL Shortening Details

For URL shortening, the following detail is required in the request body:

- `url`: Original URL to be shortened

## Hosted Link

This API is hosted at [https://url-shortener-o0x3.onrender.com](https://url-shortener-o0x3.onrender.com). Feel free to check it out!

