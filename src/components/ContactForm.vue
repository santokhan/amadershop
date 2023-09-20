<template>
    <section class="bg-white">
        <div class="mt-16 lg:mt-24 px-4 mx-auto max-w-screen-md">
            <h2 class="text-3xl lg:text-4xl font-semibold text-main text-center mb-4">যোগাযোগ</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-xl">সেরা একটি পেতে এখন আমাদের সাথে যোগাযোগ করুন.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="subject" class="block mb-2 font-medium text-gray-900">আপনার নাম লিখুন *</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                        placeholder="" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 font-medium text-gray-900">আপনার মোবাইল নাম্বারটি লিখুন *</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                        placeholder="" required>
                </div>
                <div>
                    <label for="email" class="block mb-2 font-medium text-gray-900">ইমেইল *</label>
                    <input type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-main focus:border-main block w-full p-2.5"
                        placeholder="" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 font-medium text-gray-900">বিষয়</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                        placeholder="আপনার বিষয় লিখুন" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 font-medium text-gray-900">বার্তা</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main focus:border-main"
                        placeholder="আপনার মন্তব্য লিখুন..."></textarea>
                </div>
                <button type="submit"
                    class="py-3 px-5 font-medium text-center text-white rounded-lg bg-main sm:w-fit hover:bg-main/80">Send</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>