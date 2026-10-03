
import readlineSync from "readline-sync";

import { Producer } from "./Producer";
import { familyFarmer } from "./FamliyFarmer";
import { comunityGarden } from "./CommunityGardenProducer";
import { Food } from "./Food";
import { institution } from "./Institution";
import { Registry } from "./Registry";


const foodRegistry = new Registry<Food>();
const institutionRegistry = new Registry<institution>();
const producerRegistry = new Registry<Producer>();


let option: number = -1;


do {

    console.log("");
    console.log("========================================");
    console.log("       RAÍZES DA TERRA COOPERATIVE");
    console.log("========================================");
    console.log("");
    console.log("[1] Register producer");
    console.log("[2] Register food");
    console.log("[3] Register institution");
    console.log("[4] List producers");
    console.log("[5] List food");
    console.log("[6] List institutions");
    console.log("[7] Make donation");
    console.log("[0] Exit");
    console.log("");

    option = Number(
        readlineSync.question("Choose an option: ")
    );


    // REGISTER PRODUCER

    if (option === 1) {

        try {

            console.log("");
            console.log("REGISTER PRODUCER");

            const name = readlineSync.question("Name: ");
            const cpf = readlineSync.question("CPF: ");

            const quantity = Number(
                readlineSync.question("Food quantity: ")
            );

            console.log("");
            console.log("[1] Family farmer");
            console.log("[2] Community garden");

            const type = Number(
                readlineSync.question("Choose the type: ")
            );


            if (type === 1) {

                const size = Number(
                    readlineSync.question("Property size: ")
                );

                const producer = new familyFarmer(
                    name,
                    cpf,
                    quantity,
                    size
                );

                producerRegistry.add(producer);

                console.log("");
                console.log("Producer registered successfully!");


            } else if (type === 2) {

                const volunteers = Number(
                    readlineSync.question("Number of volunteers: ")
                );

                const producer = new comunityGarden(
                    name,
                    cpf,
                    quantity,
                    volunteers
                );

                producerRegistry.add(producer);

                console.log("");
                console.log("Producer registered successfully!");

            } else {

                console.log("");
                console.log("Invalid type.");
            }

        } catch (error) {

            console.log("");
            console.log("Could not register the producer.");
        }


    // REGISTER FOOD

    } else if (option === 2) {

        try {

            console.log("");
            console.log("REGISTER FOOD");

            if (producerRegistry.list().length === 0) {

                console.log("No producers registered.");
                console.log("Register a producer first.");

            } else {

                const name = readlineSync.question("Food name: ");
                const category = readlineSync.question("Category: ");

                const quantity = Number(
                    readlineSync.question("Quantity: ")
                );

                console.log("");
                console.log("Choose the producer:");

                const producers = producerRegistry.list();

                for (let i = 0; i < producers.length; i++) {

                    console.log(
                        "[" + i + "] " +
                        producers[i].getName()
                    );
                }

                const producerIndex = Number(
                    readlineSync.question("Producer: ")
                );

                const producer = producers[producerIndex];

                if (producer == null) {

                    throw new Error("Producer not found.");
                }

                const food = new Food(
                    name,
                    category,
                    quantity,
                    producer
                );

                foodRegistry.add(food);

                console.log("");
                console.log("Food registered successfully!");
            }

        } catch (error) {

            console.log("");
            console.log("Could not register the food.");
        }


    // REGISTER INSTITUTION

    } else if (option === 3) {

        try {

            console.log("");
            console.log("REGISTER INSTITUTION");

            const name = readlineSync.question("Name: ");
            const address = readlineSync.question("Address: ");

            const people = Number(
                readlineSync.question("People served: ")
            );

            const newInstitution = new institution(
                name,
                address,
                people,
                0
            );

            institutionRegistry.add(newInstitution);

            console.log("");
            console.log("Institution registered successfully!");

        } catch (error) {

            console.log("");
            console.log("Could not register the institution.");
        }


    // LIST PRODUCERS

    } else if (option === 4) {

        console.log("");
        console.log("PRODUCERS");
        console.log("");

        const producers = producerRegistry.list();

        if (producers.length === 0) {

            console.log("No producers registered.");

        } else {

            for (let producer of producers) {

                producer.present();

                console.log("----------------");
            }
        }


    // LIST FOOD

    } else if (option === 5) {

        console.log("");
        console.log("FOOD");
        console.log("");

        const foods = foodRegistry.list();

        if (foods.length === 0) {

            console.log("No food registered.");

        } else {

            for (let food of foods) {

                console.log("Food: " + food.getNome());
                console.log(
                    "Quantity: " +
                    food.disponivel() +
                    " kg"
                );

                console.log("----------------");
            }
        }


    // LIST INSTITUTIONS

    } else if (option === 6) {

        console.log("");
        console.log("INSTITUTIONS");
        console.log("");

        const institutions = institutionRegistry.list();

        if (institutions.length === 0) {

            console.log("No institutions registered.");

        } else {

            for (let inst of institutions) {

                console.log("Name: " + inst.getNome());
                console.log("Address: " + inst.getEndereco());
                console.log(
                    "People served: " +
                    inst.getPessoasAtendidas()
                );
                console.log(
                    "Food received: " +
                    inst.getAlimentosRecebidos()
                );

                console.log("----------------");
            }
        }


    // DONATION

    } else if (option === 7) {

        try {

            console.log("");
            console.log("========================================");
            console.log("             NEW DONATION");
            console.log("========================================");
            console.log("");

            const foods = foodRegistry.list();
            const institutions = institutionRegistry.list();


            if (foods.length === 0) {

                console.log("No food registered.");

            } else if (institutions.length === 0) {

                console.log("No institutions registered.");

            } else {

                console.log("Choose the food:");

                for (let i = 0; i < foods.length; i++) {

                    console.log(
                        "[" + i + "] " +
                        foods[i].getNome() +
                        " - " +
                        foods[i].disponivel() +
                        " kg"
                    );
                }

                const foodIndex = Number(
                    readlineSync.question("Food: ")
                );

                const food = foods[foodIndex];

                if (food == null) {

                    throw new Error("Food not found.");
                }


                console.log("");
                console.log("Choose the institution:");

                for (let i = 0; i < institutions.length; i++) {

                    console.log(
                        "[" + i + "] " +
                        institutions[i].getNome()
                    );
                }

                const institutionIndex = Number(
                    readlineSync.question("Institution: ")
                );

                const inst = institutions[institutionIndex];

                if (inst == null) {

                    throw new Error("Institution not found.");
                }


                const quantity = Number(
                    readlineSync.question("Quantity: ")
                );


                food.donate(quantity);

                inst.registrar(quantity);


                console.log("");
                console.log("Food: " + food.getNome());
                console.log("Quantity: " + quantity + " kg");
                console.log("Institution: " + inst.getNome());
                console.log("");
                console.log("Donation completed successfully!");
            }

        } catch (error) {

            console.log("");
            console.log("Could not complete the donation.");
        }


    // EXIT

    } else if (option === 0) {

        console.log("");
        console.log("System closed.");

    } else {

        console.log("");
        console.log("Invalid option.");
    }


} while (option !== 0);
