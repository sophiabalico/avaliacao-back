import produtoModel from "../models/produtoModel.js";

class ProdutosController {
  getAll = async (req, res) => {
    try {
      const produtos = await produtoModel.getAll();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar produtos!" });
    }

  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;

      const produto = await produtoModel.getById(id);

      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      res.json(produto);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      res.status(500).json({ error: "Erro ao buscar produto" });
    }
  };

  create = async(req, res) => {
    const { name, price, category, brand, stock, imageUrl, isActive } = req.body;
    try {
      if (!name) {
        return res.status(400).json({ erro: "Nome do produto é obrigatório!" });
      }
      if (!price) {
        return res.status(400).json({ erro: "Preço do produto é obrigatório!" });
      }
      if (!category) {
        return res.status(400).json({ erro: "Categoria do produto é obrigatório!" });
      }
      if (!brand) {
        return res.status(400).json({ erro: "Marca do produto é obrigatória!" });
      }
      if (!stock) {
        return res.status(400).json({ erro: "Quantidade em estoque é obrigatória!" });
      }
    
      const novoProduto = await produtoModel.create(
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive
      );

      res.status(201).json(novoProduto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar produto!" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, price, category, brand, stock, imageUrl, isActive } = req.body;

    try {
      const produtoAtualizada = await produtoModel.update(
        Number(id),
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive
      );

       if (!produtoAtualizada) {
        return res.status(404).json({ erro: "Produto não encontrada!" });
       }

       res.json(produtoAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar produto!" });
    } 
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const resultado = await produtoModel.delete(Number(id));

      if (!resultado) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
      }

      res.status(200).send({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar produto!" });
    }
  };
}
export default new ProdutosController();
