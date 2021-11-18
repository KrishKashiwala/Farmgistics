import { createContext } from 'react'
export const FilterValue = createContext({
	city: '',
	price: '',
	changeValue: ({ city, price }: any) => {

	},
})

