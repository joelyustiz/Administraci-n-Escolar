'use strict'

module.exports = function setupAlumno (SeccionModel, AlumnoModel) {
  async function createOrUpdate (uuid, alumno) {
    const seccion = await SeccionModel.findOne( {
      where: {
        uuid
      }
    })
   const consulta = await AlumnoModel.findOne({where:{uuid:alumno.uuid}})
    if (seccion && consulta) {

      const updated = await AlumnoModel.update(alumno, {where:{uuid:alumno.uuid}} )
      return updated ? AlumnoModel.findOne({where:{uuid:alumno.uuid}}) : Alumno
    }
    Object.assign(alumno, { seccionId: seccion.id })
    const result = await AlumnoModel.create(alumno)
    return result.toJSON()
  }

  function findById (id) {
    return AlumnoModel.findById(id)
  }

  function findByCedulaEscolar (cedula_escolar) {
    return AlumnoModel.findOne({
      where: {
        cedula_escolar
      }
    })
  }

  function findAll() {
    return AlumnoModel.findAll()
  }

  function findByUsername (username) {
    return AlumnoModel.findAll({
      where: {
        username
      }
    })
  }

  function findBySeccion(id) {
    return AlumnoModel.findAll({where:{seccionId:id}})
  }

  
  return {
    createOrUpdate,
    findById,
    findByCedulaEscolar,
    findAll,
    findByUsername,
    findBySeccion
  }
}
