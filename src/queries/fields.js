export default {
  getPossibleToPut (fields, mapObjects, userId, power) {
    this.fields = fields
    this.resultFields = []

    let ownFields = this.fields.filter(field => {
      return field.user_id == userId
    })

    ownFields.forEach(field => {
      this.resultFields.push(...this.getRoundedFields(field))
    })

    this.resultFields = this.resultFields.filter(field => {
      return power > this.getFieldDefense(field, mapObjects)
    })

    return this.resultFields.concat(ownFields)
  },
  getFieldDefense (field, mapObjects) {
    let mapObject = mapObjects.find(mapObject => {
      return mapObject.field_id === field.id
    })

    if (! mapObject) {
      return 0
    }

    return mapObject.defense
  },
  getRoundedFields (field) {
    let directions = ['Up', 'Down', 'Right', 'Left']
    let fields = []

    directions.forEach(direction => {
      let rounded = this['getRoundedBy' + direction](field)

      if (rounded === undefined) {
        return
      }

      if (this.alreadyExists(rounded)) {
        return
      }

      fields.push(rounded)
    })

    return fields
  },
  getRoundedByUp(roundedField)
  {
    return this.fields.find(field => {
      return field.x == roundedField.x && field.y == roundedField.y - 1
    })
  },
  getRoundedByDown(roundedField)
  {
    return this.fields.find(field => {
      return field.x == roundedField.x && field.y == roundedField.y + 1
    })
  },
  getRoundedByRight(roundedField)
  {
    return this.fields.find(field => {
      return field.x == roundedField.x + 1 && field.y == roundedField.y
    })
  },
 getRoundedByLeft(roundedField)
  {
    return this.fields.find(field => {
      return field.x === roundedField.x - 1 && field.y === roundedField.y
    })
  },
  alreadyExists (searchField) {
    return this.resultFields.some(field => {
      return field.id === searchField.id
    })
  }
}
