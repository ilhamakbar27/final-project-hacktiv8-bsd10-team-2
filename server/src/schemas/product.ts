import { getProductById, getProducts } from "../models/product.js";

export const productTypeDefs = `#graphql
    type Product {
        name: String!
        price: Int!
        description: String!
        category: String # Dijadiin Array (?)
        stock: Int
    }

    type Query {
        getProducts(search: String, offset: Int): [Product]
        getProductById(id: String): Product
    }

    type Mutation {
        createProduct: Product
    }
`;

type Product = {
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
};

type UserInput = {
  search?: string;
  offset: number;
};

export const productResolvers = {
  Query: {
    getProducts: async (_parent: unknown, args: UserInput) => {
      const { search, offset } = args;
      const products = await getProducts(search, offset);
      return products;
    },
    getProductById: async (_parent: unknown, args: { id: string }) => {
      const { id } = args;
      const product = await getProductById(id);
      return product;
    },
  },
  Mutation: {
    createProduct: async (_parent: unknown, args) => {},
  },
};
