const assert = require("assert");
const { findBusyTimes } = require("./find-busy-times");

assert.strictEqual(
  JSON.stringify(
    findBusyTimes([
      {
        begin: 1607940000000,
        end: 1607949000000,
      },
      {
        begin: 1607952600000,
        end: 1607956200000,
      },
      {
        begin: 1607943600000,
        end: 1607958000000,
      },
      {
        begin: 1607971500000,
        end: 1607979600000,
      },
    ])
  ),
  JSON.stringify([
    { begin: 1607940000000, end: 1607958000000 },
    { begin: 1607971500000, end: 1607979600000 },
  ]),
  "caso de teste fornecido no e-mail"
);

assert.strictEqual(
  JSON.stringify(
    findBusyTimes([
      { begin: 25, end: 50 },
      { begin: 15, end: 20 },
    ])
  ),
  JSON.stringify([
    { begin: 15, end: 20 },
    { begin: 25, end: 50 },
  ]),
  "deve apenas ordenar dois intervalos que não se sobrepõem"
);

assert.strictEqual(
  JSON.stringify(
    findBusyTimes([
      { begin: 25, end: 50 },
      { begin: 15, end: 20 },
      { begin: 70, end: 90 },
      { begin: 60, end: 100 },
    ])
  ),
  JSON.stringify([
    { begin: 15, end: 20 },
    { begin: 25, end: 50 },
    { begin: 60, end: 100 },
  ]),
  "deve mesclar intervalos que se sobrepõe (similar ao primeiro, mas legível)"
);

assert.strictEqual(
  JSON.stringify(
    findBusyTimes([
      { begin: 1, end: 3 },
      { begin: 1, end: 6 },
      { begin: 1, end: 10 },
      { begin: 1, end: 18 },
    ])
  ),
  JSON.stringify([{ begin: 1, end: 18 }]),
  "deve mesclar corretamente intervalos com o mesmo início"
);

assert.strictEqual(
    JSON.stringify(
      findBusyTimes([
        { begin: 2, end: 27 },
        { begin: 6, end: 27 },
        { begin: -5 , end: 27 },
        { begin: 10, end: 27 },
      ])
    ),
    JSON.stringify([{ begin: -5, end: 27 }]),
    "deve mesclar corretamente intervalos com o mesmo fim"
  );
