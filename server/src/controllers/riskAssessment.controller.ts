import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getRiskAssessments(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const riskAssessments = await prisma.riskAssessment.findMany();

    res.status(200).json(riskAssessments);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching risk assessments: ${error.message}`,
      error,
    });
  }
}

export async function createRiskAssessment(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newRiskAssessment = await prisma.riskAssessment.create({
      data: req.body,
    });

    res.status(201).json(newRiskAssessment);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating risk assessment: ${error.message}`,
      error,
    });
  }
}
