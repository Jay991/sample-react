const fs = require('fs');

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

fs.readFile('input.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const output = convert(data);
  fs.writeFile('output.csv', output, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Conversion complete');
  });
});

