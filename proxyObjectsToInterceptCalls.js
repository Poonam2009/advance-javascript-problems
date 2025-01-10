const target = {
  message1: "hello",
  message2: "world",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "everyone";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1);
console.log(proxy.message2);
