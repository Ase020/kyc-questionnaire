import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getConfirmationOfReliances(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const confirmationOfReliances =
      await prisma.confirmationOfReliance.findMany();

    res.status(200).json(confirmationOfReliances);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching confirmation of reliances: ${error.message}`,
      error,
    });
  }
}

export async function createConfirmationOfReliance(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newConfirmationOfReliance =
      await prisma.confirmationOfReliance.create({
        data: req.body,
      });

    res.status(201).json(newConfirmationOfReliance);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating confirmation of reliance: ${error.message}`,
      error,
    });
  }
}
