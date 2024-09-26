import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getOwnershipMemberDetails(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const ownershipMemberDetails =
      await prisma.ownershipMemberDetail.findMany();

    res.status(200).json(ownershipMemberDetails);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching ownership member details: ${error.message}`,
      error,
    });
  }
}

export async function createOwnershipMemberDetail(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newOwnershipMemberDetail = await prisma.ownershipMemberDetail.create({
      data: req.body,
    });

    res.status(201).json(newOwnershipMemberDetail);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating ownership member detail: ${error.message}`,
      error,
    });
  }
}
