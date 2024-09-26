import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getDesignatedOfficers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const designatedOfficers = await prisma.designatedOfficer.findMany();

    res.status(200).json(designatedOfficers);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching designated officers: ${error.message}`,
      error,
    });
  }
}

export async function createDesignatedOfficer(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newDesignatedOfficer = await prisma.designatedOfficer.create({
      data: req.body,
    });

    res.status(201).json(newDesignatedOfficer);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating designated officer: ${error.message}`,
      error,
    });
  }
}
