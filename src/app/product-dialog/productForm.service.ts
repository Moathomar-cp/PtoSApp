import { Injectable } from '@angular/core';
import { ProductsProvider } from '@app/providers/products';
import { CategoriesProvider } from '@app/providers/categories';
import { SuppliersProvider } from '@app/providers/suppliers';
import { TypesProvider } from '@app/providers/productTypes';


@Injectable()
export class ProductFormService {

    constructor(
        private productsProvider: ProductsProvider,
        private categoriesProvider: CategoriesProvider,
        private suppliersProvider: SuppliersProvider,
        private typesProvider: TypesProvider
    ) { }


    get categories() {
        return this.categoriesProvider.getList();
    }

    get suppliers() {
        return this.suppliersProvider.getList();
    }

    get types() {
        return this.typesProvider.getList();
    }

    addProduct(model: any) {
        this.productsProvider.add(model);

    }




}