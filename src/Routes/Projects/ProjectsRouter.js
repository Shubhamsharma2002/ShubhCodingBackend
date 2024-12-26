import express from "express";
import
 { 
    createProject, 
    deleteProject, 
    getAllProject, 
    getProject, 
    updateProject 
}     from "../../Controller/ProjectController.js";

const projectRouter = express.Router();
 

projectRouter.route('/createProject').post(
    createProject
)
projectRouter.route('/deleteProject').delete(
    deleteProject
)
projectRouter.route('/upadteProject').post(
    updateProject
)
projectRouter.route('/getProject').post(
    getProject
)
projectRouter.route('/getAllProjects').post(
    getAllProject

)
export default projectRouter;