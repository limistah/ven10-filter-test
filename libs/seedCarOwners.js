const CarOwners = require("../models/carOwners");

function seedCarOwners(carOwners) {
  CarOwners.find()
    .countDocuments()
    .then((totalCarOwners) => {
      console.log(totalCarOwners);
      if (totalCarOwners < carOwners.length) {
        CarOwners.deleteMany({}).exec();
        for (let i = 0; i < carOwners.length; i++) {
          const carOwner = carOwners[i];
          const _carOwner = new CarOwners(carOwner);
          _carOwner.save().then(() => {
            console.log(carOwner.id);
          });
        }
      }
    });
  // loop through the car owners array
  // create a new data for the car owners schema
  // save the data
}

module.exports = seedCarOwners;
