import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getBoardOfDirectorIDs(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const boardOfDirectorIDs = await prisma.boardOfDirectorID.findMany();

    res.status(200).json(boardOfDirectorIDs);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching board of director IDs: ${error.message}`,
      error,
    });
  }
}

export async function createBoardOfDirectorID(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newBoardOfDirectorID = await prisma.boardOfDirectorID.create({
      data: req.body,
    });

    res.status(201).json(newBoardOfDirectorID);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating board of director ID: ${error.message}`,
      error,
    });
  }
}
