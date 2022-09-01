import { NewPet } from "../../generated/schema";
import { AddPetsCall } from "../../generated/templates/Exchange/Exchange";

export function handleAddPets(call: AddPetsCall): void {
    let entity = NewPet.load(call.inputs._petaddress.toHexString())

    if (!entity) {
        entity = new NewPet(call.inputs._petaddress.toHexString())
    }
    entity.number = call.inputs._value

    entity.save()
}
