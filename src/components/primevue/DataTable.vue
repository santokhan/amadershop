<template>
    <AppContainer>
        <div class="card py-16">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected"
                        :disabled="!selectedProducts || !selectedProducts.length" />
                </template>
            </Toolbar>
            <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" :paginator="true"
                :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
                <Column field="phone" header="Phone" sortable style="min-width:12rem"></Column>
                <Column field="area" header="Area" sortable style="min-width:10rem"></Column>
                <Column field="items" header="Items" sortable style="min-width:10rem"></Column>
                <Column field="address" header="Address" sortable style="min-width:10rem"></Column>
            </DataTable>
        </div>
        <!-- <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true"
            class="p-fluid">
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !product.name }" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <div class="field">
                <label for="inventoryStatus" class="mb-3">Inventory Status</label>
                <Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label"
                    placeholder="Select a Status">
                    <template #value="slotProps">
                        <div v-if="slotProps.value && slotProps.value.value">
                            <Tag :value="slotProps.value.value" :severity="getStatusLabel(slotProps.value.label)" />
                        </div>
                        <div v-else-if="slotProps.value && !slotProps.value.value">
                            <Tag :value="slotProps.value" :severity="getStatusLabel(slotProps.value)" />
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                </Dropdown>
            </div>

            <div class="field">
                <label class="mb-3">Category</label>
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="price">Price</label>
                    <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="field col">
                    <label for="quantity">Quantity</label>
                    <InputNumber id="quantity" v-model="product.quantity" integeronly />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
            </template>
        </Dialog> -->

        <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{ product.name }}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
            </template>
        </Dialog>

        <!-- <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>  -->

    </AppContainer>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { dummy } from './product';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import admin from '../../firebase/admin';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Tag from 'primevue/tag';
import Rating from 'primevue/rating';
import Dialog from 'primevue/dialog';
import AppContainer from '../AppContainer.vue'

const dt = ref();
const products = ref();
function assignData() {
    admin.readData(res => {
        products.value = res
    })
}
onMounted(assignData);
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
});
// const submitted = ref(false);
// const statuses = ref([
//     { label: 'INSTOCK', value: 'instock' },
//     { label: 'LOWSTOCK', value: 'lowstock' },
//     { label: 'OUTOFSTOCK', value: 'outofstock' }
// ]);

const formatCurrency = (value) => {
    if (value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    return;
};
const openNew = () => {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
};
// const confirmDeleteProduct = (prod) => {
//     product.value = prod;
//     deleteProductDialog.value = true;
// };
// const deleteProduct = () => {
//     products.value = products.value.filter(val => val.id !== product.value.id);
//     deleteProductDialog.value = false;
//     product.value = {};
// };
const confirmDeleteSelected = () => {
    selectedProducts.value.forEach(e => {
        admin.deleteData(e.id, (data) => {
            assignData()
        })
    })
    // deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
    products.value = products.value.filter(val => !selectedProducts.value.includes(val));
    deleteProductsDialog.value = false;
    selectedProducts.value = null;
};

const getStatusLabel = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
</script>
