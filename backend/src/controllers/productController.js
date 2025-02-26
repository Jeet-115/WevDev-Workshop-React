import { PrismaClient } from '@prisma/client';
// const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getallProducts = async (req, res) => {
    const products = await prisma.products.findMany();
    res.json(products);
}

// add  products

export const addProduct = async (req, res) => {
    const { name, price, description,image } = req.body;
    const product = await prisma.products.create({
        data: {
            name,
            price,
            description,
            image
        }
    });
    res.json(product);
}