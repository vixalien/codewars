// https://www.codewars.com/kata/556d120c7c58dacb9100008b/train/javascript

function ipv4Parser(ip, mask) {
  const ip_arr = ip.split(".").map((e) => parseInt(e));
  const mask_arr = mask.split(".").map((e) => parseInt(e));

  const host_arr = ip_arr.map((bits, i) => bits & mask_arr[i]);
  const network_arr = ip_arr.map((bits, i) => bits & ~mask_arr[i]);

  return [host_arr.join("."), network_arr.join(".")];
}

console.log(ipv4Parser("192.168.50.1", "255.255.255.0"));
console.log(ipv4Parser("192.168.50.129", "255.255.255.192")); // '192.168.50.128', '0.0.0.1'
console.log(ipv4Parser("192.168.50.153", "255.255.255.224")); // '192.168.50.128', '0.0.0.25'
console.log(ipv4Parser("65.196.188.53", "255.255.240.0")); // '65.196.176.0'  , '0.0.12.53'
console.log(ipv4Parser("65.196.188.53", "0.0.0.0")); // '0.0.0.0'       , '65.196.188.53'
