import { Product } from "../types";
import { Category } from "../types/category";

export const INIT_CATEGORIES: Category[] = [
    {
        "id": "cat-elec-101",
        "name": "Электроника"
    },
    {
        "id": "cat-home-202",
        "name": "Дом и сад"
    },
    {
        "id": "cat-sport-303",
        "name": "Спорт и отдых"
    },
    {
        "id": "cat-appl-404",
        "name": "Бытовая техника"
    },
    {
        "id": "cat-kids-505",
        "name": "Детские товары"
    },
    {
        "id": "cat-auto-606",
        "name": "Автотовары"
    }
];

export const INIT_PRODUCTS: Product[] = [
    {
        id: "7b2-f41",
        name: "Беспроводные наушники AirTune",
        description: "Наушники с активным шумоподавлением и защитой от влаги.",
        price: 12900,
        category: "Электроника",
        categoryId: "cat-elec-101"
    },
    {
        id: "a15-k98",
        name: "Кожаный ежедневник",
        description: "Формат А5, переплет из натуральной кожи, 200 страниц.",
        price: 2500,
        category: "Канцелярия",
        categoryId: "cat-elec-101"
    },
    {
        id: "m44-s23",
        name: "Кофемашина AromaPro",
        description: "Автоматическая кофемашина с капучинатором и настройкой крепости напитка.",
        price: 45000,
        category: "Бытовая техника",
        categoryId: "cat-home-202",
    },
    {
        id: "x88-j12",
        name: "Спортивная бутылка для воды",
        description: "Объем 750 мл, выполнена из ударопрочного пластика BPA-free.",
        price: 950,
        category: "Спорт и отдых",
        categoryId: "cat-home-202",
    },
    {
        id: "e56-y31",
        name: "Настольная лампа LED Flex",
        description: "Регулируемая яркость и цветовая температура, сенсорное управление.",
        price: 3200,
        category: "Дом и свет"
    }
];
