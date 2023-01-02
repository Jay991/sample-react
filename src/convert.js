function convert(input) {
  const lines = input.split('\n');
  let output = 'email,name,attributes\n';
  for (const line of lines) {
    const fields = line.split(',');
    if (fields[0].indexOf('@') === -1) {
      continue;
    }
    fields.forEach(field => field.replace(/"/g, ''));
    let name = fields[1];
    if (fields[2]) {
      name += ` ${fields[2]}`;
    }
    name = name || 'Unknown Name';
    output += `${fields[0]}, "${name}", "{\"mailchimp\": true}"\n`;
  }
  return output;
}

module.exports = {
  convert: convert
};

