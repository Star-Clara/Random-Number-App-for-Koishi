import { Context, Schema } from 'koishi'

export const name = 'random-number-pstr'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('random')
  .action(                 () => {
    return random(1,100)
  } )
}

function random (min,max){

  return Math.floor(Math.random() * ( max - min ) ) + min

}
