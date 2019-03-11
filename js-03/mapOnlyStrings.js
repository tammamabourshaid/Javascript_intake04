function mapOnlyStrings(array, mapFn) {
  return array
    .map(value => [value, mapFn(value)])
    .map(([original, mapped]) =>
      typeof mapped === "string" ? mapped : original
    );
}

module.exports = { mapOnlyStrings };
