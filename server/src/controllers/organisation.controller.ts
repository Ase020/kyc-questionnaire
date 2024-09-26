import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getOrganisations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const organisations = await prisma.organisation.findMany();

    res.status(200).json(organisations);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching organisations: ${error.message}`,
      error,
    });
  }
}

export async function createOrganisation(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newOrganisation = await prisma.organisation.create({
      data: req.body,
    });

    res.status(201).json(newOrganisation);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating organisation: ${error.message}`,
      error,
    });
  }
}
