// sanity.js
import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: 'qsh8k6rt',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2021-10-21', // use current date (YYYY-MM-DD) to target the latest API version
    token: "sksXzVv0bKfAkCzZfa9lR2kjzx9wXqpQ3374kV9Kgp9FDyfPYdr5TmSDqL5ybe2kvayWhGJl5xUxCRtHvI3A31rTpTr4g7D4UKrkAAbD9x6fqyrCeVDIoc0qB1HdSU8afjVnISjVTdz0TEwyg5ZtEGfu7aSIAZkLc8j7RmBMIRsdJsKRQWUp" // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]')
    return posts
}

export async function createPost(post: any) {
    const result = client.create(post)
    return result
}
