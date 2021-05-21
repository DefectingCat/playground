type Shoe = {
  purpose: string;
};
class Boot implements Shoe {
  purpose = 'woodcutting';
}
class BalletFlat implements Shoe {
  purpose = 'dancing';
}
class Sneaker implements Shoe {
  purpose = 'walking';
}

type CreateShoe = {
  crarete(type: 'boot'): Boot;
  crarete(type: 'balletflat'): BalletFlat;
  crarete(type: 'sneaker'): Sneaker;
};

const Shoe: CreateShoe = {
  crarete(type: 'boot' | 'balletflat' | 'sneaker'): Shoe {
    switch (type) {
      case 'boot':
        return new Boot();
      case 'balletflat':
        return new BalletFlat();
      case 'sneaker':
        return new Sneaker();
    }
  },
};

const myShoe = Shoe.crarete('sneaker');
console.log(myShoe.purpose);
