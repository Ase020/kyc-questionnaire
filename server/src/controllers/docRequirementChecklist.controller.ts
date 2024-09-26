import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getDocRequirementChecklists(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const docRequirementChecklists =
      await prisma.docRequirementChecklist.findMany();

    res.status(200).json(docRequirementChecklists);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching doc requirement checklists: ${error.message}`,
      error,
    });
  }
}

export async function createDocRequirementChecklist(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newdocRequirementChecklist =
      await prisma.docRequirementChecklist.create({
        data: req.body,
      });

    res.status(201).json(newdocRequirementChecklist);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating doc requirement checklist: ${error.message}`,
      error,
    });
  }
}
