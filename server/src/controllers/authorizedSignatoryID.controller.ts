import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getAuthorizedSignatoryIDs(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const authorizedSignatoryIDs =
      await prisma.authorizedSignatoryID.findMany();

    res.status(200).json(authorizedSignatoryIDs);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching authorized signatory IDs: ${error.message}`,
      error,
    });
  }
}

export async function createAuthorizedSignatoryID(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newAuthorizedSignatoryID = await prisma.authorizedSignatoryID.create({
      data: req.body,
    });

    res.status(201).json(newAuthorizedSignatoryID);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating authorized signatory ID: ${error.message}`,
      error,
    });
  }
}
