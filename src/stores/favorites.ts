import { defineStore } from "pinia";

const STORAGE_KEY = 'favorites'

export const useFavoritesStore = defineStore("favorites", {
    state: () => ({
        favorites: [] as number[]
    }),
    actions: {
        init() {
            const fromStorage = localStorage.getItem(STORAGE_KEY)
            if (fromStorage) {
                this.favorites = JSON.parse(fromStorage)
            }
        },

        saveToStorage() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorites))
        },

        toggleFavorite(id: number) {
            if (this.favorites.includes(id)) {
                this.favorites = this.favorites.filter((itemId) => itemId !== id)
            } else {
                this.favorites.push(id)
            }
            this.saveToStorage()
        },
        isFavorite(id: number): boolean {
            return this.favorites.includes(id) ?? false
        }
    }
})