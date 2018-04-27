'use strict'
const debug = require('debug')('platziverse:db:alumno')
module.exports = function setupAlumno (SeccionModel, AlumnoModel) {
  async function createOrUpdate (id, alumno) {
    
    debug(`ID QUE LLEGA ${alumno.id}`)
    if (!alumno.id === "") {
      debug('Ingrso a null')
      const consulta = await AlumnoModel.findOne({where:{id:alumno.id}})
      if (seccion && consulta) {
  
        const updated = await AlumnoModel.update(alumno, {where:{id:alumno.id}} )
        return updated ? AlumnoModel.findOne({where:{id:alumno.id}}) : Alumno
      }
    }


   debug('Ingreso a crear')
    const seccion = await SeccionModel.findOne( {
      where: {
        id
      }
    })
   delete alumno.id
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
