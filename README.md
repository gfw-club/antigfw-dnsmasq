# antigfw-dnsmasq
dnsmasq config that helps you bypass gfw

## How to use

* modify domainlist.txt if you need to add extra domains
* npm install
* node gen-config.js <dnsServer> <ipset>, for example `node gen-config.js 127.0.0.1#55553 fqlist`
* it will print the config file content to stdout