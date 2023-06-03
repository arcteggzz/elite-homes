# LOGIN ENDPOINT

## suggested URL "/auth"

## suggested METHOD:- "POST"

## Accepts:-

1. email address (Type: string)
2. password (Type: string)

## Returns:-

1. \_username (Type: string) //underscore-userName
2. accessToken (Type: string)
3. Link to user image (Type: string)
4. Secure jwt token a cookie. The referesh token is stored inside the cookie.

# REFRESH TOKEN ENDPOINT

## suggested URL "/auth/referesh"

## suggested METHOD:- "GET"

## Accepts:- NULL

## Returns:-

1. accessToken (Type: string)
   This accesstoken is the new one that can be used to access protected resources

NOTE:- The api should send back a status 403 error code if the accessToken has expired but the refresh token is still valid.
