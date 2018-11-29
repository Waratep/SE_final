import { Router } from 'express'
import obj from '../controller/obj'

const route = Router()

route.get('/all',obj.getAll)
route.patch('/add',obj.addObj)
route.get('/room',obj.getByRoom)
// route.post('/edit',obj.editObj)

export default route