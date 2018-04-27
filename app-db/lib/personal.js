'use strict'

module.exports = function setupPersonal (SeccionModel, PersonalModel) {
  async function createOrUpdate (id, alumno) {
    const seccion = await SeccionModel.findOne( {
      where: {
        id
      }
    })

   const consulta = await PersonalModel.findOne({where:{id:alumno.id}})

    if (seccion && consulta) {

      const updated = await PersonalModel.update(alumno, {where:{uuid:alumno.id}} )
      return updated ? PersonalModel.findOne({where:{uuid:alumno.id}}) : Alumno
    }
    Object.assign(alumno, { seccionId: seccion.id })
    const result = await PersonalModel.create(alumno)
    return result.toJSON()
  }

  function findById (id) {
    return PersonalModel.findById(id)
  }

  function findByCedula (cedula) {
    return PersonalModel.findOne({
      where: {
        cedula
      }
    })
  }

  function findAll() {
    return PersonalModel.findAll()
  }

  function findByUsername (username) {
    return PersonalModel.findAll({
      where: {
        username
      }
    })
  }

  function findBySeccion(id) {
    return PersonalModel.findAll({where:{seccionId:id}})
  }

  
  return {
    createOrUpdate,
    findById,
    findByCedula,
    findAll,
    findByUsername,
    findBySeccion
  }
}
