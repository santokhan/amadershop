<template>
    <AppContainer>
        <div class="card py-16">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="Delete" icon="pi pi-trash" severity="danger" @click="deleteSelectedProducts"
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
    </AppContainer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import admin from "../../firebase/admin"
import AppContainer from "../AppContainer.vue"

import { FilterMatchMode } from "primevue/api"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Button from "primevue/button"
import Toolbar from "primevue/toolbar"
import "primevue/resources/themes/lara-light-indigo/theme.css"

const dt = ref();
const products = ref();
function assignData() {
    admin.readData(res => {
        products.value = res
    })
}
onMounted(assignData);
const selectedProducts = ref();
const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const deleteSelectedProducts = () => {
    selectedProducts.value.forEach((e: any) => {
        admin.deleteData(e.id, () => {
            assignData()
        })
    })
};
</script>
