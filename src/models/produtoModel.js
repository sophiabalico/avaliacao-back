import prisma from "../../prisma/client.js";

class ProdutoModel {
  // Método para buscar todos os produtos
  getAll = async () => {
    return await prisma.product.findMany();
  };

  // Método para buscar um produto pelo ID
  getById = async (id) => {
    const produto = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    return produto;
  }

  // Método para criar um novo produto
  create = async (name, price, category, brand, stock, imageUrl, isActive) => {
    return await prisma.product.create({
      data: {
        name: name,
        price: price,
        category: category,
        brand: brand,
        stock: stock,
        imageUrl: imageUrl,
        isActive: isActive,
      },
    });
  };

  // Método para atualizar um produto existente
  update = async (id, name, price, category, brand, stock, imageUrl, isActive ) => {
    try {
      const produto = await prisma.product.update({
        where: { id },
        data: {
          name,
          price,
          category,
          brand,
          stock,
          imageUrl,
          isActive,
        },
      });

      return produto;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  };

  // Método para deletar um produto
  delete = async (id) => {
    try {
      const produtoDeletado = await prisma.product.delete({
        where: { id },
      });

      return produtoDeletado;
    } catch (error) {
      console.log("Erro ao deletar o produto", error);
      throw error;
    }
  };
}
export default new ProdutoModel();
