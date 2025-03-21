import { type SchemaTypeDefinition } from 'sanity'
import Wallets from './Wallets'
import Perfumes from './Perfumes'
import hoddies from './hoddies'
import TShirts from './T-shirts'
import Caps from './Caps'
import Jewwelry from './Jewwelry'
import hijabs from './hijabs'
import electronic from './electronic'
import shoes from './Shoes'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Wallets, Perfumes ,hoddies,TShirts,Caps , Jewwelry ,hijabs,electronic,shoes],
}
