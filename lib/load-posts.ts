export async function loadPosts(path: string) {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost:3000/api/${path}`)
    const data = await res.json()
    return data
}