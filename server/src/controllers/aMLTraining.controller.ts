import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getAMLTrainings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const aMLTrainings = await prisma.aMLTraining.findMany();

    res.status(200).json(aMLTrainings);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching AML Trainings: ${error.message}`,
      error,
    });
  }
}

export async function createAMLTraining(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newAMLTraining = await prisma.aMLTraining.create({
      data: req.body,
    });

    res.status(201).json(newAMLTraining);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating AMLTraining: ${error.message}`,
      error,
    });
  }
}
