import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getEntityInfos(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const entityInfos = await prisma.entityInfo.findMany();

    res.status(200).json(entityInfos);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching ownership details: ${error.message}`,
      error,
    });
  }
}

export async function createEntityInfo(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newEntityInfo = await prisma.entityInfo.create({
      data: req.body,
    });

    res.status(201).json(newEntityInfo);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating ownership detail: ${error.message}`,
      error,
    });
  }
}
