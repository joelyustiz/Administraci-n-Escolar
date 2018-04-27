'use strict'
module.exports = function setupInventario(InventarioModel) {
  async function createOrUpdate (producto) {
    const cond = {
      where: {
        id: producto.id
      }
    }
    // console.log(seccion.id)
    const existingProducto = await InventarioModel.findOne(cond)
    console.log(existingProducto)
    if (existingProducto) {
      const updated = await InventarioModel.update(producto, cond)
      return updated ? InventarioModel.findOne(cond) : existingProducto
    }

    const result = await InventarioModel.create(seccion)
    return result.toJSON()
  }

  async function findAll() {
    return InventarioModel.findAll()
  }

  return {
    createOrUpdate,
    findAll
  }
}
