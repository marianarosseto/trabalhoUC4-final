"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const FamliyFarmer_1 = require("./FamliyFarmer");
const CommunityGardenProducer_1 = require("./CommunityGardenProducer");
const Food_1 = require("./Food");
const Institution_1 = require("./Institution");
const Registry_1 = require("./Registry");
const foodRegistry = new Registry_1.Registry();
const institutionRegistry = new Registry_1.Registry();
const producerRegistry = new Registry_1.Registry();
let option = -1;
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
    option = Number(readline_sync_1.default.question("Choose an option: "));
    // REGISTER PRODUCER
    if (option === 1) {
        try {
            console.log("");
            console.log("REGISTER PRODUCER");
            const name = readline_sync_1.default.question("Name: ");
            const cpf = readline_sync_1.default.question("CPF: ");
            const quantity = Number(readline_sync_1.default.question("Food quantity: "));
            console.log("");
            console.log("[1] Family farmer");
            console.log("[2] Community garden");
            const type = Number(readline_sync_1.default.question("Choose the type: "));
            if (type === 1) {
                const size = Number(readline_sync_1.default.question("Property size: "));
                const producer = new FamliyFarmer_1.familyFarmer(name, cpf, quantity, size);
                producerRegistry.add(producer);
                console.log("");
                console.log("Producer registered successfully!");
            }
            else if (type === 2) {
                const volunteers = Number(readline_sync_1.default.question("Number of volunteers: "));
                const producer = new CommunityGardenProducer_1.comunityGarden(name, cpf, quantity, volunteers);
                producerRegistry.add(producer);
                console.log("");
                console.log("Producer registered successfully!");
            }
            else {
                console.log("");
                console.log("Invalid type.");
            }
        }
        catch (error) {
            console.log("");
            console.log("Could not register the producer.");
        }
        // REGISTER FOOD
    }
    else if (option === 2) {
        try {
            console.log("");
            console.log("REGISTER FOOD");
            if (producerRegistry.list().length === 0) {
                console.log("No producers registered.");
                console.log("Register a producer first.");
            }
            else {
                const name = readline_sync_1.default.question("Food name: ");
                const category = readline_sync_1.default.question("Category: ");
                const quantity = Number(readline_sync_1.default.question("Quantity: "));
                console.log("");
                console.log("Choose the producer:");
                const producers = producerRegistry.list();
                for (let i = 0; i < producers.length; i++) {
                    console.log("[" + i + "] " +
                        producers[i].getName());
                }
                const producerIndex = Number(readline_sync_1.default.question("Producer: "));
                const producer = producers[producerIndex];
                if (producer == null) {
                    throw new Error("Producer not found.");
                }
                const food = new Food_1.Food(name, category, quantity, producer);
                foodRegistry.add(food);
                console.log("");
                console.log("Food registered successfully!");
            }
        }
        catch (error) {
            console.log("");
            console.log("Could not register the food.");
        }
        // REGISTER INSTITUTION
    }
    else if (option === 3) {
        try {
            console.log("");
            console.log("REGISTER INSTITUTION");
            const name = readline_sync_1.default.question("Name: ");
            const address = readline_sync_1.default.question("Address: ");
            const people = Number(readline_sync_1.default.question("People served: "));
            const newInstitution = new Institution_1.institution(name, address, people, 0);
            institutionRegistry.add(newInstitution);
            console.log("");
            console.log("Institution registered successfully!");
        }
        catch (error) {
            console.log("");
            console.log("Could not register the institution.");
        }
        // LIST PRODUCERS
    }
    else if (option === 4) {
        console.log("");
        console.log("PRODUCERS");
        console.log("");
        const producers = producerRegistry.list();
        if (producers.length === 0) {
            console.log("No producers registered.");
        }
        else {
            for (let producer of producers) {
                producer.present();
                console.log("----------------");
            }
        }
        // LIST FOOD
    }
    else if (option === 5) {
        console.log("");
        console.log("FOOD");
        console.log("");
        const foods = foodRegistry.list();
        if (foods.length === 0) {
            console.log("No food registered.");
        }
        else {
            for (let food of foods) {
                console.log("Food: " + food.getNome());
                console.log("Quantity: " +
                    food.disponivel() +
                    " kg");
                console.log("----------------");
            }
        }
        // LIST INSTITUTIONS
    }
    else if (option === 6) {
        console.log("");
        console.log("INSTITUTIONS");
        console.log("");
        const institutions = institutionRegistry.list();
        if (institutions.length === 0) {
            console.log("No institutions registered.");
        }
        else {
            for (let inst of institutions) {
                console.log("Name: " + inst.getNome());
                console.log("Address: " + inst.getEndereco());
                console.log("People served: " +
                    inst.getPessoasAtendidas());
                console.log("Food received: " +
                    inst.getAlimentosRecebidos());
                console.log("----------------");
            }
        }
        // DONATION
    }
    else if (option === 7) {
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
            }
            else if (institutions.length === 0) {
                console.log("No institutions registered.");
            }
            else {
                console.log("Choose the food:");
                for (let i = 0; i < foods.length; i++) {
                    console.log("[" + i + "] " +
                        foods[i].getNome() +
                        " - " +
                        foods[i].disponivel() +
                        " kg");
                }
                const foodIndex = Number(readline_sync_1.default.question("Food: "));
                const food = foods[foodIndex];
                if (food == null) {
                    throw new Error("Food not found.");
                }
                console.log("");
                console.log("Choose the institution:");
                for (let i = 0; i < institutions.length; i++) {
                    console.log("[" + i + "] " +
                        institutions[i].getNome());
                }
                const institutionIndex = Number(readline_sync_1.default.question("Institution: "));
                const inst = institutions[institutionIndex];
                if (inst == null) {
                    throw new Error("Institution not found.");
                }
                const quantity = Number(readline_sync_1.default.question("Quantity: "));
                food.donate(quantity);
                inst.registrar(quantity);
                console.log("");
                console.log("Food: " + food.getNome());
                console.log("Quantity: " + quantity + " kg");
                console.log("Institution: " + inst.getNome());
                console.log("");
                console.log("Donation completed successfully!");
            }
        }
        catch (error) {
            console.log("");
            console.log("Could not complete the donation.");
        }
        // EXIT
    }
    else if (option === 0) {
        console.log("");
        console.log("System closed.");
    }
    else {
        console.log("");
        console.log("Invalid option.");
    }
} while (option !== 0);
