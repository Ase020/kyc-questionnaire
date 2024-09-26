import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getDeclarations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const declarations = await prisma.declaration.findMany();

    res.status(200).json(declarations);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching declarations: ${error.message}`,
      error,
    });
  }
}

export async function createDeclaration(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newDeclaration = await prisma.declaration.create({
      data: req.body,
    });

    res.status(201).json(newDeclaration);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating declaration: ${error.message}`,
      error,
    });
  }
}
