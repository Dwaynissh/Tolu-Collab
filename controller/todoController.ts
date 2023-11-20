import { Request, Response } from "express"
import mongoose from "mongoose"
import companyModel from "../model/companyModel"
import projectModel from "../model/projectModel"
import staffModel from "../model/staffModel"

export const createProject = async (req: Request, res: Response) => {
    try {
        const companyID = req.params;
        const staffID = req.params;
        const { projectName, objective,  budget } = req.body;

        const company = await companyModel.findById(companyID);
        const allStakeholders = await staffModel.findById(staffID)

        return res.status(404).json({
            message: "No company found",
    })
    } catch (error) {
        return res.status(404).json({
            message: "Error creating project"
        })
    }
}

export const readProject = async (req: Request, res: Response) => {
    try {
      const { companyID } = req.params;
  
      const company = await companyModel.findById(companyID).populate({
        path: "project",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      });
  
      return res.status(200).json({
        message: "view projects",
        data: company,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error viewing messages",
      });
    }
  };
export const readOneProject = async (req: Request, res: Response) => {
    try {
      const { projectID } = req.params;
  
      const project = await projectModel.findById(projectID);
  
      return res.status(200).json({
        message: "Successfuly Read One project",
        data: project,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error reading project",
      });
    }
  };