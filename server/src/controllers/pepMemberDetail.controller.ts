import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getPepMemberDetails(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const pepMemberDetails = await prisma.pepMemberDetail.findMany();

    res.status(200).json(pepMemberDetails);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching pep member details: ${error.message}`,
      error,
    });
  }
}

export async function createPepMemberDetail(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newPepMemberDetail = await prisma.pepMemberDetail.create({
      data: req.body,
    });

    res.status(201).json(newPepMemberDetail);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating pep member detail: ${error.message}`,
      error,
    });
  }
}
