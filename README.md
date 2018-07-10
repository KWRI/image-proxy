# Image Proxy

A simple Express app for proxying images.

The code is just over 100 lines, making it easy to tailor to your needs.

## Getting Started

The URL structure is `/:url`. The `:url` parameter must be escaped/encoded.

## Features

Image proxy:

- Supports HTTP and HTTPS
- Follows 301 and 302 redirects
- Sets a maximum timeout for the remote server
- Handles complex MIME types like `image/jpeg; charset=utf-8`
- Optional whitelisting using regular expressions

HTTP server:

- No query string parameters (preferred by CloudFront)
- Adds a Cache-Control header

If you need more features, see [node-imageable](https://github.com/sdepold/node-imageable) and [node-imageable-server](https://github.com/dawanda/node-imageable-server).

### Environment variables

- `DELAY`: The timeout delay in milliseconds, after which the proxy will respond with a HTTP 504 Gateway Timeout server error. Default: `5000`
- `WHITELIST`: A comma-separated list of domains to whitelist, e.g. `.gov,facebook.com`, which will be transformed into the regular expressions `/\.gov$/` and `/facebook\.com$/`.
- `PORT`: If running the server, changes the port on which it listens. Default: `5000`

## Deployment

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

    git clone https://github.com/jpmckinney/image-proxy.git
    heroku apps:create
    heroku config:set NODE_ENV=production
    git push heroku master
    heroku apps:open

### AWS CloudFront

Create a distribution and set the "Origin Domain Name" to the domain name of your Heroku app.

## Testing

```bash
npm test
```

## Acknowledgements

This project is inspired by [node-connect-image-proxy](https://github.com/mysociety/node-connect-image-proxy).
