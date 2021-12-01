const example2 = require("./example2_after");

test("Deve validar o cpf A", function() {
    const isValid = example2.validate("935.411.348-80");
    expect(isValid).toBeTruthy();
});

test("Deve validar o cpf B", function() {
    const isValid = example2.validate("357.188.378-05");
    expect(isValid).toBeTruthy();
});

test("Deve validar o cpf C", function() {
    const isValid = example2.validate("987.654.321-00");
    expect(isValid).toBeTruthy();
});

test("Não deve validar o cpf com numeros todos iguais", function() {
    const isValid = example2.validate("111.111.111-11");
    expect(isValid).toBeFalsy();
});

test("Não deve validar o cpf com numero aleatorio", function() {
    const isValid = example2.validate("123.456.789-00");
    expect(isValid).toBeFalsy();
});

test("Não deve validar o cpf alem do limite", function() {
    const isValid = example2.validate("111.111.111-1100");
    expect(isValid).toBeFalsy();
});

test("Não deve validar o cpf abaixo do limite", function() {
    const isValid = example2.validate("111111111");
    expect(isValid).toBeFalsy();
});

test("Não deve validar o cpf null", function() {
    const isValid = example2.validate(null);
    expect(isValid).toBeFalsy();
});