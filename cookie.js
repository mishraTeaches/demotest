class Cookie {
  constructor(flavor) {
    this.flavor = flavor;
  }

  showTitle() {
    console.log(`The flavor of this cookie is ${this.flavor}.`);
  }
}

class FavoriteCookie extends Cookie {
  constructor(greet) {
    super();
    this.greet = greet;
  }
  // showTitle() {
  //   console.log(`${this.greet} is amazing.`);
  // }
}

let myCookie = new FavoriteCookie("chocolate");
console.log(myCookie);
