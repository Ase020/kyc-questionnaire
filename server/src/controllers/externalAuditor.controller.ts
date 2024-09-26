import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getExternalAuditors(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const externalAuditors = await prisma.externalAuditor.findMany();

    res.status(200).json(externalAuditors);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching external auditors: ${error.message}`,
      error,
    });
  }
}

export async function createExternalAuditor(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newExternalAuditor = await prisma.externalAuditor.create({
      data: req.body,
    });

    res.status(201).json(newExternalAuditor);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating external auditor: ${error.message}`,
      error,
    });
  }
}
