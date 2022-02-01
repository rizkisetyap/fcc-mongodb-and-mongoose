require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connected');
  })
  .catch(error => {
    console.log(error);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = done => {
  const person = new Person({
    name: 'John doe',
    age: 23,
    favoriteFoods: ['chicked', 'coffee'],
  });
  person.save(function (error, data) {
    if (error) {
      done(error);
    } else {
      done(null, data);
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (error, data) {
    if (error) {
      done(error);
    } else {
      done(null, data);
    }
  });
  // persons.save();
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, docs) {
    if (err) {
      done(err);
    } else {
      done(null, docs);
    }
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, doc) {
    if (err) {
      done(err);
    } else {
      done(null, doc);
    }
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, doc) {
    if (err) {
      done(err);
    } else {
      done(null, doc);
    }
  });
  // done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = done => {
  const nameToRemove = 'Mary';

  done(null /*, data*/);
};

const queryChain = done => {
  const foodToSearch = 'burrito';

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */
Person.watch().on('change', data => console.log(new Date(), data));
//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
