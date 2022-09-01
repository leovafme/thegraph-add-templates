import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { NewExchange } from "../generated/FactoryTest/FactoryTest"

export function createNewExchangeEvent(
  game: Address,
  add: boolean
): NewExchange {
  let newExchangeEvent = changetype<NewExchange>(newMockEvent())

  newExchangeEvent.parameters = new Array()

  newExchangeEvent.parameters.push(
    new ethereum.EventParam("game", ethereum.Value.fromAddress(game))
  )
  newExchangeEvent.parameters.push(
    new ethereum.EventParam("add", ethereum.Value.fromBoolean(add))
  )

  return newExchangeEvent
}
