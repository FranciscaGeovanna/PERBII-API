import Category from '../models/category.js';
import categoryRepository from '../repositories/categoryRepository.js';

export const getProductById = (req, res) => {
    const { id } = req.params;

    const category = categoryRepository.getById(Number(id));

    if(!category) {
        return res.status(404).json({ error: 'Category not found' });
    }

    res.json(product);
};

export const listCategories = (req, res) => {
    const { description, page = 1, limit = 10 } = req.query;

    let categories = productRepository.getAll();

    if(category) {
        categories = categories.filter(product => 
            product.getDescription().toLowerCaser() === description.description.toLowerCaser()
        );
    }

    // paginação
    const start = (page - 1) * limit;
    const paginateCategories = categories.slice(start, start + parseInt(limit));

    res.json({ total: categories.length, page, limit, data: paginateCategories });
};

export const createCategory = (req, res) => {
    const { description } = req.body;

    if(!description) {
        return res.status(400).json({ error : 'Description are required!' });
    }

    const newCategory = new Category(null, description);
    const addedCategory= categoryRepository.add(newCategory);

    res.status(201).json(addedCategory);
};
