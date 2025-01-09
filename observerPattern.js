class Product {
  constructor(name) {
    this.name = name;
    this.observers = [];
  }

  backInStock() {
    // Define the product message.
    this.notifyObservers(`${this.name} is back in stock.`);
  }

  registerObserver(customer) {
    this.observers.push(customer.bindMessage);
    console.log(`Registered ${customer.name} as an observer of ${this.name}.`);
  }

  removeObserver(customer) {
    this.observers = this.observers.filter(
      (customer) => customer !== customer.bindMessage
    );
    console.log(
      `removeObserver ${customer.name} as an observer of ${this.name}`
    );
  }

  notifyObservers(productMessage) {
    this.observers.forEach((customer) => customer(productMessage));
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.bindMessage = this.message.bind(this);
  }

  message(productMessage) {
    console.log(`${this.name}, ${productMessage}`);
  }
}

// A product that is out of stock
let backpack = new Product("Green Frog Pack");

// Some customers
let simran = new Customer("Simran");
let maiken = new Customer("Maiken");

backpack.registerObserver(simran);
backpack.registerObserver(maiken);

// Notify all customers when backpack is back in stock
backpack.backInStock();

// Remove a customer from the observer list
backpack.removeObserver(simran);
