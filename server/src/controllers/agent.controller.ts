import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getAgents(req: Request, res: Response): Promise<void> {
  try {
    const agents = await prisma.agent.findMany();

    res.status(200).json(agents);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching agents: ${error.message}`,
      error,
    });
  }
}

export async function createAgent(req: Request, res: Response): Promise<void> {
  try {
    const newAgent = await prisma.agent.create({
      data: req.body,
    });

    res.status(201).json(newAgent);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating agent: ${error.message}`,
      error,
    });
  }
}
