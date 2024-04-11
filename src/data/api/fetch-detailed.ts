import type { PokemonExplained } from '@/base/types/PokemonExplained'

const endpoint = `${import.meta.env.VITE_POKEMON_API}/pokemon`

export async function fetchDetailed(id?: string): Promise<PokemonExplained> {
  const request = await fetch(`${endpoint}/${id}`)
  const response = await request.json()
  return response
}
