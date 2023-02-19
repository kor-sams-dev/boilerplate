// capturing groups
// (ha)+
const capturingGroupsRegex = /((ha)+)/;
const capturingGroupString = "hahaha haa hah!";
console.log(capturingGroupString.match(capturingGroupsRegex));
// [ 'hahaha', 'ha', 'ha', index: 0, input: 'hahaha haa hah!' ]
