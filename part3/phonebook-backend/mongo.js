const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Please give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://Nom12345:${password}@cluster0.etovr.mongodb.net/FullStackOpen?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const Personchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", Personchema);

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

if (process.argv.length === 5) {
    person.save().then(() => {
      console.log(`Added ${process.argv[3]} ${process.argv[4]} to phonebook`)
      mongoose.connection.close()
    })
  }

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("Phonebook: ");
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}
if (process.argv.length === 4 || process.argv.length > 5) {
  console.log(
    "Please provide the right number of arguments. If the name you are trying to add containes spaces, wrap it in quotes."
  );
  mongoose.connection.close();
}
