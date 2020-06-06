const Filters = require("../models/filters");

function seedCarOwners(filters) {
  Filters.find()
    .countDocuments()
    .then((totalFilters) => {
      if (totalFilters < filters.length) {
        console.log("Seeding Filters");
        Filters.deleteMany({}).exec();
        for (let i = 0; i < filters.length; i++) {
          const carOwner = filters[i];
          const _carOwner = new Filters(carOwner);
          _carOwner.save().then(() => {
            if (i + 1 === filters.length) {
              console.log("Completely Seeded Filters");
            }
          });
        }
      }
    });
}

module.exports = seedCarOwners;
