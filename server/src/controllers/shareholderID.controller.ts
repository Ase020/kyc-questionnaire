import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getShareholderIDs(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const shareholderIDs = await prisma.shareholderID.findMany();

    res.status(200).json(shareholderIDs);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching shareholderIDs: ${error.message}`,
      error,
    });
  }
}

export async function createShareholderID(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newShareholderID = await prisma.shareholderID.create({
      data: req.body,
    });

    res.status(201).json(newShareholderID);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating shareholderID: ${error.message}`,
      error,
    });
  }
}
