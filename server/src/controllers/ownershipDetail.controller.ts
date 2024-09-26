import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getOwnershipDetails(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const ownershipDetails = await prisma.ownershipDetail.findMany();

    res.status(200).json(ownershipDetails);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching ownership details: ${error.message}`,
      error,
    });
  }
}

export async function createOwnershipDetail(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newOwnershipDetail = await prisma.ownershipDetail.create({
      data: req.body,
    });

    res.status(201).json(newOwnershipDetail);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating ownership detail: ${error.message}`,
      error,
    });
  }
}
