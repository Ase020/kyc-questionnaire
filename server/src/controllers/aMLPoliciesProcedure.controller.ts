import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getAMLPoliciesProcedures(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const aMLPoliciesProcedures = await prisma.aMLPoliciesProcedure.findMany();

    res.status(200).json(aMLPoliciesProcedures);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching AML policies procedures: ${error.message}`,
      error,
    });
  }
}

export async function createAMLPoliciesProcedure(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newAMLPoliciesProcedure = await prisma.aMLPoliciesProcedure.create({
      data: req.body,
    });

    res.status(201).json(newAMLPoliciesProcedure);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating AML policies procedure: ${error.message}`,
      error,
    });
  }
}
