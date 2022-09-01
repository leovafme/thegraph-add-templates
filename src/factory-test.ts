import { BigInt } from "@graphprotocol/graph-ts"
import { NewExchange } from "../generated/FactoryTest/FactoryTest"
import { ExampleEntity } from "../generated/schema"
import { Exchange } from '../generated/templates'

export function handleNewExchange(event: NewExchange): void {
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)

  entity.game = event.params.game
  entity.add = event.params.add

  entity.save()
  Exchange.create(event.params.game)
}
