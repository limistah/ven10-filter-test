const CarOwners = require("../models/carOwners");

function seedCarOwners(carOwners) {
  CarOwners.find()
    .countDocuments()
    .then((totalCarOwners) => {
      if (
        totalCarOwners < carOwners.length &&
        process.env.NODE_ENV !== "development"
      ) {
        console.log("Seeding Car Owners");
        CarOwners.deleteMany({}).exec();
        for (let i = 0; i < carOwners.length; i++) {
          const carOwner = carOwners[i];
          const _carOwner = new CarOwners(carOwner);
          _carOwner.save().then(() => {
            if (i + 1 === carOwners.length) {
              console.log("Completely Seeded Car Owners");
            }
          });
        }
      }
    });
}

module.exports = seedCarOwners;
