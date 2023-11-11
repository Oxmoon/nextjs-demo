'use client'
import Counter from './Counter/counter.tsx'
import SearchBar from './SearchBar/SearchBar.tsx'

export default function Page() {
    return (
        <main>
            <Counter />
            <hr />
            <a href="https://github.com/Oxmoon/nextjs-demo">My Github Link</a>
            <hr />
            <SearchBar />
        </main>
    )
}
