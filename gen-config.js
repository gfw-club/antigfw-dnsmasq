var program = require('commander')

program.version('0.0.1')
  .arguments('<dnsServer> <ipset>')
  .action(function (dnsServer, ipset) {
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('domainlist.txt')
    })

    lineReader.on('line', function (ln) {
      if (ln.startsWith('#')) {
        console.log(ln)
      } else if (ln) {
        console.log('server=/' + ln + '/' + dnsServer)
        console.log('ipset=/' + ln + '/' + ipset)
      }
    })
  }).on('--help', function() {
    console.log('  Examples:');
    console.log('    $ node gen-config.js 127.0.0.1#55553 fqlist')
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

