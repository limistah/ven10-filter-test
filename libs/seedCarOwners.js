const CarOwners = require("../models/carOwners");

function seedCarOwners(carOwners) {
  CarOwners.find()
    .countDocuments()
    .then((totalCarOwners) => {
      console.log("Seeding Car Owners %s", carOwners.length);
      // CarOwners.deleteMany({}).exec();
      for (let i = totalCarOwners; i < carOwners.length; i++) {
        const carOwner = carOwners[i];

        const _carOwner = new CarOwners(carOwner);
        _carOwner.lowerCaseGender = _carOwner.gender.toLowerCase();
        _carOwner.car_model_year = parseInt(_carOwner.car_model_year);
        _carOwner.save().then(() => {
          console.log("Seeded %s Car Owners", i);
          if (i + 1 === carOwners.length) {
            console.log("Completely Seeded Car Owners");
          }
        });
      }
    });
}

module.exports = seedCarOwners;
