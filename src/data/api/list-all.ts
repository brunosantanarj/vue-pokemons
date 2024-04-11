import type { APIPaginatedResponse } from '@/base/types/APIPaginatedResponse'
import type { PokemonExplained } from '@/base/types/PokemonExplained'

type Pokemon = {
  name: string
  url: string
}

const endpoint = `${import.meta.env.VITE_POKEMON_API}/pokemon`

const extractID = (url: string) => url.split('/').filter(Boolean).pop()

async function listAllDetailed({ results }: APIPaginatedResponse<Pokemon[]>) {
  const avaiableRequests = await Promise.all(
    results.map((pokemon) => fetch(`${endpoint}/${extractID(pokemon.url)}`))
  )
  return await Promise.all(avaiableRequests.map((request) => request.json()))
}

export async function listAll({
  pageParam = '0'
}): Promise<APIPaginatedResponse<PokemonExplained[]>> {
  const request = await fetch(`${endpoint}/?offset=${pageParam}&limit=24`)
  const response = (await (request.json() as unknown)) as APIPaginatedResponse<Pokemon[]>

  return {
    ...response,
    results: await listAllDetailed(response)
  }
}
