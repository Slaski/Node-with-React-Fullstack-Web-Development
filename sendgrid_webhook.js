const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'ipashdionwdinaciansdjwpdja' }, function(
  err,
  tunnel
) {
  console.log('LT running');
});
