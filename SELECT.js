function SELECT(sql, headersRange) {
  if (headersRange.length !== 1) {
    throw new Error(`headerRange expected to be exactly one row`);
  }
  const headers = headersRange[0].map(header => camelize(header));
  const placeholders = [...new Set([...sql.matchAll(/\[.*?\]/g)].map(match => match[0]))];

  placeholders.forEach(placeholder => {
    const headerName = placeholder.slice(1, -1);
    const pos = headers.indexOf(headerName);

    if (pos === -1) {
      throw new Error(`placeholder "${placeholder}" not a valid header`);
    }
    sql = sql.replace(new RegExp(`\\[${headerName}\\]`, "g"), columnToLetter(pos + 1));
  })

  return sql;
}

const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}


const columnToLetter = (column) => {
  let temp, letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}
