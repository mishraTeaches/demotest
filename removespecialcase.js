// Given a string "_!helloworld5678234kjlm*&!", return alphanumeric string with groups of k.

const data = "_!helloworld5678234kjlm*&!";

const alphanumeric = data.replace(/[^A-Za-z0-9]/g, "");
console.log(alphanumeric);
