import type { Ability } from '@/base/types/Ability'
import type { PokemonExplained } from '@/base/types/PokemonExplained'

export async function listAbilities(abilities: PokemonExplained['abilities']): Promise<Ability[]> {
  const avaiableRequests = await Promise.all(abilities.map(({ ability }) => fetch(ability.url)))
  const response = Promise.all(avaiableRequests.map((request) => request.json()))
  return response
}
