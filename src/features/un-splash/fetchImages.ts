import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const UNSPLASH_API_KEY = "TxFsNcgGceFHjzLfIjYAui_JdTQzh0SsdIPTm21g-yM";

interface SearchImage {
    total: number;
    total_pages: number;
    results: Image[];
}

interface Image {
    id: string;
    likes: number;
    links: {
        download: string;
        download_location: string;
        html: string;
        self: string;
    };
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    };
    user: {
        id: string;
        name: string;
        username: string;
        links: {
            html: string;
            self: string;
            portfolio: string;
            following: string;
            followers: string;
            photos: string;
            likes: string;
        };
    };
    liked_by_user: boolean;
    description?: string;
    alt_description?: string;
}

export const fetchImageSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.unsplash.com`
    }),
    endpoints(builder) {
        return {
            searchImages: builder.query<any, any>({
                query(query) {
                    return `/search/photos?client_id=${UNSPLASH_API_KEY}&page=${query.pageNumber}&orientation=squarish&per_page=${query.limit}&query=${query.search}`;
                },
            }),
        }
    }
});

export const { useSearchImagesQuery } = fetchImageSlice;