# Hello PhoneGap

A PhoneGap Hello World template

## Installation

Install phonegap:

    npm i -g phonegap

## Development

Create new application:

    phonegap create my-app

List available templates:

    phonegap template list

Start app locally:

    phonegap serve

## Configuration

### config.xml

Minimum SDK version supported on the target device:

```xml
<preference name="android-minSdkVersion" value="14" />
```

Wide open access:

```xml
<access origin="*" />
```

It is strongly encouraged that you restrict access to external resources in your application before releasing to production. For more information on whitelist configuration, see the [Cordova Whitelist Guide][cordova-whitelist-guide] and the [Cordova Whitelist Plugin documentation][cordova-plugin-whitelist].

### index.html

The default Content Security Policy (CSP) is open:

```xml
<meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *" />
```

You are strongly encouraged to use a more restrictive CSP in production.

A good starting point declaration might be:

```xml
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: 'unsafe-inline' https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *" />
```

For more information see the [section on CSP in the Cordova documentation][cordova-plugin-whitelist-csp]. Another good resource for generating a good CSP declaration is [CSP is Awesome][csp-is-awesome].


[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli
[cordova-app]: http://github.com/apache/cordova-app-hello-world
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com
