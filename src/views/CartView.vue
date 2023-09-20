<template>
    <div class="h-96 flex justify-center items-center" v-if="ordered">
        <div class="flex flex-col items-center space-y-4 text-main">
            <h1 class="text-4xl capitalize">Order placed successfully</h1>
            <p>আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে আমাদের কল সেন্টার থেকে ফোন করে আপনার অর্ডারটি কনফার্ম করা হবে</p>
            <RouterLink to="/"
                class="bg-main rounded-lg px-4 py-2.5 text-white text-center hover:bg-main/80 flex justify-center gap-2 items-center">
                প্রোডাক্ট বাছাই করুন</RouterLink>
        </div>
    </div>
    <AppContainer v-else>
        <div class="flex flex-col lg:flex-row gap-8 py-12 lg:py-16">
            <div class="w-full lg:w-1/2 space-y-6">
                <h5 class="text-lg text-center">অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে অর্ডার কনফার্ম
                    করুন বাটনে ক্লিক করুন</h5>
                <form class="space-y-4" @submit="hanldeSubmit">
                    <div>
                        <label for="name" class="block mb-2 font-medium text-gray-900">আপনার নাম লিখুন *</label>
                        <input type="text" id="name" name="name" v-model="formData.name"
                            class="block px-3 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                            placeholder="" required>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 font-medium text-gray-900">আপনার মোবাইল *</label>
                        <input type="text" id="phone" name="phone" v-model="formData.phone"
                            class="block px-3 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                            placeholder="" required>
                    </div>
                    <div>
                        <label for="address" class="block mb-2 font-medium text-gray-900">ভেলিভারির ঠিকানা, থানা,
                            জেলা পুরোটা লিখুন *</label>
                        <input type="text" id="address" name="address" v-model="formData.address"
                            class="block px-3 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                            placeholder="" required>
                    </div>
                    <div class="">
                        <label for="area" class="block mb-2 font-medium text-gray-900">আপনার এরিয়া সিলেক্ট করুন</label>
                        <select name="area" id="area" v-model="formData.area"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-main focus:border-main block w-full px-3 py-2">
                            <option value="100">ঢাকার বাইরে</option>
                            <option value="60">ঢাকার ভিতরে</option>
                        </select>
                    </div>
                    <button type="submit"
                        class="w-full block py-3 px-5 font-medium text-center text-white rounded-lg bg-main hover:bg-main/80">অর্ডার
                        কনফার্ম করুন</button>
                </form>
            </div>
            <div class="w-full lg:w-1/2">
                <h2 class="text-2xl font-medium">আপনার অর্ডার</h2>
                <hr class="my-4 border-2">
                <div class="w-full">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td class="w-5/12 font-semibold border p-2 rounded-t">Product</td>
                                <td class="w-2/12 font-semibold border p-2 rounded-t">Price</td>
                                <td class="w-3/12 font-semibold border p-2 rounded-t">Quantity</td>
                                <td class="w-2/12 font-semibold border p-2 rounded-t">Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-2 border">দাড়ি বৃদ্ধির তেল</td>
                                <td class="p-2 border">300</td>
                                <td class="p-2 border">
                                    <form class="flex gap-2">
                                        <button type="button" class="hover:text-main"
                                            @click="() => handleCount('decrement')"><i class="fa fa-minus"></i></button>
                                        <input type="number" v-model="count"
                                            class="w-12 h-8 border rounded appearance-none appear text-center">
                                        <button type="button" class="hover:text-main"
                                            @click="() => handleCount('increment')"><i class="fa fa-plus"></i></button>
                                    </form>
                                </td>
                                <td class="p-2 border">{{ subTotal(count) }}</td>
                            </tr>
                            <tr>
                                <td class="p-2 border"></td>
                                <td class="p-2 border"></td>
                                <td class="p-2 border font-semibold">Sub total</td>
                                <td class="p-2 border">{{ subTotal(count) }}</td>
                            </tr>
                            <tr>
                                <td class="p-2 border"></td>
                                <td class="p-2 border"></td>
                                <td class="p-2 border font-semibold">Shipping Cost</td>
                                <td class="p-2 border">{{ formData.area }}</td>
                            </tr>
                            <tr>
                                <td class="p-2 border"></td>
                                <td class="p-2 border"></td>
                                <td class="p-2 border font-semibold">Total</td>
                                <td class="p-2 border">{{ total(count, formData.area) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import AppContainer from '../components/AppContainer.vue';
import { RouterLink } from 'vue-router'

const count = ref<number>(1)
const totalPrice = ref<number>(1)
const ordered = ref<boolean>(false)

interface FormData {
    name: string
    area: number
    phone: string
    address: string
}
const formData = reactive<FormData>({
    name: "",
    area: 100,
    phone: "",
    address: "",
})

function handleCount(payload: string) {
    if (payload === 'increment') {
        count.value = count.value + 1
    }
    if (payload === 'decrement') {
        if (count.value > 1) {
            count.value = count.value - 1
        }
    }
}

function subTotal(count: number | string): number {
    if (typeof count === 'string') {
        count = parseInt(count)
    }
    return count * 300
}
function total(count: number, shippingCost: number | string): number {
    shippingCost = typeof shippingCost === 'string' ? parseInt(shippingCost) : shippingCost
    const subTotal = count * 300

    totalPrice.value = subTotal + shippingCost
    return totalPrice.value
}

async function hanldeSubmit(e: any) {
    e.preventDefault();
    ordered.value = true

    const url = "https://formspree.io/f/xjvqaovp"
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: formData.name,
            area: formData.area,
            phone: formData.phone,
            address: formData.address,
        })
    }).catch(err => { throw err }).then(res => res.json()).then(data => {
        console.log(data);
    })
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>