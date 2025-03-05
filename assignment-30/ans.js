//Below is example for one factory instance( singleton)

//Imagine we have a CarFactory, but we want only ONE factory instance (Singleton) that can create cars (Factory).

// Car types
function Sedan() {
    this.drive = function () {
      console.log("Driving a smooth sedan...");
    };
  }
  
  function SUV() {
    this.drive = function () {
      console.log("Driving a powerful SUV...");
    };
  }
  
  // Singleton Factory
  const CarFactory = (function () {
    let instance; // Singleton instance
  
    function createFactory() {
      return {
        createCar: function (type) {
          if (type === "sedan") {
            return new Sedan();
          } else if (type === "suv") {
            return new SUV();
          } else {
            console.log("Unknown car type");
          }
        }
      };
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createFactory();
        }
        return instance;
      }
    };
  })();
  
  // Using the Singleton Factory
  const factory1 = CarFactory.getInstance();
  const factory2 = CarFactory.getInstance();
  
  console.log(factory1 === factory2); // true (same factory instance)
  
  const car1 = factory1.createCar("sedan");
  const car2 = factory2.createCar("suv");
  
  car1.drive(); // Driving a smooth sedan...
  car2.drive(); // Driving a powerful SUV...
  