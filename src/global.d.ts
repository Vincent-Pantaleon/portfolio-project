
export {}

declare global {
    type Repo = {
        id: number
        name: string
        full_name: string
        description: string | null
        html_url: string
        homepage: string | null
        language: string | null
        stargazers_count: number
        forks_count: number
        topics: string[]
        fork: boolean  
        archived: boolean
        created_at: string
        updated_at: string
        pushed_at: string
        visibility: 'public' | 'private'
    }
}