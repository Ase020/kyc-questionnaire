import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getPolicyComponents(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const policyComponents = await prisma.policyComponent.findMany();

    res.status(200).json(policyComponents);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching policy components: ${error.message}`,
      error,
    });
  }
}

export async function createPolicyComponent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newPolicyComponent = await prisma.policyComponent.create({
      data: req.body,
    });

    res.status(201).json(newPolicyComponent);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating policy component: ${error.message}`,
      error,
    });
  }
}
